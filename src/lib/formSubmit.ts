/** Form submission via Brevo API route (/api/forms/submit). */

export type SubmitFormResult = "sent" | "error" | "file-too-large";

/** Stay under the host request-body limit after base64 expansion. */
export const MAX_ATTACHMENT_BYTES = 2.5 * 1024 * 1024;

export type FormAttachment = {
  name: string;
  content: string;
};

export function buildFormMailtoUrl(
  to: string,
  subject: string,
  fields: Record<string, string>,
): string {
  const body = Object.entries(fields)
    .filter(([key, value]) => key !== "_gotcha" && value.trim().length > 0)
    .map(([key, value]) => `${formatFieldLabel(key)}: ${value}`)
    .join("\n\n");

  return `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function fileToBase64(file: File): Promise<string> {
  return file.arrayBuffer().then((buffer) => {
    const bytes = new Uint8Array(buffer);
    let binary = "";
    const chunkSize = 0x8000;
    for (let index = 0; index < bytes.length; index += chunkSize) {
      binary += String.fromCharCode(...bytes.subarray(index, index + chunkSize));
    }
    return btoa(binary);
  });
}

/** Collect text fields and encode selected files so they can be emailed as attachments. */
export async function collectFormPayload(form: HTMLFormElement): Promise<{
  fields: Record<string, string>;
  attachments: FormAttachment[];
  error?: "file-too-large";
}> {
  const data = new FormData(form);
  const fields: Record<string, string> = {};
  const attachments: FormAttachment[] = [];

  for (const [key, value] of data.entries()) {
    if (value instanceof File) {
      if (!value.name || value.size === 0) continue;
      if (value.size > MAX_ATTACHMENT_BYTES) {
        return { fields, attachments, error: "file-too-large" };
      }
      attachments.push({ name: value.name, content: await fileToBase64(value) });
      fields[key] = `${value.name} (attached)`;
      continue;
    }
    fields[key] = String(value);
  }

  return { fields, attachments };
}

/** Collect FormData into a plain object. File fields are recorded by filename only. */
export function collectFormFields(form: HTMLFormElement): Record<string, string> {
  const data = new FormData(form);
  const fields: Record<string, string> = {};

  for (const [key, value] of data.entries()) {
    if (value instanceof File) {
      if (value.name) {
        fields[key] = value.name;
      }
      continue;
    }
    fields[key] = String(value);
  }

  return fields;
}

function isHoneypotFilled(form: HTMLFormElement): boolean {
  const gotcha = new FormData(form).get("_gotcha");
  return typeof gotcha === "string" && gotcha.trim().length > 0;
}

async function postFormToApi(
  to: string,
  subject: string,
  fields: Record<string, string>,
  attachments: FormAttachment[] = [],
): Promise<boolean> {
  if (fields._gotcha?.trim()) {
    return true;
  }

  const response = await fetch("/api/forms/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ to, subject, fields, attachments }),
  });

  return response.ok;
}

/** Submit form fields to the admin inbox via Brevo. */
export async function submitFormFields(
  to: string,
  subject: string,
  fields: Record<string, string>,
): Promise<SubmitFormResult> {
  if (fields._gotcha?.trim()) {
    return "sent";
  }

  try {
    if (await postFormToApi(to, subject, fields)) {
      return "sent";
    }
  } catch {
    return "error";
  }

  return "error";
}

export async function submitForm(
  form: HTMLFormElement,
  to: string,
  subject: string,
): Promise<SubmitFormResult> {
  if (isHoneypotFilled(form)) {
    return "sent";
  }

  const payload = await collectFormPayload(form);
  if (payload.error === "file-too-large") {
    return "file-too-large";
  }

  try {
    if (await postFormToApi(to, subject, payload.fields, payload.attachments)) {
      return "sent";
    }
  } catch {
    return "error";
  }

  return "error";
}

function formatFieldLabel(key: string): string {
  return key
    .replace(/[-_]/g, " ")
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/\b\w/g, (char) => char.toUpperCase());
}
