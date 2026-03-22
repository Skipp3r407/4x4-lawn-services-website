import Link from "next/link";
import { CTABanner } from "@/components/CTABanner";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { TrustStrip } from "@/components/TrustStrip";
import { site } from "@/lib/site";

const services = [
  {
    title: "Full-service landscape care",
    description:
      "Complete landscape care that keeps beds, turf, and seasonal needs under control—so your property doesn’t fall behind every few weeks.",
  },
  {
    title: "Residential lawn care",
    description:
      "Dependable mowing, edging, and lawn-focused upkeep for homeowners who want a yard they’re proud of—without the weekend workload.",
  },
  {
    title: "Commercial lawn care",
    description:
      "Professional grounds care for entrances, walkways, and visible turf—ideal for customer-facing properties and busy schedules.",
  },
  {
    title: "Yard maintenance",
    description:
      "Scheduled maintenance to control growth, edges, and routine needs—steady results instead of constant catch-up.",
  },
  {
    title: "Landscaping cleanup & upkeep",
    description:
      "Cleanups and ongoing upkeep to reset overgrown areas, tighten lines, and restore a neat, controlled look fast.",
  },
] as const;

const reviews = [
  {
    quote: "Consistent and professional—the yard always looks neat and communication is easy.",
    who: "Homeowner, Orlando area",
  },
  {
    quote: "We needed dependable upkeep without chasing people down. Quick responses and easy to coordinate.",
    who: "Property-focused client, Central Florida",
  },
  {
    quote: "Edges are clean and the finish looks sharp. You can tell they care about the final look.",
    who: "Residential client",
  },
] as const;

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-[#E8E4DC] bg-[#F6F4EF]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(31,111,84,0.12),_transparent_50%)]" />
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1F6F54]">{site.tagline}</p>
            <h1 className="mt-4 font-[family-name:var(--font-heading)] text-4xl font-extrabold leading-[1.1] tracking-tight text-[#0D0D0D] sm:text-5xl lg:text-6xl">
              Orlando lawns. Central Florida reliability. All-terrain care.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-[#4B5563] sm:text-xl">
              Licensed, insured landscaping and lawn care for homes and businesses—scheduled by appointment, built for
              Florida’s heat, growth, and fast-changing weather.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <a
                href={`tel:${site.phoneTel}`}
                className="inline-flex items-center justify-center rounded-xl bg-[#1F6F54] px-8 py-4 text-center text-base font-semibold text-white shadow-sm transition hover:bg-[#0F3D2E]"
              >
                Call {site.phoneDisplay}
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl border-2 border-[#0F3D2E] bg-white px-8 py-4 text-center text-base font-semibold text-[#0F3D2E] transition hover:bg-[#0F3D2E] hover:text-white"
              >
                Get a quote
              </Link>
              <a
                href={site.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center text-center text-base font-semibold text-[#1F6F54] underline-offset-4 hover:underline sm:ml-2"
              >
                WhatsApp {site.whatsappDisplay}
              </a>
            </div>
          </div>
        </div>
      </section>

      <TrustStrip />

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Services"
            title="Services that keep your property looking sharp"
            subtitle="From full landscape care to targeted cleanups—structured for Florida lawns and busy properties."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <ServiceCard key={s.title} title={s.title} description={s.description} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-xl bg-[#0F3D2E] px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-[#1F6F54]"
            >
              See all services
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-[#E8E4DC] bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <SectionHeading
              eyebrow="Why 4x4"
              title="Why property owners choose us"
              subtitle="Trust is earned on the schedule, in the details, and in how we communicate—every visit."
            />
            <ul className="space-y-5 text-[#4B5563]">
              <li className="flex gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#1F6F54]" />
                <span>
                  <strong className="text-[#0D0D0D]">Licensed & insured</strong> — professional standards you can
                  verify.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#1F6F54]" />
                <span>
                  <strong className="text-[#0D0D0D]">Appointment-based</strong> — organized scheduling that respects your
                  time.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#1F6F54]" />
                <span>
                  <strong className="text-[#0D0D0D]">Residential & commercial</strong> — one team for homes and
                  businesses.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#1F6F54]" />
                <span>
                  <strong className="text-[#0D0D0D]">Central Florida</strong> — local service rooted in Orlando and the
                  surrounding region.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#1F6F54]" />
                <span>
                  <strong className="text-[#0D0D0D]">Community-trusted</strong> — strong recommendations, including
                  standout feedback on Facebook.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#1F6F54]" />
                <span>
                  <strong className="text-[#0D0D0D]">Bilingual-friendly</strong> — {site.tagline} reflects how we serve
                  Central Florida.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-10 rounded-3xl border border-[#E8E4DC] bg-white p-8 shadow-sm lg:grid-cols-2 lg:items-center lg:p-12">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#1F6F54]">About</p>
              <h2 className="mt-2 font-[family-name:var(--font-heading)] text-3xl font-bold text-[#0D0D0D] sm:text-4xl">
                Local roots. Professional standards.
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-[#4B5563]">
                4x4 Lawn Services focuses on what matters: showing up, communicating clearly, and delivering consistent
                lawn and landscape results—whether you’re managing a home, a portfolio of properties, or a commercial
                entrance that needs to look sharp every week.
              </p>
              <Link
                href="/about"
                className="mt-8 inline-flex items-center gap-2 font-semibold text-[#1F6F54] hover:gap-3"
              >
                Meet 4x4 <span aria-hidden>→</span>
              </Link>
            </div>
            <div className="rounded-2xl bg-[#0F3D2E] p-8 text-white lg:p-10">
              <p className="font-[family-name:var(--font-heading)] text-xl font-bold">By appointment. Built for Florida.</p>
              <p className="mt-3 text-white/85">
                Fast growth and seasonal shifts mean maintenance can’t wait—we help you stay ahead without the stress.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[#E8E4DC] bg-[#F6F4EF] py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Reviews"
            title="Recommended by neighbors and clients"
            subtitle="Real feedback from people who value reliability, communication, and quality."
            align="center"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {reviews.map((r) => (
              <blockquote
                key={r.who}
                className="rounded-2xl border border-[#E8E4DC] bg-white p-6 shadow-sm"
              >
                <p className="text-[#0D0D0D]">&ldquo;{r.quote}&rdquo;</p>
                <footer className="mt-4 text-sm text-[#4B5563]">— {r.who}</footer>
              </blockquote>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/testimonials" className="font-semibold text-[#1F6F54] hover:underline">
              Read reviews →
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-col items-start justify-between gap-8 rounded-3xl border border-[#E8E4DC] bg-white p-8 shadow-sm lg:flex-row lg:items-center lg:p-12">
            <div>
              <SectionHeading
                eyebrow="Service area"
                title="Serving Orlando & Central Florida"
                subtitle="Fast growth and seasonal shifts mean maintenance can’t wait—we’re built for local conditions."
              />
            </div>
            <Link
              href="/service-areas"
              className="shrink-0 rounded-xl bg-[#1F6F54] px-8 py-4 text-sm font-semibold text-white transition hover:bg-[#0F3D2E]"
            >
              View service areas
            </Link>
          </div>
        </div>
      </section>

      <CTABanner />

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-[#0D0D0D]">Contact 4x4 Lawn Services</h2>
              <p className="mt-3 text-lg text-[#4B5563]">
                Fast questions? WhatsApp is great. Detailed quotes? Call or use the contact form.
              </p>
              <ul className="mt-8 space-y-3 text-[#0D0D0D]">
                <li>
                  <span className="font-semibold">Phone:</span>{" "}
                  <a href={`tel:${site.phoneTel}`} className="text-[#1F6F54] hover:underline">
                    {site.phoneDisplay}
                  </a>
                </li>
                <li>
                  <span className="font-semibold">WhatsApp:</span>{" "}
                  <a href={site.whatsappUrl} className="text-[#1F6F54] hover:underline" target="_blank" rel="noopener noreferrer">
                    {site.whatsappDisplay}
                  </a>
                </li>
                <li>
                  <span className="font-semibold">Email:</span>{" "}
                  <a href={`mailto:${site.email}`} className="text-[#1F6F54] hover:underline">
                    {site.email}
                  </a>
                </li>
                <li>
                  <span className="font-semibold">Instagram:</span>{" "}
                  <a href={site.instagramUrl} className="text-[#1F6F54] hover:underline" target="_blank" rel="noopener noreferrer">
                    {site.instagramHandle}
                  </a>
                </li>
                <li>
                  <span className="font-semibold">Location:</span> {site.address} / {site.area}
                </li>
              </ul>
            </div>
            <div className="rounded-2xl border border-[#E8E4DC] bg-white p-6 shadow-sm">
              <p className="font-[family-name:var(--font-heading)] text-lg font-bold text-[#0F3D2E]">Request a quote</p>
              <p className="mt-2 text-sm text-[#4B5563]">
                Prefer the full form? Head to our contact page—takes under a minute.
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-[#0F3D2E] py-4 text-center font-semibold text-white transition hover:bg-[#1F6F54]"
              >
                Go to contact form
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
