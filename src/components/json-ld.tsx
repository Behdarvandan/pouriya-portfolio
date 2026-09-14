import type { CreativeWorkJsonLd, PersonJsonLd } from "@/lib/json-ld";

/**
 * Renders a JSON-LD <script> tag per Next's recommended pattern. `<` is
 * escaped to its unicode equivalent since JSON.stringify alone doesn't
 * sanitize against XSS injection in the surrounding HTML.
 */
export function JsonLd({ data }: { data: PersonJsonLd | CreativeWorkJsonLd }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
