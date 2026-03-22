import type { Metadata } from "next";
import Link from "next/link";
import { CTABanner } from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "See why clients recommend 4x4 Lawn Services for reliable landscaping and lawn care in Orlando and Central Florida.",
};

const reviews = [
  {
    quote:
      "Reliable and professional—they’ve been consistent with scheduling and the yard always looks neat afterward. Communication is easy.",
    who: "Homeowner, Orlando area",
  },
  {
    quote:
      "We needed dependable upkeep without chasing people down. They respond quickly and do what they say.",
    who: "Residential client, Central Florida",
  },
  {
    quote:
      "Our entrance and visible turf stay presentable. It’s one less vendor headache for us.",
    who: "Commercial client",
  },
  {
    quote: "Edges are clean and they don’t leave a sloppy mess behind. You can tell they care about the final look.",
    who: "Local homeowner",
  },
  {
    quote:
      "Friendly team and bilingual-friendly service matters for our family. We appreciate the professionalism.",
    who: "Orlando area client",
  },
] as const;

export default function TestimonialsPage() {
  return (
    <>
      <section className="border-b border-[#E8E4DC] bg-[#F6F4EF] py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#1F6F54]">Social proof</p>
          <h1 className="mt-3 font-[family-name:var(--font-heading)] text-4xl font-bold tracking-tight text-[#0D0D0D] sm:text-5xl">
            Clients recommend 4x4 for a reason
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-[#4B5563]">
            We’re proud of the strong recommendations we’ve earned—especially the community feedback we see on Facebook,
            where clients highlight reliability, communication, and quality.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl space-y-10 px-4 sm:px-6">
          {reviews.map((r) => (
            <blockquote key={r.who} className="rounded-2xl border border-[#E8E4DC] bg-white p-8 shadow-sm">
              <p className="text-lg leading-relaxed text-[#0D0D0D]">&ldquo;{r.quote}&rdquo;</p>
              <footer className="mt-4 text-sm font-medium text-[#4B5563]">— {r.who}</footer>
            </blockquote>
          ))}
          <p className="text-center text-[#4B5563]">
            Want to connect? Follow us on{" "}
            <a
              href="https://www.instagram.com/4x4lawnservices/"
              className="font-semibold text-[#1F6F54] hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>{" "}
            or{" "}
            <Link href="/contact" className="font-semibold text-[#1F6F54] hover:underline">
              send a message
            </Link>
            .
          </p>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
