import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#151310",
          borderRadius: 7,
        }}
      >
        <svg width="32" height="32" viewBox="0 0 100 100">
          <path
            d="M16 78 L16 24 L41 50 L66 24 L66 78"
            fill="none"
            stroke="#f2924f"
            strokeWidth={11}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M58 78 L74 20 L90 78"
            fill="none"
            stroke="#f2924f"
            strokeWidth={11}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <line
            x1={65.4}
            y1={55}
            x2={82.6}
            y2={55}
            stroke="#f2924f"
            strokeWidth={9.5}
            strokeLinecap="round"
          />
        </svg>
      </div>
    ),
    { ...size }
  );
}
