import type { Plugin } from "vite";
import { loadEnv } from "vite";
import { handleFormSubmit } from "./api/lib/brevoSend.js";

/** Dev-only: serve POST /api/forms/submit using .env Brevo credentials (same as Vercel). */
export function formApiDevPlugin(mode: string): Plugin {
  return {
    name: "uvan-form-api-dev",
    configureServer(server) {
      const env = loadEnv(mode, process.cwd(), "");

      server.middlewares.use((req, res, next) => {
        const url = req.url?.split("?")[0];
        if (url !== "/api/forms/submit") {
          next();
          return;
        }

        if (req.method === "OPTIONS") {
          res.statusCode = 204;
          res.end();
          return;
        }

        if (req.method !== "POST") {
          res.statusCode = 405;
          res.setHeader("Content-Type", "application/json");
          res.end(JSON.stringify({ error: "Method not allowed" }));
          return;
        }

        const chunks: Buffer[] = [];
        req.on("data", (chunk) => chunks.push(chunk));
        req.on("end", async () => {
          try {
            const raw = Buffer.concat(chunks).toString("utf8");
            const parsed = raw ? JSON.parse(raw) : {};
            const result = await handleFormSubmit(parsed, {
              BREVO_API_KEY: env.BREVO_API_KEY,
              BREVO_SENDER_EMAIL: env.BREVO_SENDER_EMAIL,
              BREVO_SENDER_NAME: env.BREVO_SENDER_NAME,
            });
            res.statusCode = result.status;
            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify(result.body));
          } catch (error) {
            console.error("Form API dev error:", error);
            res.statusCode = 500;
            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify({ error: "Server error" }));
          }
        });
      });
    },
  };
}
