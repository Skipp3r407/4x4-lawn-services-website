import type { Metadata } from "next";
import Link from "next/link";
import { CTABanner } from "@/components/CTABanner";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Service Areas",
  description:
    "Serving Orlando, FL and Central Florida with professional landscaping and lawn care. Confirm availability for your address.",
};

export default function ServiceAreasPage() {
  return (
    <>
      <section className="border-b border-[#E8E4DC] bg-[#F6F4EF] py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#1F6F54]">Local</p>
          <h1 className="mt-3 font-[family-name:var(--font-heading)] text-4xl font-bold tracking-tight text-[#0D0D0D] sm:text-5xl">
            Orlando-based service across Central Florida
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-[#4B5563]">
            We’re rooted in <strong className="text-[#0D0D0D]">Orlando, Florida</strong> and serve homeowners, property
            managers, and commercial clients throughout <strong className="text-[#0D0D0D]">Central Florida</strong>. If
            you’re searching for landscaping near Orlando, commercial lawn care in Central Florida, or reliable
            residential lawn service in the region, we’re built for local conditions—heat, humidity, irrigation realities,
            and nonstop growth.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-[#0D0D0D]">Areas we serve</h2>
          <ul className="mt-6 space-y-3 text-lg text-[#4B5563]">
            <li>Orlando and surrounding communities (confirm by address)</li>
            <li>Central Florida routes scheduled by appointment</li>
            <li>Additional coverage depending on timing and route availability</li>
          </ul>
          <p className="mt-8 text-lg leading-relaxed text-[#4B5563]">
            Send your address—we’ll confirm availability and recommend the right service level for your property.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href={`tel:${site.phoneTel}`}
              className="inline-flex items-center justify-center rounded-xl bg-[#1F6F54] px-8 py-4 font-semibold text-white hover:bg-[#0F3D2E]"
            >
              Call {site.phoneDisplay}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl border-2 border-[#0F3D2E] px-8 py-4 font-semibold text-[#0F3D2E] hover:bg-[#0F3D2E] hover:text-white"
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
