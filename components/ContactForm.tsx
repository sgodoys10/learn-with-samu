"use client";

import { useState } from "react";

const inputClasses =
  "w-full rounded-control border border-rule bg-paper px-s2 py-s2 font-sans text-small text-ink transition-colors hover:border-ink-soft focus:border-ink-soft";

const labelClasses =
  "mb-s1 block font-sans text-micro font-medium uppercase tracking-wide text-ink-soft";

/**
 * Structurally complete but not wired to any backend, database, or
 * third-party form service yet — submitting only shows a local
 * placeholder confirmation, per spec. Connect a real form endpoint later
 * at the marked TODO.
 */
export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // TODO: connect a third-party form endpoint here. No backend exists
    // yet — this only simulates a submission so the UI can be reviewed.
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div
        role="status"
        className="rounded-panel border border-rule bg-paper p-s4 font-sans text-body text-ink"
      >
        Thanks for reaching out. This form isn't connected to an inbox yet, but
        the contact functionality will be connected before launch.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-s3">
      <div>
        <label htmlFor="name" className={labelClasses}>
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          required
          className={inputClasses}
        />
      </div>

      <div>
        <label htmlFor="email" className={labelClasses}>
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          className={inputClasses}
        />
      </div>

      <div>
        <label htmlFor="message" className={labelClasses}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className={inputClasses}
        />
      </div>

      <button
        type="submit"
        className="inline-flex min-h-11 items-center justify-center rounded-control bg-accent-deep px-s3 py-s2 font-sans text-small font-semibold text-paper transition-colors hover:bg-ink"
      >
        Send message
      </button>
    </form>
  );
}
