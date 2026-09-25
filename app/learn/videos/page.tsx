const videos = [
  {
    level: "Novice",
    topic: "Everyday Spanish",
    title: "A Morning in Cali",
    description:
      "Follow a simple morning routine in Cali while encountering everyday Spanish in a familiar, real-world context.",
    duration: "Coming soon",
  },
  {
    level: "Novice – Intermediate",
    topic: "Conversation",
    title: "What Colombians Say Instead of “What's Up?”",
    description:
      "Explore the different ways people in Colombia greet each other and ask how someone is doing.",
    duration: "Coming soon",
  },
  {
    level: "Novice – Intermediate",
    topic: "Everyday Spanish",
    title: "Ordering Lunch in Colombia",
    description:
      "Learn how Spanish comes together in a familiar situation: ordering food, asking questions, and interacting with a server.",
    duration: "Coming soon",
  },
  {
    level: "Intermediate",
    topic: "Language & Culture",
    title: "Why Do Colombians Say “Pues”?",
    description:
      "Take a closer look at one small word that can do many different things in Colombian Spanish.",
    duration: "Coming soon",
  },
];

export default function VideosPage() {
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
              Learn / Videos
            </p>
          </div>

          <div className="mt-s4 max-w-4xl">
            <h1 className="font-serif text-display font-medium text-ink">
              Watch and listen
            </h1>

            <p className="gloss mt-s1 text-h2">Mira y escucha</p>

            <p className="prose-measure mt-s5 font-sans text-body text-ink-soft">
              Encounter Spanish through conversations, stories, places, and
              everyday situations. These videos are designed to give you
              meaningful Spanish to listen to, notice, and understand.
            </p>
          </div>
        </div>
      </section>

      {/* Video library */}
      <section className="bg-paper-alt">
        <div className="container py-s7">
          <div className="flex items-end justify-between gap-s5 nav:flex-col nav:items-start nav:gap-s3">
            <div>
              <p className="font-sans text-micro font-semibold uppercase tracking-wide text-ink-soft">
                Video library
              </p>

              <h2 className="mt-s1 font-serif text-h2 font-medium text-ink">
                Explore the videos
              </h2>
            </div>

            <p className="max-w-sm font-serif text-small italic text-ink-soft">
              Interesting topics first. Spanish along the way.
            </p>
          </div>

          <div className="mt-s6 grid grid-cols-2 gap-s5 nav:grid-cols-1">
            {videos.map((video, index) => (
              <article
                key={video.title}
                className="group overflow-hidden rounded-panel border border-rule bg-paper transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-md"
              >
                {/* Video placeholder */}
                <div className="relative aspect-video overflow-hidden bg-paper-alt">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex size-14 items-center justify-center rounded-full border border-rule bg-paper transition-transform duration-300 ease-out group-hover:scale-105">
                      <span
                        aria-hidden="true"
                        className="ml-1 font-sans text-lg text-accent-deep"
                      >
                        ▶
                      </span>
                    </div>
                  </div>

                  <p className="absolute left-s4 top-s4 font-sans text-micro font-semibold uppercase tracking-wide text-ink-soft">
                    {String(index + 1).padStart(2, "0")}
                  </p>

                  <p className="absolute bottom-s3 right-s4 font-sans text-micro font-semibold uppercase tracking-wide text-ink-soft">
                    {video.duration}
                  </p>
                </div>

                {/* Video information */}
                <div className="p-s5">
                  <div className="flex flex-wrap gap-x-s3 gap-y-1">
                    <p className="font-sans text-micro font-semibold uppercase tracking-wide text-ink-soft">
                      {video.level}
                    </p>

                    <span
                      aria-hidden="true"
                      className="font-sans text-micro text-ink-soft/50"
                    >
                      /
                    </span>

                    <p className="font-sans text-micro font-semibold uppercase tracking-wide text-ink-soft">
                      {video.topic}
                    </p>
                  </div>

                  <h3 className="mt-s2 font-serif text-h3 font-medium text-ink transition-colors duration-200 group-hover:text-accent-deep">
                    {video.title}
                  </h3>

                  <p className="mt-s2 font-sans text-small text-ink-soft">
                    {video.description}
                  </p>

                  <div className="mt-s4 border-t border-rule-soft pt-s3">
                    <span className="inline-flex min-h-11 items-center gap-1 border-b border-accent-deep font-sans text-small font-semibold text-accent-deep transition-colors duration-200 group-hover:border-accent group-hover:text-accent">
                      <span>Watch video</span>

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
          </div>
        </div>
      </section>

      {/* Learning context */}
      <section className="bg-paper">
        <div className="container py-s7">
          <div className="grid grid-cols-[minmax(0,0.7fr)_minmax(360px,1fr)] gap-s7 nav:grid-cols-1 nav:gap-s5">
            <div>
              <p className="font-sans text-micro font-semibold uppercase tracking-wide text-ink-soft">
                Before you watch
              </p>

              <h2 className="mt-s2 font-serif text-h2 font-medium text-ink">
                Listen for meaning
              </h2>

              <p className="gloss mt-s1 text-h3">Escucha para entender</p>
            </div>

            <div className="prose-measure">
              <p className="font-sans text-body text-ink">
                You don't need to understand every word. Start by paying
                attention to the situation, the people, and the main idea.
              </p>

              <p className="mt-s4 font-sans text-body text-ink">
                As you watch, notice words and expressions that seem useful or
                familiar. The goal is to build understanding from context rather
                than stop every time you encounter something new.
              </p>

              <p className="mt-s4 font-sans text-body text-ink-soft">
                Individual videos will eventually include transcripts, useful
                language, comprehension activities, and connections to related
                readings.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
