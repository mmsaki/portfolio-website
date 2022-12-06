import { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({
    description:
      "A human readable description of the item. Markdown is supported",
    external_url:
      "This is the URL that will appear below the asset's image on OpenSea and will allow users to leave OpenSea and view the item on your site.",
    image:
      "This is the URL to the image of the item. Can be just about any type of image (including SVGs, which will be cached into PNGs by OpenSea), and can be IPFS URLs or paths. We recommend using a 350 x 350 image.",
    image_data: "Raw SVG image data",
    name: "American Brothers",
    background_color:
      "fffffa",
    animation_url:
      "A URL to a multi-media attachment for the item. The file extensions GLTF, GLB, WEBM, MP4, M4V, OGV, and OGG are supported, along with the audio-only extensions MP3, WAV, and OGA. Animation_url also supports HTML pages, allowing you to build rich experiences and interactive NFTs using JavaScript canvas, WebGL, and more. Scripts and relative paths within the HTML page are now supported. However, access to browser extensions is not supported.",
    youtube_url: "A URL to a YouTube video.",
    attributes: [
      {
        trait_type: "race",
        value: ["brown", "darkskin", "white"],
      },
      {
        trait_type: "beard",
        value: ["black", "brown", "gottee"],
      },
      {
        trait_type: "hair",
        value: [
          ["brown", "black", "short"],
          ["green", "purple beads", "baby", "black"],
          ["brown"],
        ],
      },
      {
        trait_type: "hat",
        value: ["durag", "purple durag", "red", "police", "snapback"],
      },
      {
        trait_type: "jewelery",
        value: ["gold", "silver", "ear"],
      },
      {
        trait_type: "mouth",
        value: ["cigarette", "blunt"],
      },
    ],
    race: ["brown", "darkskin", "white"],
    beard: ["black", "brown", "gottee"],
    hair: {
      short: ["brown", "black", "short"],
      locks: ["green", "purple beads", "baby", "black"],
      afro: ["brown"],
    },
    hat: ["durag", "purple durag", "red", "police", "snapback"],
    jewelery: ["gold chain", "silver chain", "ear ring"],
    mouth: ["cigarette", "blunt"],
  });
};
