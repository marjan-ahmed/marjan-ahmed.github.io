import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export const size = {
  width: 180,
  height: 180,
};
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#151310",
        }}
      >
        <svg width="180" height="180" viewBox="0 0 100 100">
          <g stroke="#f2924f" strokeWidth={2.5} strokeLinecap="round" opacity={0.55}>
            <path d="M12 22 L12 12 L22 12" fill="none" />
            <path d="M78 12 L88 12 L88 22" fill="none" />
            <path d="M88 78 L88 88 L78 88" fill="none" />
            <path d="M22 88 L12 88 L12 78" fill="none" />
          </g>
          <path
            d="M16 78 L16 24 L41 50 L66 24 L66 78"
            fill="none"
            stroke="#f2924f"
            strokeWidth={10.5}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M58 78 L74 20 L90 78"
            fill="none"
            stroke="#f2924f"
            strokeWidth={10.5}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <line
            x1={65.4}
            y1={55}
            x2={82.6}
            y2={55}
            stroke="#f2924f"
            strokeWidth={9}
            strokeLinecap="round"
          />
        </svg>
      </div>
    ),
    { ...size }
  );
}
