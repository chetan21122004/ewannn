/** Simple Brevo relay: website form → admin inbox. Set BREVO_API_KEY on Vercel. */

const ALLOWED_RECIPIENTS = new Set(["soham@uvan.co.in", "projects@uvan.co.in"]);

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

export default async function handler(req, res) {
  if (req.method === "OPTIONS") {
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    return res.status(204).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) {
    return res.status(503).json({ error: "Email service not configured" });
  }

  const body = req.body ?? {};
  const to = typeof body.to === "string" ? body.to.trim().toLowerCase() : "";
  const subject = typeof body.subject === "string" ? body.subject.trim() : "";
  const fields = body.fields && typeof body.fields === "object" ? body.fields : {};

  if (!ALLOWED_RECIPIENTS.has(to)) {
    return res.status(400).json({ error: "Invalid recipient" });
  }

  if (!subject) {
    return res.status(400).json({ error: "Subject is required" });
  }

  if (fields._gotcha && String(fields._gotcha).trim()) {
    return res.status(200).json({ ok: true });
  }

  const senderEmail = process.env.BREVO_SENDER_EMAIL?.trim() || "noreply@uvan.co.in";
  const senderName = process.env.BREVO_SENDER_NAME?.trim() || "UVAN Website";

  const brevoRes = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: {
      accept: "application/json",
      "api-key": apiKey,
      "content-type": "application/json",
    },
    body: JSON.stringify({
      sender: { name: senderName, email: senderEmail },
      to: [{ email: to }],
      replyTo: fields.email ? { email: String(fields.email).trim() } : undefined,
      subject,
      htmlContent: buildHtmlBody(subject, fields),
      textContent: buildTextBody(subject, fields),
    }),
  });

  if (!brevoRes.ok) {
    const detail = await brevoRes.text();
    console.error("Brevo error:", brevoRes.status, detail);
    return res.status(502).json({ error: "Failed to send email" });
  }

  return res.status(200).json({ ok: true });
}
