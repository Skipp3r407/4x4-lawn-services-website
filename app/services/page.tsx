import type { Metadata } from "next";
import Link from "next/link";
import { CTABanner } from "@/components/CTABanner";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Full-service landscape care, residential and commercial lawn care, yard maintenance, and landscaping cleanup for Orlando-area properties.",
};

const blocks = [
  {
    title: "Full-service landscape care",
    body: "Broad landscape care that supports healthy, presentable grounds—beds, turf-related upkeep, and seasonal needs handled as part of a consistent plan. Less panic cleanups, more predictable curb appeal.",
    cta: "Request a landscape plan",
  },
  {
    title: "Residential lawn care",
    body: "Lawn-focused care for homeowners—mowing, edging, and upkeep designed to keep your yard looking sharp through Florida’s growing season.",
    cta: "Book residential service",
  },
  {
    title: "Commercial lawn care",
    body: "Grounds maintenance for businesses and commercial properties—professional appearance, safer edges, and a maintained look customers notice immediately.",
    cta: "Request a commercial quote",
  },
  {
    title: "Yard maintenance",
    body: "Scheduled maintenance to keep growth, edges, and routine needs under control—steady upkeep beats expensive catch-up.",
    cta: "Set a maintenance schedule",
  },
  {
    title: "Landscaping cleanup and upkeep",
    body: "Cleanups and ongoing upkeep to reset messy areas, tighten lines, and restore neatness—plus follow-up upkeep to keep it that way.",
    cta: "Describe your cleanup",
  },
] as const;

export default function ServicesPage() {
  return (
    <>
      <section className="border-b border-[#E8E4DC] bg-[#F6F4EF] py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#1F6F54]">Services</p>
          <h1 className="mt-3 font-[family-name:var(--font-heading)] text-4xl font-bold tracking-tight text-[#0D0D0D] sm:text-5xl">
            Landscaping and lawn care for Florida properties
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-[#4B5563]">
            Whether you need steady weekly maintenance or a reset after things get out of hand, we structure services
            around outcomes: neat edges, healthy-looking turf, controlled growth, and a property that looks intentionally
            maintained.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl space-y-12 px-4 sm:px-6">
          {blocks.map((b, i) => (
            <article key={b.title} className="border-b border-[#E8E4DC] pb-12 last:border-0 last:pb-0">
              <p className="text-sm font-medium text-[#1F6F54]">0{i + 1}</p>
              <h2 className="mt-2 font-[family-name:var(--font-heading)] text-2xl font-bold text-[#0F3D2E]">{b.title}</h2>
              <p className="mt-4 text-lg leading-relaxed text-[#4B5563]">{b.body}</p>
              <Link
                href="/contact"
                className="mt-6 inline-flex font-semibold text-[#1F6F54] hover:underline"
              >
                {b.cta} →
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-[#E8E4DC] bg-white py-12">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <p className="text-lg text-[#4B5563]">
            Not sure what you need? WhatsApp{" "}
            <a href={site.whatsappUrl} className="font-semibold text-[#1F6F54] hover:underline" target="_blank" rel="noopener noreferrer">
              {site.whatsappDisplay}
            </a>{" "}
            for quick questions—or call{" "}
            <a href={`tel:${site.phoneTel}`} className="font-semibold text-[#1F6F54] hover:underline">
              {site.phoneDisplay}
            </a>
            .
          </p>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
