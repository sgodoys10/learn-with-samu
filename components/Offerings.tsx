// components/Offerings.tsx
import OfferingPanel from "./OfferingPanel";

// PLACEHOLDER content — descriptions, bullets, and CTAs below are
// structural placeholders only. No pricing, duration, or class-size
// claims are invented; replace with real details once decided.
const connector =
  '[Connecting line — e.g. "However you learn, the teaching approach stays the same."]';

const group = {
  heading: "Group Spanish Classes",
  gloss: "Clases grupales de español",
  description: "[Description of the group class format and who it's for.]",
  bullets: [
    "[Meeting pattern / length]",
    "[Group size]",
    "[Price per session]",
  ],
  ctaLabel: "See which sessions are open",
  ctaHref: "#sessions",
};

const privateClasses = {
  heading: "Private Spanish Classes",
  gloss: "Clases particulares de español",
  description: "[Description of private instruction and how it's customized.]",
  bullets: ["[Lesson length / frequency]", "[Rate]", "[How scheduling works]"],
  ctaLabel: "Ask about private lessons",
  ctaHref: "#contact",
};

/**
 * Two parallel offerings (group, private) sharing one panel structure so
 * they read as two forms of the same teaching approach, per spec.
 */
export default function Offerings() {
  return (
    <section id="classes" className="bg-paper">
      <div className="container py-s7">
        <p className="mb-s2 font-sans text-micro font-semibold uppercase tracking-wide text-ink-soft">
          How you can learn
        </p>
        <h2 className="font-serif text-h2 font-medium text-ink">
          Two ways to learn
        </h2>
        <p className="gloss mt-s1 text-h3">Dos maneras de aprender</p>

        <p className="prose-measure mt-s3 font-sans text-body text-ink-soft">
          {connector}
        </p>

        <div className="mt-s5 grid grid-cols-2 gap-s4 nav:grid-cols-1">
          <OfferingPanel {...group} />
          <OfferingPanel {...privateClasses} />
        </div>
      </div>
    </section>
  );
}
