// components/Navigation.tsx
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

  function closeMenu() {
    setOpen(false);
    triggerRef.current?.focus();
  }

  // Close with Escape.
  useEffect(() => {
    if (!open) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        closeMenu();
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  // Close when clicking outside the dropdown or hamburger button.
  useEffect(() => {
    if (!open) return;

    function handlePointerDown(event: MouseEvent) {
      const target = event.target as Node;

      if (
        panelRef.current?.contains(target) ||
        triggerRef.current?.contains(target)
      ) {
        return;
      }

      closeMenu();
    }

    document.addEventListener("mousedown", handlePointerDown);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
    };
  }, [open]);

  // Close the mobile menu when returning to desktop width.
  useEffect(() => {
    const query = window.matchMedia("(max-width: 980px)");

    function handleChange(event: MediaQueryListEvent) {
      if (!event.matches) {
        setOpen(false);
      }
    }

    query.addEventListener("change", handleChange);

    return () => {
      query.removeEventListener("change", handleChange);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 h-[66px] border-b border-rule-soft bg-nav-bg backdrop-blur-md">
      <div className="relative mx-auto flex h-full max-w-content items-center justify-between px-[clamp(1.25rem,5vw,4.5rem)]">
        <Link
          href="/"
          className="font-serif text-h3 font-medium text-ink transition-colors hover:text-accent-deep"
        >
          {SITE_NAME}
        </Link>

        {/* Desktop navigation */}
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

        {/* Mobile menu button */}
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

        {/* Mobile dropdown */}
        {open && (
          <div
            ref={panelRef}
            id="mobile-nav-panel"
            className="absolute inset-x-0 top-full max-h-[calc(100vh-66px)] overflow-y-auto border-b border-rule bg-paper shadow-md nav:block motion-safe:transition-opacity motion-safe:duration-150"
          >
            <ul className="flex flex-col divide-y divide-rule-soft px-[clamp(1.25rem,5vw,4.5rem)]">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={closeMenu}
                    className="block min-h-11 py-s3 font-sans text-body font-medium text-ink"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="px-[clamp(1.25rem,5vw,4.5rem)] pb-s4 pt-s2">
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
      </div>
    </header>
  );
}
