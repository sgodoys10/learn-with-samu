// components/Sessions.tsx
import SessionCard, { type Session } from "./SessionCard";

// PLACEHOLDER session data — replace dates, levels labels, and meeting
// patterns with real ones. This array is the only thing you should need
// to edit to update what's shown; nothing else in this file depends on
// specific session content.
const sessions: Session[] = [
  {
    level: "Spanish 1 — Beginner",
    sessionLabel: "[Session name — e.g. Fall Session]",
    startDate: "[Start date]",
    endDate: "[End date]",
    meetingPattern: "[Meeting days/time]",
    status: "open",
  },
  {
    level: "Spanish 2 — Intermediate",
    sessionLabel: "[Session name — e.g. Fall Session]",
    startDate: "[Start date]",
    endDate: "[End date]",
    meetingPattern: "[Meeting days/time]",
    status: "limited",
  },
  {
    level: "Spanish 3 — Conversational",
    sessionLabel: "[Session name — e.g. Fall Session]",
    startDate: "[Start date]",
    endDate: "[End date]",
    meetingPattern: "[Meeting days/time]",
    status: "full",
  },
  {
    level: "Spanish 1 — Beginner",
    sessionLabel: "[Session name — e.g. Winter Session]",
    startDate: "[Start date]",
    endDate: "[End date]",
    meetingPattern: "[Meeting days/time]",
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
        <p className="mb-s2 font-sans text-micro font-semibold uppercase tracking-wide text-ink-soft">
          Schedule
        </p>
        <h2 className="font-serif text-h2 font-medium text-ink">
          Upcoming sessions
        </h2>
        <p className="gloss mt-s1 text-h3">Próximas sesiones</p>

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
