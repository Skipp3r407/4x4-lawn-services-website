/** Served from `public/images/logo.png` → `/images/logo.png` */
export const brandLogo = {
  src: "/images/logo.png",
  alt: "4x4 Lawn Services logo",
} as const;

export const site = {
  name: "4x4 Lawn Services, LLC",
  tagline: "All Terrain • Todo Terreno",
  description:
    "Licensed and insured landscaping and lawn care in Orlando and Central Florida. Residential and commercial service by appointment.",
  url: "https://www.4x4lawnservices.com",
  phoneDisplay: "(407) 601-9336",
  phoneTel: "+14076019336",
  whatsappDisplay: "(407) 574-0441",
  whatsappTel: "+14075740441",
  whatsappUrl: "https://wa.me/14075740441",
  email: "4x4lawnservices@gmail.com",
  instagramHandle: "@4x4lawnservices",
  instagramUrl: "https://www.instagram.com/4x4lawnservices/",
  address: "Orlando, Florida",
  area: "Central Florida",
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/service-areas", label: "Service Areas" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
] as const;
