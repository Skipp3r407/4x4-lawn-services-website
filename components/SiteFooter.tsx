import Link from "next/link";
import { SiteLogo } from "@/components/SiteLogo";
import { navLinks, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-[#E8E4DC] bg-[#0F3D2E] text-[#F6F4EF]">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <Link href="/" className="inline-flex max-w-full items-center">
              <SiteLogo variant="footer" className="max-w-[640px] sm:max-w-[704px]" />
            </Link>
            <p className="mt-3 text-sm text-white/80">
              Landscaping and lawn care in Orlando and {site.area}. Licensed and insured. By appointment.
            </p>
            <p className="mt-4 text-xs font-medium uppercase tracking-[0.2em] text-[#C9A66B]">{site.tagline}</p>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-[#C9A66B]">Explore</p>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/90 hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-[#C9A66B]">Contact</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href={`tel:${site.phoneTel}`} className="hover:text-white">
                  {site.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={site.whatsappUrl} className="hover:text-white" target="_blank" rel="noopener noreferrer">
                  WhatsApp {site.whatsappDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="hover:text-white">
                  {site.email}
                </a>
              </li>
              <li>
                <a href={site.instagramUrl} className="hover:text-white" target="_blank" rel="noopener noreferrer">
                  {site.instagramHandle}
                </a>
              </li>
              <li className="text-white/70">{site.address}</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-2 sm:gap-1.5">
            <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
            <p>
              Designed by{" "}
              <a
                href="https://elevatedigitalstudios.net/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-sm px-0.5 py-2.5 font-medium text-white/75 underline-offset-2 transition-colors sm:py-0.5 hover:text-[#C9A66B] hover:underline"
              >
                Elevated Digital Studios
              </a>
            </p>
          </div>
          <a href={`tel:${site.phoneTel}`} className="font-medium text-[#C9A66B] hover:text-white">
            Call {site.phoneDisplay}
          </a>
        </div>
      </div>
    </footer>
  );
}
