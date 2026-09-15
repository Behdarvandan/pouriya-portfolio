import { ImageIcon } from "lucide-react";

/**
 * Faz 6.3's hero portrait slot — pulled out of hero.tsx in Faz 6.4 (the hero
 * became a pure typographic composition, no room for a photo alongside it)
 * and kept here, unused for now, so Faz 6.5 can drop it back in wherever
 * the photo reveal ends up living (its own section, a scroll reveal, etc.)
 * without re-deriving the sizing logic below.
 *
 * Fixed 4:5 aspect ratio so the layout holds once a real photo lands here —
 * swap in an <Image> filling this <figure> and nothing around it needs to
 * change. `stretchOnLg` mirrors the height-driven trick from Faz 6.3's
 * two-column hero: pass true when this sits in a lg:items-stretch row next
 * to a taller text column, so the photo fills the row's full height
 * (width derived from that via the same ratio) instead of leaving dead
 * space below a shorter, width-driven box.
 */
export function HeroPhotoSlot({ stretchOnLg = false }: { stretchOnLg?: boolean }) {
  return (
    <figure
      className={`relative aspect-[4/5] w-full max-w-sm overflow-hidden rounded-3xl border border-edge bg-panel ${
        stretchOnLg ? "lg:h-full lg:w-auto lg:max-w-full" : ""
      }`}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-faint">
        <ImageIcon className="h-10 w-10" strokeWidth={1.25} aria-hidden="true" />
        <span className="font-mono text-label uppercase tracking-label">Photo</span>
      </div>
    </figure>
  );
}
