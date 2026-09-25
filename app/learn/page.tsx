const learningPaths = [
  {
    type: "Video",
    number: "01",
    title: "Watch and listen",
    description:
      "Encounter Spanish through conversations, stories, places, and everyday situations. Videos give you a chance to hear the language in context and notice how people actually communicate.",
    examples: [
      "A Morning in Cali",
      "Ordering Lunch in Colombia",
      "What Colombians Say Instead of “What's Up?”",
    ],
    href: "/learn/videos",
  },
  {
    type: "Reading",
    number: "02",
    title: "Read and explore",
    description:
      "Short readings bring Spanish, culture, and interesting ideas together. Each text gives you something meaningful to understand while helping you notice useful language along the way.",
    examples: [
      "Why do Colombians say “Pues”?",
      "A Day in Cali",
      "Spanish through everyday life",
    ],
    href: "/learn/readings",
  },
];

export default function LearnPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-paper">
        <div className="container py-s7">
          <div className="group flex w-fit items-center gap-s2">
            <span
              aria-hidden="true"
              className="h-2 w-2 rounded-full bg-accent transition-transform duration-300 ease-out group-hover:translate-x-1"
            />

            <span
              aria-hidden="true"
              className="h-px w-6 bg-rule transition-all duration-300 ease-out group-hover:w-8"
            />

            <p className="font-sans text-micro font-semibold uppercase tracking-wide text-ink-soft">
              Learn
            </p>
          </div>

          <div className="mt-s4 max-w-4xl">
            <h1 className="font-serif text-display font-medium text-ink">
              Learn Spanish
            </h1>

            <p className="gloss mt-s1 text-h2">Aprende español</p>

            <p className="prose-measure mt-s5 font-sans text-body text-ink-soft">
              Learn through Spanish that has something to say. Explore
              conversations, stories, culture, and everyday language through
              videos and readings designed to help you encounter Spanish in
              meaningful contexts.
            </p>
          </div>
        </div>
      </section>

      {/* Learning paths */}
      <section className="bg-paper-alt">
        <div className="container py-s7">
          <div className="flex items-end justify-between gap-s5 nav:flex-col nav:items-start nav:gap-s3">
            <div>
              <p className="font-sans text-micro font-semibold uppercase tracking-wide text-ink-soft">
                Explore
              </p>

              <h2 className="mt-s1 font-serif text-h2 font-medium text-ink">
                Find something to explore
              </h2>
            </div>

            <p className="max-w-sm font-serif text-small italic text-ink-soft">
              Start with something that interests you. The Spanish comes with
              it.
            </p>
          </div>

          <div className="mt-s6 grid grid-cols-2 gap-s5 nav:grid-cols-1">
            {learningPaths.map((path) => (
              <article
                key={path.type}
                className="group rounded-panel border border-rule bg-paper p-s5 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex items-start justify-between">
                  <p className="font-sans text-micro font-semibold uppercase tracking-wide text-ink-soft">
                    {path.type}
                  </p>

                  <span
                    aria-hidden="true"
                    className="font-serif text-h3 text-ink-soft/40 transition-transform duration-300 ease-out group-hover:translate-x-1"
                  >
                    {path.number}
                  </span>
                </div>

                <h3 className="mt-s6 font-serif text-h2 font-medium text-ink transition-colors duration-200 group-hover:text-accent-deep">
                  {path.title}
                </h3>

                <p className="mt-s3 max-w-measure font-sans text-body text-ink-soft">
                  {path.description}
                </p>

                <div className="mt-s5 border-t border-rule-soft pt-s4">
                  <p className="font-sans text-micro font-semibold uppercase tracking-wide text-ink-soft">
                    You might find
                  </p>

                  <ul className="mt-s2 space-y-s2">
                    {path.examples.map((example) => (
                      <li
                        key={example}
                        className="flex items-start gap-s2 font-sans text-small text-ink"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-[0.5em] size-1.5 flex-shrink-0 rounded-full bg-accent transition-transform duration-200 group-hover:translate-x-0.5"
                        />

                        <span>{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={path.href}
                  className="mt-s5 inline-flex min-h-11 items-center gap-1 border-b border-accent-deep font-sans text-small font-semibold text-accent-deep transition-colors duration-200 hover:border-accent hover:text-accent"
                >
                  <span>Explore {path.type.toLowerCase()}s</span>

                  <span
                    aria-hidden="true"
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Learning philosophy */}
      <section className="bg-paper">
        <div className="container py-s7">
          <div className="grid grid-cols-[minmax(0,0.7fr)_minmax(360px,1fr)] gap-s7 nav:grid-cols-1 nav:gap-s5">
            <div>
              <p className="font-sans text-micro font-semibold uppercase tracking-wide text-ink-soft">
                How it works
              </p>

              <h2 className="mt-s2 font-serif text-h2 font-medium text-ink">
                Language in context
              </h2>

              <p className="gloss mt-s1 text-h3">El idioma en contexto</p>
            </div>

            <div className="prose-measure">
              <p className="font-sans text-body text-ink">
                The goal isn't to memorize Spanish in isolation. It's to
                encounter language while doing something meaningful with it.
              </p>

              <p className="mt-s4 font-sans text-body text-ink">
                A video might introduce a place, a conversation, or a question.
                A reading might explore an expression, a cultural idea, or an
                everyday experience. Along the way, you'll encounter vocabulary,
                grammar, and language patterns that become useful because they
                are connected to something you understand.
              </p>

              <p className="mt-s4 font-sans text-body text-ink-soft">
                Start wherever something catches your attention. Explore at your
                own pace, and let the language build from there.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
