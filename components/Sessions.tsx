import SessionCard, { type Session } from "./SessionCard";

// PLACEHOLDER session data — replace dates, levels labels, and meeting
// patterns with real ones. This array is the only thing you should need
// to edit to update what's shown; nothing else in this file depends on
// specific session content.
const sessions: Session[] = [
  {
    level: "Spanish 1 — Novice Low",
    sessionLabel: "Spanish Foundations",
    startDate: "Oct 6",
    endDate: "Dec 10",
    meetingPattern: "Tuesdays + Thursdays · 6:00–7:00 PM",
    status: "open",
  },
  {
    level: "Spanish 2 — Novice Mid",
    sessionLabel: "Spanish in Conversation",
    startDate: "Oct 13",
    endDate: "Dec 17",
    meetingPattern: "Tuesdays + Thursdays · 7:00–8:00 PM",
    status: "limited",
  },
  {
    level: "Spanish 3 — Intermediate Low",
    sessionLabel: "Spanish Through Culture",
    startDate: "Oct 20",
    endDate: "Dec 22",
    meetingPattern: "Tuesdays + Thursdays · 6:00–7:00 PM",
    status: "full",
  },
  {
    level: "Spanish 1 — Novice Low",
    sessionLabel: "Winter Spanish Foundations",
    startDate: "Jan 12",
    endDate: "Mar 18",
    meetingPattern: "Tuesdays + Thursdays · 6:00–7:00 PM",
    status: "soon",
  },
];

/**
 * Upcoming sessions. Status is manually maintained (4 fixed values) and
 * does not reflect live enrollment or seat counts, per spec.
 */
export default function Sessions() {
  return (
    <section id="sessions" className="bg-paper-alt">
      <div className="container py-s7">
        <div className="group flex w-fit items-center gap-s2">
          <span
            aria-hidden="true"
            className="h-2 w-2 rounded-full bg-cyan-deep transition-transform duration-300 ease-out group-hover:translate-x-1"
          />

          <span
            aria-hidden="true"
            className="h-px w-6 bg-rule transition-all duration-300 ease-out group-hover:w-8"
          />

          <p className="font-sans text-micro font-semibold uppercase tracking-wide text-ink-soft">
            03 / Schedule
          </p>
        </div>

        <div className="group mt-s2 flex items-end justify-between gap-s5 nav:flex-col nav:items-start nav:gap-s3">
          <div>
            <h2 className="font-serif text-h2 font-medium text-ink">
              Upcoming sessions
            </h2>

            <p className="gloss mt-s1 text-h3 transition-transform duration-300 ease-out group-hover:-translate-y-0.5">
              Próximas sesiones
            </p>
          </div>

          <div
            aria-hidden="true"
            className="mb-2 h-px w-24 origin-right bg-cyan-deep transition-all duration-300 ease-out group-hover:w-32 nav:hidden"
          />
        </div>

        <p className="prose-measure mt-s3 font-sans text-small text-ink-soft">
          Session status is updated by hand and reflects availability as of the
          last update, not live enrollment. To join a session, reach out through
          the contact form below.
        </p>

        <div className="mt-s5 grid grid-cols-3 gap-s4 nav:grid-cols-2 stack:grid-cols-1">
          {sessions.map((session, index) => (
            <SessionCard key={index} session={session} />
          ))}
        </div>
      </div>
    </section>
  );
}
