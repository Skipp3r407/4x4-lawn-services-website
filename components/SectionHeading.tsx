type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
};

export function SectionHeading({ eyebrow, title, subtitle, align = "left" }: Props) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow && (
        <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#1F6F54]">{eyebrow}</p>
      )}
      <h2 className="mt-2 font-[family-name:var(--font-heading)] text-3xl font-bold tracking-tight text-[#0D0D0D] sm:text-4xl">
        {title}
      </h2>
      {subtitle && <p className="mt-4 text-lg leading-relaxed text-[#4B5563]">{subtitle}</p>}
    </div>
  );
}
