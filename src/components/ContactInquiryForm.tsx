import { useState, type FormEvent } from "react";
import { ArrowRight, Clock3, ShieldCheck } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { contactRegionOptions, contactServiceOptions } from "@/data/contactFormOptions";
import FormHoneypot from "@/components/FormHoneypot";
import { submitForm } from "@/lib/formSubmit";
import { SOHAM_EMAIL } from "@/lib/site";

const inputClassName =
  "mt-1.5 w-full rounded-xl border border-[hsl(var(--border-light))] bg-white px-4 py-2.5 text-sm outline-none transition focus:border-[hsl(var(--brand-purple-500))] focus:ring-2 focus:ring-[hsl(var(--brand-purple-500)/0.15)]";

type ContactInquiryFormProps = {
  showMeta?: boolean;
  onSubmitted?: () => void;
  recipientEmail?: string;
};

const ContactInquiryForm = ({
  showMeta = true,
  onSubmitted,
  recipientEmail = SOHAM_EMAIL,
}: ContactInquiryFormProps) => {
  const reduceMotion = useReducedMotion();
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [usedMailtoFallback, setUsedMailtoFallback] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);
    const result = await submitForm(event.currentTarget, recipientEmail, "UVAN Website Inquiry");
    event.currentTarget.reset();
    setUsedMailtoFallback(result === "mailto_fallback");
    setSubmitted(true);
    setSubmitting(false);
    onSubmitted?.();
  };

  if (submitted) {
    return (
      <p className="rounded-xl border border-[hsl(var(--brand-gold-500)/0.3)] bg-[hsl(var(--brand-gold-500)/0.12)] px-4 py-3 text-sm font-medium leading-relaxed text-on-light">
        {usedMailtoFallback
          ? `Thank you! Your email client should open with your message addressed to ${recipientEmail} — send it to complete your inquiry.`
          : "Thank you! We've received your message and will get back to you within one business day."}
      </p>
    );
  }

  return (
    <form className="relative space-y-3.5 sm:space-y-4" onSubmit={handleSubmit}>
      <FormHoneypot />
      <div className="grid gap-3.5 sm:grid-cols-2 sm:gap-4">
        <label className="text-sm font-medium text-on-light">
          Name (Required)
          <input required name="fullName" type="text" placeholder="Your Name" className={inputClassName} />
        </label>
        <label className="text-sm font-medium text-on-light">
          Company
          <input name="company" type="text" placeholder="Company Name" className={inputClassName} />
        </label>
      </div>

      <div className="grid gap-3.5 sm:grid-cols-2 sm:gap-4">
        <label className="text-sm font-medium text-on-light">
          Your Email (required)
          <input required name="email" type="email" placeholder="you@company.com" className={inputClassName} />
        </label>
        <label className="text-sm font-medium text-on-light">
          Phone
          <input name="phone" type="tel" placeholder="+91 00000 00000" className={inputClassName} />
        </label>
      </div>

      <label className="block text-sm font-medium text-on-light">
        Choose Subject
        <select required name="service" defaultValue="" className={inputClassName}>
          <option value="" disabled>
            Select a service area
          </option>
          {contactServiceOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>

      <label className="block text-sm font-medium text-on-light">
        Trade Corridor
        <select name="region" defaultValue="" className={inputClassName}>
          <option value="" disabled>
            Select your trade corridor
          </option>
          {contactRegionOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>

      <label className="block text-sm font-medium text-on-light">
        Your Message (required)
        <textarea
          required
          name="message"
          placeholder="Tell us about your project or question..."
          rows={4}
          className={inputClassName}
        />
      </label>

      <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
        <motion.button
          type="submit"
          disabled={submitting}
          whileHover={reduceMotion ? undefined : { scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[hsl(var(--brand-purple-700))] px-7 py-3 text-sm font-semibold text-white transition hover:brightness-110 disabled:opacity-60 sm:w-auto"
        >
          {submitting ? "Sending…" : "Send Message"}
          <ArrowRight className="h-4 w-4 shrink-0" aria-hidden />
        </motion.button>
        {showMeta ? (
          <div className="flex flex-wrap gap-x-4 gap-y-1">
            <span className="inline-flex items-center gap-1.5 text-[11px] text-on-light-secondary sm:text-xs">
              <Clock3 className="h-3.5 w-3.5 text-[hsl(var(--brand-gold-600))]" aria-hidden />
              Response within 24 hrs
            </span>
            <span className="inline-flex items-center gap-1.5 text-[11px] text-on-light-secondary sm:text-xs">
              <ShieldCheck className="h-3.5 w-3.5 text-[hsl(var(--brand-gold-600))]" aria-hidden />
              Confidential
            </span>
          </div>
        ) : null}
      </div>
    </form>
  );
};

export default ContactInquiryForm;
