import type { Metadata } from "next";
import { CTABanner } from "@/components/CTABanner";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers about licensing, appointments, service areas, quotes, and bilingual-friendly lawn care in Central Florida.",
};

const faqs = [
  {
    q: "Are you licensed and insured?",
    a: "Yes. 4x4 Lawn Services operates as a licensed and insured landscaping and lawn care provider.",
  },
  {
    q: "Do you work by appointment?",
    a: "Yes. We schedule services by appointment to keep routes efficient and service dependable.",
  },
  {
    q: "Do you serve residential and commercial properties?",
    a: "Yes—homes, rentals, businesses, and other commercial grounds, depending on scope and scheduling.",
  },
  {
    q: "What areas do you serve?",
    a: `Orlando and ${site.area}. Share your address and we’ll confirm coverage.`,
  },
  {
    q: "How do I get a quote?",
    a: `Call ${site.phoneDisplay}, email ${site.email}, or use the contact form. For quick questions, WhatsApp ${site.whatsappDisplay} works well.`,
  },
  {
    q: "What services do you offer?",
    a: "Full-service landscape care, residential lawn care, commercial lawn care, yard maintenance, and landscaping cleanup and upkeep.",
  },
  {
    q: "Do you offer bilingual-friendly service?",
    a: `Yes—our branding includes ${site.tagline}, and we welcome Spanish-speaking clients.`,
  },
  {
    q: "How often should my lawn be maintained?",
    a: "It depends on season, grass type, irrigation, and your goals. We’ll recommend a realistic cadence after we understand your property.",
  },
] as const;

export default function FAQPage() {
  return (
    <>
      <section className="border-b border-[#E8E4DC] bg-[#F6F4EF] py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#1F6F54]">FAQ</p>
          <h1 className="mt-3 font-[family-name:var(--font-heading)] text-4xl font-bold tracking-tight text-[#0D0D0D] sm:text-5xl">
            Common questions
          </h1>
          <p className="mt-6 text-lg text-[#4B5563]">Straight answers—so you know what to expect before you call.</p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="divide-y divide-[#E8E4DC] rounded-2xl border border-[#E8E4DC] bg-white shadow-sm">
            {faqs.map((item) => (
              <details key={item.q} className="group p-6">
                <summary className="cursor-pointer list-none font-[family-name:var(--font-heading)] text-lg font-bold text-[#0F3D2E] marker:content-none [&::-webkit-details-marker]:hidden">
                  <span className="flex items-start justify-between gap-4">
                    {item.q}
                    <span className="mt-1 text-[#1F6F54] transition group-open:rotate-45" aria-hidden>
                      +
                    </span>
                  </span>
                </summary>
                <p className="mt-4 text-[#4B5563] leading-relaxed">{item.a}</p>
              </details>
            ))}
          </div>
          <p className="mt-10 text-center text-lg text-[#4B5563]">
            Still have questions? Call{" "}
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
