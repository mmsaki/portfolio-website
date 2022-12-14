import { ImageResponse } from "@vercel/og";
import Image from "next/image";

export const config = {
  runtime: "experimental-edge",
};

export default async function () {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          alt="Github Profile"
          width="456"
          height="456"
          src="/images/profile.jpg"
          style={{ borderRadius: 128 }}
        />
        <p></p>
      </div>
    )
  );
}
