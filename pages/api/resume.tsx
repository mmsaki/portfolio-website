import { ImageResponse } from "@vercel/og";
import Image from "next/image";

export const config = {
  runtime: "experimental-edge",
};

export default async function () {
  return new ImageResponse((
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
        <Image
          alt="Meek Msaki Resume"
          width={544}
          height={766}
          src="/images/resume.jpg"
          style={{ borderRadius: 12 }}
        />
        <p></p>
      </div>
  )
  );
}
