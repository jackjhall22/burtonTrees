import { renderOgImage, alt, size, contentType } from "@/lib/og-template";

export { alt, size, contentType };

export default function OpengraphImage() {
  return renderOgImage();
}
