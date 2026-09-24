import StatusPill, { type SessionStatus } from "./StatusPill";

export type Session = {
  level: string;
  sessionLabel: string;
  startDate: string;
  endDate: string;
  meetingPattern: string;
  status: SessionStatus;
};

export default function SessionCard({ session }: { session: Session }) {
  return (
    <article className="group rounded-panel border border-rule bg-paper p-s4 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-md">
      <div className="flex items-start justify-between gap-s2">
        <p className="font-sans text-micro font-semibold uppercase tracking-wide text-ink-soft">
          {session.level}
        </p>

        <div className="transition-transform duration-300 ease-out group-hover:translate-x-0.5">
          <StatusPill status={session.status} />
        </div>
      </div>

      <h3 className="mt-s3 font-serif text-h3 text-ink transition-colors duration-200 group-hover:text-accent-deep">
        {session.sessionLabel}
      </h3>

      <div className="mt-s4 border-y border-rule-soft py-s3">
        <p className="font-sans text-micro font-semibold uppercase tracking-wide text-ink-soft">
          Course dates
        </p>

        <div className="mt-s1 flex items-baseline gap-s2">
          <p className="font-serif text-h3 text-ink">{session.startDate}</p>

          <span
            aria-hidden="true"
            className="font-sans text-small text-ink-soft transition-transform duration-300 ease-out group-hover:translate-x-1"
          >
            →
          </span>

          <p className="font-serif text-h3 text-ink">{session.endDate}</p>
        </div>
      </div>

      <p className="mt-s3 font-sans text-small text-ink">
        {session.meetingPattern}
      </p>
    </article>
  );
}
