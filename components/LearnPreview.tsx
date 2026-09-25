const featured = [
  {
    type: "Video",
    number: "01",
    title: "Spanish through the real world",
    description:
      "Watch, listen, and experience Spanish through conversations, stories, and everyday situations.",
    cta: "Explore videos",
    href: "/learn/videos",
  },
  {
    type: "Reading",
    number: "02",
    title: "Spanish you can use",
    description:
      "Read about language, culture, and everyday life while encountering Spanish in meaningful contexts.",
    cta: "Explore readings",
    href: "/learn/readings",
  },
];

export default function LearnPreview() {
  return (
    <section id="learn" className="bg-paper">
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

        <div className="group mt-s2 flex items-end justify-between gap-s5 nav:flex-col nav:items-start nav:gap-s3">
          <div>
            <h2 className="font-serif text-h2 font-medium text-ink">
              Learn Spanish
            </h2>

            <p className="gloss mt-s1 text-h3 transition-transform duration-300 ease-out group-hover:-translate-y-0.5">
              Aprende español
            </p>
          </div>

          <div
            aria-hidden="true"
            className="mb-2 h-px w-24 origin-right bg-bronze transition-all duration-300 ease-out group-hover:w-32 nav:hidden"
          />
        </div>

        <p className="prose-measure mt-s3 font-sans text-body text-ink-soft">
          Explore Spanish through real-world language, culture, conversations,
          and stories. Learn through Spanish that has something to say.
        </p>

        <div className="mt-s6 grid grid-cols-2 gap-s4 nav:grid-cols-1">
          {featured.map((item) => (
            <article
              key={item.type}
              className="group relative overflow-hidden rounded-panel border border-rule bg-paper-alt p-s5 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex items-start justify-between">
                <p className="font-sans text-micro font-semibold uppercase tracking-wide text-ink-soft">
                  {item.type}
                </p>

                <span
                  aria-hidden="true"
                  className="font-serif text-h3 text-ink-soft/40 transition-transform duration-300 ease-out group-hover:translate-x-1"
                >
                  {item.number}
                </span>
              </div>

              <div className="mt-s6 max-w-measure">
                <h3 className="font-serif text-h3 font-medium text-ink transition-colors duration-200 group-hover:text-accent-deep">
                  {item.title}
                </h3>

                <p className="mt-s2 font-sans text-small text-ink">
                  {item.description}
                </p>
              </div>

              <div className="mt-s6 flex items-center justify-between border-t border-rule-soft pt-s3">
                <a
                  href={item.href}
                  className="inline-flex min-h-11 items-center gap-1 border-b border-accent-deep font-sans text-small font-semibold text-accent-deep transition-colors duration-200 hover:border-accent hover:text-accent"
                >
                  <span>{item.cta}</span>

                  <span
                    aria-hidden="true"
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </a>

                <span
                  aria-hidden="true"
                  className="h-2 w-2 rounded-full bg-cyan-deep opacity-60 transition-transform duration-300 ease-out group-hover:scale-125"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
