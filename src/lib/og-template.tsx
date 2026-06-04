import { ImageResponse } from "next/og";

export const alt =
  "Burton Industry LLC — Professional tree care, rooted in integrity";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export function renderOgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          backgroundColor: "#0e1311",
          backgroundImage:
            "radial-gradient(circle at 78% 18%, rgba(45,106,70,0.45), transparent 55%), radial-gradient(circle at 12% 92%, rgba(232,98,42,0.18), transparent 50%)",
          color: "#f4f2ed",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            fontSize: "22px",
            letterSpacing: "8px",
            textTransform: "uppercase",
            color: "#ff8f5c",
          }}
        >
          <div
            style={{ width: "56px", height: "2px", backgroundColor: "#ff8f5c" }}
          />
          ISA-Certified Arborists · Central Texas
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <div
            style={{
              fontSize: "94px",
              lineHeight: 1.02,
              fontWeight: 600,
              letterSpacing: "-3px",
            }}
          >
            Professional tree care,
          </div>
          <div
            style={{
              fontSize: "94px",
              lineHeight: 1.02,
              fontWeight: 600,
              letterSpacing: "-3px",
              color: "#9ca89f",
            }}
          >
            rooted in integrity.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: "26px",
          }}
        >
          <div style={{ display: "flex", fontWeight: 700 }}>
            Burton Industry LLC
          </div>
          <div style={{ display: "flex", gap: "28px", color: "#9ca89f" }}>
            <span>BCMA</span>
            <span>TRAQ</span>
            <span>Fully Insured</span>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
