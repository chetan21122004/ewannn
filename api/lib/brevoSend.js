/** Shared Brevo transactional email logic (Vercel + Vite dev server). */

export const ALLOWED_RECIPIENTS = new Set(["soham@uvan.co.in", "projects@uvan.co.in"]);

function formatFieldLabel(key) {
  return key
    .replace(/[-_]/g, " ")
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

function buildHtmlBody(subject, fields) {
  const rows = Object.entries(fields)
    .filter(([key, value]) => key !== "_gotcha" && String(value).trim())
    .map(
      ([key, value]) =>
        `<tr><td style="padding:8px 12px;font-weight:600;vertical-align:top;border-bottom:1px solid #eee">${formatFieldLabel(key)}</td><td style="padding:8px 12px;border-bottom:1px solid #eee">${String(value).replace(/</g, "&lt;")}</td></tr>`,
    )
    .join("");

  return `<p style="font-family:sans-serif;color:#333">New submission from the UVAN website.</p>
<p style="font-family:sans-serif;color:#666;font-size:14px"><strong>Subject:</strong> ${subject.replace(/</g, "&lt;")}</p>
<table style="font-family:sans-serif;font-size:14px;border-collapse:collapse;width:100%;max-width:560px;margin-top:16px">${rows}</table>`;
}

function buildTextBody(subject, fields) {
  const lines = Object.entries(fields)
    .filter(([key, value]) => key !== "_gotcha" && String(value).trim())
    .map(([key, value]) => `${formatFieldLabel(key)}: ${value}`);
  return [`Subject: ${subject}`, "", "New submission from the UVAN website.", "", ...lines].join("\n");
}

function getReplyToEmail(fields) {
  const raw = fields.email ?? fields.Email ?? fields["your-email"];
  if (!raw || !String(raw).trim()) return null;
  const email = String(raw).trim();
  return email.includes("@") ? email : null;
}

/**
 * @param {{ to: string, subject: string, fields: Record<string, string> }} input
 * @param {{ BREVO_API_KEY?: string, BREVO_SENDER_EMAIL?: string, BREVO_SENDER_NAME?: string }} env
 * @returns {Promise<{ status: number, body: Record<string, unknown> }>}
 */
export async function handleFormSubmit(input, env) {
  const apiKey = env.BREVO_API_KEY?.trim();
  if (!apiKey) {
    return { status: 503, body: { error: "Email service not configured" } };
  }

  const to = typeof input.to === "string" ? input.to.trim().toLowerCase() : "";
  const subject = typeof input.subject === "string" ? input.subject.trim() : "";
  const fields = input.fields && typeof input.fields === "object" ? input.fields : {};

  if (!ALLOWED_RECIPIENTS.has(to)) {
    return { status: 400, body: { error: "Invalid recipient" } };
  }

  if (!subject) {
    return { status: 400, body: { error: "Subject is required" } };
  }

  if (fields._gotcha && String(fields._gotcha).trim()) {
    return { status: 200, body: { ok: true } };
  }

  const senderEmail = env.BREVO_SENDER_EMAIL?.trim() || "noreply@uvan.co.in";
  const senderName = env.BREVO_SENDER_NAME?.trim() || "UVAN Website";

  const payload = {
    sender: { name: senderName, email: senderEmail },
    to: [{ email: to }],
    subject,
    htmlContent: buildHtmlBody(subject, fields),
    textContent: buildTextBody(subject, fields),
  };

  const replyToEmail = getReplyToEmail(fields);
  if (replyToEmail) {
    payload.replyTo = { email: replyToEmail };
  }

  const brevoRes = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: {
      accept: "application/json",
      "api-key": apiKey,
      "content-type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!brevoRes.ok) {
    const detail = await brevoRes.text();
    console.error("Brevo error:", brevoRes.status, detail);
    return { status: 502, body: { error: "Failed to send email" } };
  }

  return { status: 200, body: { ok: true } };
}
