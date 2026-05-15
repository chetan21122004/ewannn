import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";

const PrivacyPolicy = () => (
  <PageLayout
    title="Privacy Policy | Ewan Business Solutions"
    description="Privacy policy for Ewan Business Solutions — full publication coming soon."
    canonicalPath="/privacy-policy"
  >
    <section className="container mx-auto max-w-2xl px-6 py-16">
      <h1 className="mb-4 font-serif text-3xl font-bold">Privacy Policy</h1>
      <p className="mb-6 text-foreground/80">We're preparing our full privacy policy for publication here soon.</p>
      <Link to="/" className="text-[hsl(var(--brand-gold-500))] transition-colors hover:underline">
        Return to Home
      </Link>
    </section>
  </PageLayout>
);

export default PrivacyPolicy;
