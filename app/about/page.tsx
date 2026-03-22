import type { Metadata } from "next";
import Link from "next/link";
import { CTABanner } from "@/components/CTABanner";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet 4x4 Lawn Services—Central Florida landscaping and lawn care with clear communication, licensed and insured work, and bilingual-friendly service.",
};

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-[#E8E4DC] bg-[#F6F4EF] py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#1F6F54]">About</p>
          <h1 className="mt-3 font-[family-name:var(--font-heading)] text-4xl font-bold tracking-tight text-[#0D0D0D] sm:text-5xl">
            A Central Florida landscaping team built on consistency
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-[#4B5563]">
            Lawns in Central Florida don’t pause for anyone—sun, rain, and rapid growth can make a property look unmanaged
            in a matter of weeks. 4x4 Lawn Services, LLC exists to give homeowners and businesses dependable landscaping
            and lawn care with clear communication and appointment-based scheduling—so your grounds stay under control
            without becoming your second job.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-[#0D0D0D]">Our mission</h2>
          <p className="mt-4 text-lg leading-relaxed text-[#4B5563]">
            Deliver professional lawn and landscape results with honest expectations: licensed and insured work, respectful
            scheduling, and service that reflects how you want your property to look—residential or commercial.
          </p>
          <h2 className="mt-12 font-[family-name:var(--font-heading)] text-2xl font-bold text-[#0D0D0D]">Trust & standards</h2>
          <ul className="mt-6 space-y-4 text-lg text-[#4B5563]">
            <li className="flex gap-3">
              <span className="text-[#1F6F54]" aria-hidden>
                ✓
              </span>
              Licensed and insured operations
            </li>
            <li className="flex gap-3">
              <span className="text-[#1F6F54]" aria-hidden>
                ✓
              </span>
              Appointment-based workflow
            </li>
            <li className="flex gap-3">
              <span className="text-[#1F6F54]" aria-hidden>
                ✓
              </span>
              Strong Facebook recommendations from the community
            </li>
            <li className="flex gap-3">
              <span className="text-[#1F6F54]" aria-hidden>
                ✓
              </span>
              Bilingual-friendly service: {site.tagline}
            </li>
          </ul>
          <div className="mt-12 rounded-2xl border border-[#E8E4DC] bg-white p-8 shadow-sm">
            <p className="font-[family-name:var(--font-heading)] text-xl font-bold text-[#0F3D2E]">Want a yard you’re proud of?</p>
            <p className="mt-2 text-[#4B5563]">
              Call <a href={`tel:${site.phoneTel}`} className="font-semibold text-[#1F6F54] hover:underline">{site.phoneDisplay}</a>{" "}
              or request a quote—tell us what you’re trying to fix.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex rounded-xl bg-[#1F6F54] px-6 py-3 text-sm font-semibold text-white hover:bg-[#0F3D2E]"
            >
              Request a quote
            </Link>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
