"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const SITE_NAME = "[Site Name]";

const NAV_LINKS = [
  { label: "Classes", href: "#classes" },
  { label: "About", href: "#about" },
  { label: "Sessions", href: "#sessions" },
  { label: "Contact", href: "#contact" },
];

const CTA = { label: "Contact", href: "#contact" };

const ctaClasses =
  "inline-flex min-h-11 items-center justify-center rounded-control bg-accent-deep px-s3 py-s2 font-sans text-small font-semibold text-paper transition-colors hover:bg-ink";

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
        return;
      }

      if (event.key === "Tab" && panelRef.current) {
        const focusable = panelRef.current.querySelectorAll<HTMLElement>(
          "a[href], button:not([disabled])",
        );

        if (focusable.length === 0) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    panelRef.current
      ?.querySelector<HTMLElement>("a[href], button:not([disabled])")
      ?.focus();

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  function closeMenu() {
    setOpen(false);
    triggerRef.current?.focus();
  }

  return (
    <header className="sticky top-0 z-50 h-[66px] border-b border-rule-soft bg-nav-bg backdrop-blur-md">
      <div className="mx-auto flex h-full max-w-content items-center justify-between px-[clamp(1.25rem,5vw,4.5rem)]">
        <Link href="/" className="font-serif text-h3 font-medium text-ink">
          {SITE_NAME}
        </Link>

        <div className="flex items-center gap-s4 nav:hidden">
          <ul className="flex items-center gap-s3">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-sans text-small font-medium text-ink transition-colors hover:text-accent-deep"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a href={CTA.href} className={ctaClasses}>
            {CTA.label}
          </a>
        </div>

        <button
          ref={triggerRef}
          type="button"
          className="hidden size-11 items-center justify-center rounded-control nav:flex"
          aria-expanded={open}
          aria-controls="mobile-nav-panel"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            {open ? (
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 hidden nav:block">
          <div
            className="absolute inset-0 bg-ink/30 motion-safe:animate-fade-in"
            onClick={closeMenu}
            aria-hidden="true"
          />

          <div
            ref={panelRef}
            id="mobile-nav-panel"
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
            className="absolute right-0 top-0 flex h-full w-[min(85vw,340px)] flex-col bg-paper p-s4 shadow-xl motion-safe:animate-slide-in"
          >
            <div className="mb-s5 flex items-center justify-between">
              <span className="font-serif text-h3 text-ink">{SITE_NAME}</span>

              <button
                type="button"
                className="flex size-11 items-center justify-center rounded-control"
                onClick={closeMenu}
                aria-label="Close menu"
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M6 6l12 12M18 6L6 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>

            <ul className="flex flex-1 flex-col gap-s3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={closeMenu}
                    className="block min-h-11 py-s2 font-sans text-h3 font-medium text-ink"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <a
              href={CTA.href}
              onClick={closeMenu}
              className={`${ctaClasses} w-full`}
            >
              {CTA.label}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
