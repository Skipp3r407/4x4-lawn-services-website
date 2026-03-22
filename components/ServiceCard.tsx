import Link from "next/link";

type Props = {
  title: string;
  description: string;
  href?: string;
};

export function ServiceCard({ title, description, href = "/services" }: Props) {
  return (
    <div className="group flex h-full flex-col rounded-2xl border border-[#E8E4DC] bg-white p-6 shadow-sm transition hover:border-[#1F6F54]/30 hover:shadow-md">
      <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-[#0F3D2E]">{title}</h3>
      <p className="mt-3 flex-1 text-[15px] leading-relaxed text-[#4B5563]">{description}</p>
      <Link
        href={href}
        className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-[#1F6F54] group-hover:gap-2"
      >
        Learn more
        <span aria-hidden>→</span>
      </Link>
    </div>
  );
}
