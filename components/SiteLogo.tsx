import Image from "next/image";
import { brandLogo } from "@/lib/site";

type Variant = "header" | "footer";

const intrinsic = { width: 320, height: 96 };

const variantClass: Record<Variant, string> = {
  header:
    "h-[52px] w-auto sm:h-[58px] md:h-[72px] lg:h-[82px] xl:h-[90px] max-h-[90px] object-contain object-left",
  footer: "h-[38px] w-auto sm:h-10 md:h-11 max-h-11 object-contain object-left",
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
      sizes={variant === "header" ? "(max-width: 640px) 240px, (max-width: 1024px) 280px, 320px" : "160px"}
      className={`${variantClass[variant]} ${className}`.trim()}
    />
  );
}
