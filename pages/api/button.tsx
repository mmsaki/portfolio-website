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
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.tenor.com%2Fimages%2Ff444e4974c71b415938b46d8372e5ac6%2Ftenor.gif&f=1&nofb=1&ipt=1da3d919b9c538f561fef1b4b7a3e7fccf43f09f99994c516c285d2fa9d3ecfb&ipo=images"
          style={{ borderRadius: 128 }}
        />
        <p></p>
      </div>
    )
  );
}
