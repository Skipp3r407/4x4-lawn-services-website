import Image from "next/image";
import { brandLogo } from "@/lib/site";

type Variant = "header" | "footer";

/** Intrinsic size for Next/Image (aspect ratio); scaled ~1.6× from 320×96 for sharper optimization */
const intrinsic = { width: 512, height: 154 };

const variantClass: Record<Variant, string> = {
  header:
    "h-[83px] w-auto sm:h-[93px] md:h-[115px] lg:h-[131px] xl:h-[144px] max-h-[144px] object-contain object-left",
  footer:
    "h-[61px] w-auto sm:h-16 md:h-[70px] max-h-[70px] object-contain object-left",
};

export function SiteLogo({
  variant,
  className = "",
  priority,
}: {
  variant: Variant;
  className?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src={brandLogo.src}
      alt={brandLogo.alt}
      width={intrinsic.width}
      height={intrinsic.height}
      priority={priority ?? variant === "header"}
      sizes={
        variant === "header"
          ? "(max-width: 640px) 384px, (max-width: 1024px) 450px, 512px"
          : "256px"
      }
      className={`${variantClass[variant]} ${className}`.trim()}
    />
  );
}
