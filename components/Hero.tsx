import Link from "next/link";

const hero = {
  eyebrow: "Spanish lessons",

  headline: "Spanish for the real world.",

  gloss: "Español para el mundo real.",

  body: "Our classes follow ACTFL proficiency guidelines, with clear goals for each level and a focus on what students can actually do with Spanish. Through Communicative Language Teaching (CLT), students use grammar, vocabulary, and language concepts to accomplish meaningful goals through real-world topics, situations, and interactions.",

  primaryCta: { label: "See upcoming sessions", href: "#sessions" },

  secondaryCta: { label: "Meet the teacher", href: "#about" },

  meta: [
    "Novice – Advanced",
    "Small group classes",
    "Real-world communication",
  ],
};

const primaryCtaClasses =
  "inline-flex min-h-11 items-center justify-center rounded-control bg-accent-deep px-s3 py-s2 font-sans text-small font-semibold text-paper transition-colors hover:bg-ink";

const secondaryCtaClasses =
  "inline-flex min-h-11 items-center justify-center rounded-control border border-rule px-s3 py-s2 font-sans text-small font-semibold text-ink transition-colors hover:border-ink hover:bg-paper-alt/50";

export default function Hero() {
  return (
    <section className="border-b border-rule-soft bg-paper">
      <div className="container motion-safe:animate-fade-in py-s7">
        <p className="mb-s2 font-sans text-micro font-semibold uppercase tracking-wide text-ink-soft">
          {hero.eyebrow}
        </p>

        <h1 className="font-serif text-display font-medium text-ink">
          {hero.headline}
        </h1>

        <p className="gloss mt-s2 text-h3">{hero.gloss}</p>

        <p className="prose-measure mt-s4 font-sans text-body text-ink-soft">
          {hero.body}
        </p>

        <div className="mt-s5 flex flex-wrap gap-s3 stack:flex-col">
          <Link href={hero.primaryCta.href} className={primaryCtaClasses}>
            {hero.primaryCta.label}
          </Link>
          <Link href={hero.secondaryCta.href} className={secondaryCtaClasses}>
            {hero.secondaryCta.label}
          </Link>
        </div>

        <ul className="mt-s5 flex flex-wrap gap-s4 border-t border-rule-soft pt-s3 stack:flex-col stack:gap-s2">
          {hero.meta.map((item) => (
            <li
              key={item}
              className="font-sans text-micro font-medium uppercase tracking-wide text-ink-soft"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
