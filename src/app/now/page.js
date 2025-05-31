import FeedbackForm from "@/components/FeedbackForm";
import { Navbar } from "@/components/HomeNavbar";

const comingSoon = [
  "More UI components",
  "Custom theme builder",
  "Advanced component controls",
  "Light & dark mode customization",
  "And much more...",
];

export default function WhatsNewPage() {
  return (
    <>
      <Navbar />
      <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-text-primary bg-bg my-14">
        <h1 className="text-3xl font-bold mb-4">🚀 What’s New in TweakTail</h1>
        <p className="text-muted-foreground mb-8">
          Welcome to the evolution of TweakTail! We're constantly improving to
          make your experience even better. Here’s what’s new — and what’s
          coming.
        </p>

        <h2 className="text-2xl font-bold mt-12 mb-4 text-text-primary">
          🔮 Upcoming Features
        </h2>
        <p className="text-muted-foreground mb-4">
          We're just getting started. Here's a sneak peek at what's coming soon:
        </p>
        <ul className="list-disc list-inside space-y-2 text-sm text-text-secondary">
          {comingSoon.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>

        <div className="mt-12">
          <h3 className="text-xl text-text-primary font-bold mb-2">
            💬 We’d love your feedback!
          </h3>
          <p className="text-text-primary mb-4">
            Your thoughts and ideas help shape TweakTail. Got a feature request,
            an improvement idea, or just want to say hi? Reach out — we’re all
            ears.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="mailto:ashraful.inbox@example.com"
              className="underline hover:text-text-accent text-sm"
            >
              📧 Send us an Email
            </a>
            <FeedbackForm position="top" variant="secondary" />
          </div>
        </div>
      </div>
    </>
  );
}
