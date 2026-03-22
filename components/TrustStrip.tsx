const items = [
  "Licensed & insured",
  "Residential & commercial",
  "Central Florida",
  "By appointment",
] as const;

export function TrustStrip() {
  return (
    <div className="border-y border-[#E8E4DC] bg-white">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-6 gap-y-3 px-4 py-4 sm:px-6 lg:justify-between">
        {items.map((label) => (
          <div key={label} className="flex items-center gap-2 text-sm font-medium text-[#0F3D2E]">
            <span className="flex h-2 w-2 shrink-0 rounded-full bg-[#1F6F54]" aria-hidden />
            {label}
          </div>
        ))}
      </div>
    </div>
  );
}
