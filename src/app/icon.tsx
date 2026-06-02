import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

// Generates the favicon at build time — an "MC" monogram on the accent color.
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#5b54e6",
          color: "#ffffff",
          fontSize: 17,
          fontWeight: 700,
          fontFamily: "sans-serif",
        }}
      >
        MC
      </div>
    ),
    { ...size },
  );
}
