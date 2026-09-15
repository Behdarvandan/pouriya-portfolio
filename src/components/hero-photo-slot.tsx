import { ImageIcon } from "lucide-react";

/**
 * Faz 6.3's hero portrait slot — pulled out of hero.tsx in Faz 6.4 (the hero
 * became a pure typographic composition, no room for a photo alongside it)
 * and kept here, unused until Faz 6.5 dropped it into the new photo-reveal
 * section (motion/photo-reveal-motion.tsx) below the hero.
 *
 * `stretchOnLg` mirrors the height-driven trick from Faz 6.3's two-column
 * hero: pass true when this sits in a lg:items-stretch row next to a taller
 * text column, so the photo fills the row's full height (width derived from
 * that via the same ratio) instead of leaving dead space below a shorter,
 * width-driven box.
 *
 * `size` swaps the whole dimension set rather than layering on override
 * classes (no class-merge helper in this codebase — see AGENTS.md) —
 * "default" is the small hero-adjacent sizing above, "feature" is the
 * large/dramatic sizing Faz 6.5's reveal section needs, aspect ratio
 * included since that section isn't bound to the hero's 4:5 slot.
 */
const sizeClasses = {
  default: "aspect-[4/5] max-w-sm",
  feature: "aspect-[3/4] max-w-xl sm:max-w-2xl lg:max-w-3xl",
} as const;

const iconSizeClasses = {
  default: "h-10 w-10",
  feature: "h-14 w-14 sm:h-16 sm:w-16",
} as const;

export function HeroPhotoSlot({
  stretchOnLg = false,
  size = "default",
}: {
  stretchOnLg?: boolean;
  size?: keyof typeof sizeClasses;
}) {
  return (
    <figure
      className={`relative mx-auto w-full overflow-hidden rounded-3xl border border-edge bg-panel ${sizeClasses[size]} ${
        stretchOnLg ? "lg:h-full lg:w-auto lg:max-w-full" : ""
      }`}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-faint">
        <ImageIcon
          className={iconSizeClasses[size]}
          strokeWidth={1.25}
          aria-hidden="true"
        />
        <span className="font-mono text-label uppercase tracking-label">Photo</span>
      </div>
    </figure>
  );
}
