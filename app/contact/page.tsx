import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Request a quote: call ${site.phoneDisplay} or WhatsApp ${site.whatsappDisplay}. Email ${site.email}. Serving Orlando, Florida.`,
};

export default function ContactPage() {
  return (
    <>
      <section className="border-b border-[#E8E4DC] bg-[#F6F4EF] py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#1F6F54]">Contact</p>
          <h1 className="mt-3 font-[family-name:var(--font-heading)] text-4xl font-bold tracking-tight text-[#0D0D0D] sm:text-5xl">
            Request a quote—or call us now
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-[#4B5563]">
            Tell us your property type, location, and what you want improved. We’ll respond with next steps.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 lg:grid-cols-2 lg:items-start sm:px-6">
          <div>
            <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-[#0D0D0D]">Direct lines</h2>
            <ul className="mt-6 space-y-4 text-lg text-[#0D0D0D]">
              <li>
                <span className="block text-sm font-medium text-[#4B5563]">Phone</span>
                <a href={`tel:${site.phoneTel}`} className="text-[#1F6F54] hover:underline">
                  {site.phoneDisplay}
                </a>
              </li>
              <li>
                <span className="block text-sm font-medium text-[#4B5563]">WhatsApp</span>
                <a href={site.whatsappUrl} className="text-[#1F6F54] hover:underline" target="_blank" rel="noopener noreferrer">
                  {site.whatsappDisplay}
                </a>
              </li>
              <li>
                <span className="block text-sm font-medium text-[#4B5563]">Email</span>
                <a href={`mailto:${site.email}`} className="text-[#1F6F54] hover:underline">
                  {site.email}
                </a>
              </li>
              <li>
                <span className="block text-sm font-medium text-[#4B5563]">Instagram</span>
                <a href={site.instagramUrl} className="text-[#1F6F54] hover:underline" target="_blank" rel="noopener noreferrer">
                  {site.instagramHandle}
                </a>
              </li>
              <li>
                <span className="block text-sm font-medium text-[#4B5563]">Location</span>
                {site.address} / {site.area}
              </li>
            </ul>
            <p className="mt-8 rounded-2xl border border-[#E8E4DC] bg-white p-6 text-[#4B5563]">
              <strong className="text-[#0D0D0D]">Need faster help?</strong> Call {site.phoneDisplay} for scheduling questions,
              or WhatsApp for quick back-and-forth.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
