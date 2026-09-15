import { getTranslations } from "next-intl/server";

import { HeroPhotoSlot } from "./hero-photo-slot";
import { PhotoRevealMotion } from "./motion/photo-reveal-motion";

/**
 * Faz 6.5: the "then show it" half of the hero's "hint, then show" pairing
 * (Faz 6.4 left the hero dry/typographic on purpose) — a dedicated
 * transition section between Hero and About whose only job is the
 * scroll-linked photo reveal in motion/photo-reveal-motion.tsx.
 */
export async function PhotoReveal() {
  const t = await getTranslations("PhotoReveal");

  return (
    <section id="photo-reveal" className="relative overflow-hidden bg-canvas">
      <PhotoRevealMotion eyebrow={t("eyebrow")} caption={t("caption")}>
        <HeroPhotoSlot size="feature" />
      </PhotoRevealMotion>
    </section>
  );
}
