"use client";

import { useState } from "react";
import StatusPill, { type SessionStatus } from "./StatusPill";

export type Session = {
  level: string;
  sessionLabel: string;
  startDate: string;
  endDate: string;
  meetingPattern: string;
  status: SessionStatus;
  details: {
    focus: string;
    goals: string;
    structure: string;
    price: string;
    payment: string;
  };
};

export default function SessionCard({ session }: { session: Session }) {
  const [isOpen, setIsOpen] = useState(false);

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
            className="font-sans text-small text-ink-soft"
          >
            →
          </span>

          <p className="font-serif text-h3 text-ink">{session.endDate}</p>
        </div>
      </div>

      <p className="mt-s3 font-sans text-small text-ink">
        {session.meetingPattern}
      </p>

      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        aria-expanded={isOpen}
        className="mt-s4 inline-flex min-h-11 items-center gap-1 border-b border-accent-deep font-sans text-small font-semibold text-accent-deep transition-colors duration-200 hover:border-accent hover:text-accent"
      >
        <span>{isOpen ? "Hide session details" : "View session details"}</span>

        <span
          aria-hidden="true"
          className={`transition-transform duration-200 ${
            isOpen ? "rotate-90" : ""
          }`}
        >
          →
        </span>
      </button>

      <div
        className={`grid transition-[grid-template-rows,opacity,margin] duration-300 ease-out ${
          isOpen
            ? "mt-s4 grid-rows-[1fr] opacity-100"
            : "mt-0 grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="border-t border-rule-soft pt-s4">
            <div className="space-y-s4">
              <div>
                <p className="font-sans text-micro font-semibold uppercase tracking-wide text-ink-soft">
                  Course focus
                </p>

                <p className="mt-s1 font-sans text-small text-ink">
                  {session.details.focus}
                </p>
              </div>

              <div>
                <p className="font-sans text-micro font-semibold uppercase tracking-wide text-ink-soft">
                  Level goals
                </p>

                <p className="mt-s1 font-sans text-small text-ink">
                  {session.details.goals}
                </p>
              </div>

              <div>
                <p className="font-sans text-micro font-semibold uppercase tracking-wide text-ink-soft">
                  Class structure
                </p>

                <p className="mt-s1 font-sans text-small text-ink">
                  {session.details.structure}
                </p>
              </div>

              <div className="border-t border-rule-soft pt-s3">
                <p className="font-sans text-micro font-semibold uppercase tracking-wide text-ink-soft">
                  Price & payment
                </p>

                <p className="mt-s1 font-sans text-small text-ink">
                  {session.details.price}
                </p>

                <p className="mt-s1 font-sans text-small text-ink-soft">
                  {session.details.payment}
                </p>
              </div>

              <a
                href="#contact"
                className="inline-flex min-h-11 items-center gap-1 border-b border-accent-deep font-sans text-small font-semibold text-accent-deep transition-colors duration-200 hover:border-accent hover:text-accent"
              >
                <span>Ask about this session</span>

                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
