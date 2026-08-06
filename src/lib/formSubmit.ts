/** Form submission: POST to Brevo API route on Vercel, with mailto fallback for local dev. */

export type SubmitFormResult = "sent" | "mailto_fallback";

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

/** Collect FormData into a plain object, noting file selections by filename. */
export function collectFormFields(form: HTMLFormElement): Record<string, string> {
  const data = new FormData(form);
  const fields: Record<string, string> = {};

  for (const [key, value] of data.entries()) {
    if (value instanceof File) {
      if (value.name) {
        fields[key] = value.name ? `${value.name} (file selected — reply to applicant for attachment if needed)` : "";
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
): Promise<boolean> {
  if (fields._gotcha?.trim()) {
    return true;
  }

  const response = await fetch("/api/forms/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ to, subject, fields }),
  });

  return response.ok;
}

/** Submit form fields to the admin inbox via Brevo (or mailto if API unavailable). */
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
    // fall through to mailto
  }

  window.location.href = buildFormMailtoUrl(to, subject, fields);
  return "mailto_fallback";
}

export async function submitForm(
  form: HTMLFormElement,
  to: string,
  subject: string,
): Promise<SubmitFormResult> {
  if (isHoneypotFilled(form)) {
    return "sent";
  }

  const fields = collectFormFields(form);

  try {
    if (await postFormToApi(to, subject, fields)) {
      return "sent";
    }
  } catch {
    // fall through to mailto
  }

  window.location.href = buildFormMailtoUrl(to, subject, fields);
  return "mailto_fallback";
}

/** @deprecated Use submitForm — kept for any remaining direct calls */
export function submitFormViaMailto(form: HTMLFormElement, to: string, subject: string): void {
  const fields = collectFormFields(form);
  window.location.href = buildFormMailtoUrl(to, subject, fields);
}


function formatFieldLabel(key: string): string {
  return key
    .replace(/[-_]/g, " ")
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/\b\w/g, (char) => char.toUpperCase());
}
