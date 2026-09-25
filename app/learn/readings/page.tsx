const readings = [
  {
    level: "Novice",
    topic: "Everyday Spanish",
    title: "A Day in Cali",
    description:
      "A short look at everyday life in Cali through familiar routines, places, and experiences.",
    excerpt:
      "Por la mañana, las calles de Cali empiezan a llenarse de gente. Algunas personas van al trabajo...",
    readingTime: "5 min read",
  },
  {
    level: "Novice – Intermediate",
    topic: "Language & Culture",
    title: "Why Do Colombians Say “Pues”?",
    description:
      "Explore one small word that can take on different meanings depending on the situation.",
    excerpt:
      "Pues... depende. En Colombia, esta pequeña palabra puede aparecer en muchas conversaciones...",
    readingTime: "7 min read",
  },
  {
    level: "Intermediate",
    topic: "Culture",
    title: "More Than Just a Greeting",
    description:
      "Discover how greetings and everyday interactions can reveal something about culture and relationships.",
    excerpt:
      "En muchos lugares, saludar no es simplemente decir hola. La manera en que saludamos...",
    readingTime: "8 min read",
  },
  {
    level: "Intermediate – Advanced",
    topic: "Language",
    title: "Spanish in Everyday Life",
    description:
      "Look at the expressions, patterns, and language choices that appear naturally in daily interactions.",
    excerpt:
      "Cuando aprendemos un idioma, muchas de las expresiones más interesantes no aparecen...",
    readingTime: "10 min read",
  },
];

export default function ReadingsPage() {
  return (
    <main>
      {/* Page introduction */}
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
              Learn / Readings
            </p>
          </div>

          <div className="mt-s4 max-w-4xl">
            <h1 className="font-serif text-display font-medium text-ink">
              Read and explore
            </h1>

            <p className="gloss mt-s1 text-h2">Lee y explora</p>

            <p className="prose-measure mt-s5 font-sans text-body text-ink-soft">
              Explore Spanish through short readings about language, culture,
              everyday life, and the Spanish-speaking world. Each text gives you
              something interesting to understand while helping you encounter
              useful Spanish in context.
            </p>
          </div>
        </div>
      </section>

      {/* Reading library */}
      <section className="bg-paper-alt">
        <div className="container py-s7">
          <div className="flex items-end justify-between gap-s5 nav:flex-col nav:items-start nav:gap-s3">
            <div>
              <p className="font-sans text-micro font-semibold uppercase tracking-wide text-ink-soft">
                Reading library
              </p>

              <h2 className="mt-s1 font-serif text-h2 font-medium text-ink">
                Explore the readings
              </h2>
            </div>

            <p className="max-w-sm font-serif text-small italic text-ink-soft">
              Read something interesting. Notice what the language is doing.
            </p>
          </div>

          <div className="mt-s6 space-y-0">
            {readings.map((reading, index) => (
              <article
                key={reading.title}
                className="group border-t border-rule py-s5 transition-all duration-300 ease-out hover:px-s2"
              >
                <div className="grid grid-cols-[80px_minmax(0,1fr)_180px] items-start gap-s5 nav:grid-cols-[60px_minmax(0,1fr)]">
                  {/* Number */}
                  <p className="font-serif text-h3 text-ink-soft/50">
                    {String(index + 1).padStart(2, "0")}
                  </p>

                  {/* Main content */}
                  <div>
                    <div className="flex flex-wrap gap-x-s3 gap-y-1">
                      <p className="font-sans text-micro font-semibold uppercase tracking-wide text-ink-soft">
                        {reading.level}
                      </p>

                      <span
                        aria-hidden="true"
                        className="font-sans text-micro text-ink-soft/50"
                      >
                        /
                      </span>

                      <p className="font-sans text-micro font-semibold uppercase tracking-wide text-ink-soft">
                        {reading.topic}
                      </p>
                    </div>

                    <h3 className="mt-s2 font-serif text-h3 font-medium text-ink transition-colors duration-200 group-hover:text-accent-deep">
                      {reading.title}
                    </h3>

                    <p className="mt-s2 max-w-measure font-sans text-small text-ink-soft">
                      {reading.description}
                    </p>

                    <div className="mt-s3 border-l-2 border-bronze pl-s3">
                      <p className="font-serif text-small italic text-ink">
                        {reading.excerpt}
                      </p>
                    </div>
                  </div>

                  {/* Reading metadata */}
                  <div className="flex flex-col items-end gap-s3 nav:col-start-2 nav:items-start">
                    <p className="font-sans text-micro font-semibold uppercase tracking-wide text-ink-soft">
                      {reading.readingTime}
                    </p>

                    <span className="inline-flex min-h-11 items-center gap-1 border-b border-accent-deep font-sans text-small font-semibold text-accent-deep transition-colors duration-200 group-hover:border-accent group-hover:text-accent">
                      <span>Read article</span>

                      <span
                        aria-hidden="true"
                        className="transition-transform duration-200 group-hover:translate-x-1"
                      >
                        →
                      </span>
                    </span>
                  </div>
                </div>
              </article>
            ))}

            <div className="border-t border-rule" />
          </div>
        </div>
      </section>

      {/* Learning context */}
      <section className="bg-paper">
        <div className="container py-s7">
          <div className="grid grid-cols-[minmax(0,0.7fr)_minmax(360px,1fr)] gap-s7 nav:grid-cols-1 nav:gap-s5">
            <div>
              <p className="font-sans text-micro font-semibold uppercase tracking-wide text-ink-soft">
                While you read
              </p>

              <h2 className="mt-s2 font-serif text-h2 font-medium text-ink">
                Read for meaning
              </h2>

              <p className="gloss mt-s1 text-h3">Lee para entender</p>
            </div>

            <div className="prose-measure">
              <p className="font-sans text-body text-ink">
                You don't need to understand every word to understand a text.
                Start with the main idea, the context, and what you already
                know.
              </p>

              <p className="mt-s4 font-sans text-body text-ink">
                As you read, notice expressions, vocabulary, and patterns that
                seem useful. Let the surrounding language help you make sense of
                something new.
              </p>

              <p className="mt-s4 font-sans text-body text-ink-soft">
                Individual readings will eventually include vocabulary support,
                comprehension activities, language notes, and connections to
                related videos and other readings.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
