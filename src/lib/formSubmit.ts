/** Build a mailto URL from form field values (client-side form routing until a backend is added). */
export function buildFormMailtoUrl(
  to: string,
  subject: string,
  fields: Record<string, string>,
): string {
  const body = Object.entries(fields)
    .filter(([, value]) => value.trim().length > 0)
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
        fields[key] = `${value.name} (attach this file in your email client)`;
      }
      continue;
    }
    fields[key] = String(value);
  }

  return fields;
}

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
