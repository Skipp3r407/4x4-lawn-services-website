import Image from "next/image";
import { brandLogo } from "@/lib/site";

type Variant = "header" | "footer";

/** Intrinsic size for Next/Image (aspect ratio); 2× previous 512×154 */
const intrinsic = { width: 1024, height: 308 };

const variantClass: Record<Variant, string> = {
  header:
    "h-[166px] w-auto sm:h-[186px] md:h-[230px] lg:h-[262px] xl:h-[288px] max-h-[288px] object-contain object-left",
  footer:
    "h-[122px] w-auto sm:h-32 md:h-[140px] max-h-[140px] object-contain object-left",
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
          ? "(max-width: 640px) 768px, (max-width: 1024px) 900px, 1024px"
          : "512px"
      }
      className={`${variantClass[variant]} ${className}`.trim()}
    />
  );
}
