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
        <div className="grid items-center gap-s6 nav:grid-cols-1">
          <div className="grid grid-cols-[minmax(0,1fr)_minmax(280px,0.72fr)] items-center gap-s6 nav:grid-cols-1">
            <div>
              <p className="mb-s2 font-sans text-micro font-semibold uppercase tracking-wide text-ink-soft">
                {hero.eyebrow}
              </p>

              <h1 className="font-serif text-display font-medium leading-tight text-ink">
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

                <Link
                  href={hero.secondaryCta.href}
                  className={secondaryCtaClasses}
                >
                  {hero.secondaryCta.label}
                </Link>
              </div>
            </div>

            <div
              aria-hidden="true"
              className="relative min-h-[360px] overflow-hidden rounded-panel border border-rule bg-paper-alt/60 nav:min-h-[300px] stack:min-h-[260px]"
            >
              <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-accent opacity-80" />

              <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-cyan opacity-70" />

              <div className="absolute left-6 top-6 font-sans text-micro font-semibold uppercase tracking-wide text-ink-soft">
                Spanish in use
              </div>

              <div className="absolute left-6 top-1/2 -translate-y-1/2 font-serif text-[clamp(2.6rem,4.5vw,4rem)] leading-none text-ink">
                hablar
                <br />
                escuchar
                <br />
                conectar
              </div>

              <div className="absolute bottom-4 right-4 max-w-[155px] rounded-control border border-rule bg-paper px-s2 py-s1.5 shadow-sm">
                <p className="font-sans text-[0.65rem] font-semibold uppercase leading-tight tracking-wide text-ink-soft">
                  Real-world communication
                </p>

                <p className="mt-1 font-serif text-h3 italic leading-tight text-ink">
                  aprender haciendo
                </p>
              </div>
            </div>
          </div>

          <ul className="flex flex-wrap gap-s4 border-t border-rule-soft pt-s3 stack:flex-col stack:gap-s2">
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
      </div>
    </section>
  );
}
