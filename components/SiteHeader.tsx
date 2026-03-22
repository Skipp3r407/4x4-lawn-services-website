"use client";

import Link from "next/link";
import { useState } from "react";
import { SiteLogo } from "@/components/SiteLogo";
import { navLinks, site } from "@/lib/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#E8E4DC] bg-[#F6F4EF]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 sm:py-5">
        <Link
          href="/"
          className="group flex min-w-0 max-w-[calc(100%-7.5rem)] shrink items-center ps-1.5 sm:max-w-none sm:ps-3"
          onClick={() => setOpen(false)}
        >
          <SiteLogo variant="header" className="max-w-full" />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-[#4B5563] transition hover:bg-white hover:text-[#0F3D2E]"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={`tel:${site.phoneTel}`}
            className="ml-2 rounded-xl bg-[#1F6F54] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#0F3D2E]"
          >
            Call {site.phoneDisplay}
          </a>
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg border border-[#E8E4DC] bg-white p-2.5 text-[#0D0D0D] lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Toggle menu</span>
          {open ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {open && (
        <div id="mobile-nav" className="border-t border-[#E8E4DC] bg-[#F6F4EF] px-4 py-4 lg:hidden">
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-3 text-base font-medium text-[#0D0D0D] hover:bg-white"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={`tel:${site.phoneTel}`}
              className="mt-2 rounded-xl bg-[#1F6F54] px-4 py-3 text-center text-base font-semibold text-white"
              onClick={() => setOpen(false)}
            >
              Call {site.phoneDisplay}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
