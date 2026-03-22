import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import { JsonLd } from "@/components/JsonLd";
import { MobileActionBar } from "@/components/MobileActionBar";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { site } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Orlando Landscaping & Lawn Care`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  openGraph: {
    title: `${site.name} | Orlando Landscaping & Lawn Care`,
    description: site.description,
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable} h-full scroll-smooth antialiased`}>
      <body className={`${inter.className} flex min-h-full flex-col pb-24 lg:pb-0`}>
        <JsonLd />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <MobileActionBar />
      </body>
    </html>
  );
}
