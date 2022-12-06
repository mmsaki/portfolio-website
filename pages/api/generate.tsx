import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

export const config = {
  runtime: "experimental-edge",
};

export default async function handler(req: NextRequest) {
  return new ImageResponse(
        <div id="5" className="punk">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            shape-rendering="crispEdges"
            transform="scale(-1, 1) translate(0, 0)"
          >
            <metadata>Money Brothers</metadata>
            <path
              stroke="#000000"
              d="M10 5h7M9 6h1M17 6h2M8 7h1M18 7h1M8 8h1M18 8h2M7 9h1M19 9h1M7 10h2M19 10h1M6 11h1M9 11h1M15 11h1M19 11h1M5 12h1M16 12h1M19 12h1M5 13h1M16 13h1M19 13h1M6 14h1M16 14h1M19 14h1M6 15h1M15 15h1M19 15h1M7 16h1M14 16h1M19 16h1M6 17h1M19 17h1M7 18h1M19 18h1M7 19h1M19 19h1M7 20h5M19 20h1M11 21h1M19 21h1M11 22h1M19 22h1M11 23h1M19 23h1"
            />
            <path
              stroke="#dbb180"
              d="M10 6h7M9 7h3M13 7h5M9 8h2M12 8h6M8 9h11M11 10h8M7 11h2M11 11h4M16 11h3M6 12h2M10 12h6M17 12h2M6 13h10M17 13h2M8 14h8M17 14h2M7 15h7M17 15h2M9 16h5M15 16h4M7 17h12M8 18h11M8 19h4M14 19h5M12 20h7M12 21h7M12 22h7M12 23h7"
            />
            <path stroke="#e7cba9" d="M12 7h1M11 8h1" />
            <path stroke="#86581e" d="M9 10h2" />
            <path stroke="#a66e2c" d="M10 11h1M9 12h1M14 15h1M16 15h1M8 16h1" />
            <path stroke="#a77c47" d="M8 12h1M7 14h1" />
            <path stroke="#bc883f" d="M12 19h2" />
            {/* Cigarrete */}
            <path stroke="#c6c6c6" d="M2 11h1M2 12h1M2 13h1M2 14h1M3 16h4" />
            <path stroke="#000000" d="M2 15h4M7 16h1M2 17h4" />
            <path stroke="#e25b26" d="M2 16h1" />
          </svg>
      </div>
    ),
    {
      width: 500,
      height: 500,
    }
}
