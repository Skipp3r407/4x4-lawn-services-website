import Link from "next/link";
import { site } from "@/lib/site";

export function CTABanner() {
  return (
    <section className="bg-[#0F3D2E] py-16 text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold tracking-tight sm:text-4xl">
              Want a quote this week?
            </h2>
            <p className="mt-3 max-w-xl text-lg text-white/85">
              Tell us your address, property type, and what you need—we’ll follow up with next steps.
            </p>
          </div>
          <div className="flex w-full flex-col gap-3 sm:flex-row sm:w-auto">
            <a
              href={`tel:${site.phoneTel}`}
              className="inline-flex items-center justify-center rounded-xl bg-[#C9A66B] px-8 py-4 text-center text-base font-semibold text-[#0D0D0D] transition hover:bg-[#b8935a]"
            >
              Call {site.phoneDisplay}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl border-2 border-white/30 bg-transparent px-8 py-4 text-center text-base font-semibold text-white transition hover:bg-white/10"
            >
              Request a quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
