import Head from "next/head";
import Image from "next/image";
import utilStyles from "../../styles/utils.module.css";
import { useEffect, useRef } from "react";

export default function Portfolio() {
    const viewer = useRef(null);

    useEffect(() => {
        import('@pdftron/webviewer').then(() => {
            WebViewer(
              {
                path: "/lib",
                initialDoc: "/files/portfolio_oct_2022.pdf",
              },
              viewer.current
            ).then((instance) => {
              const { docViewer } = instance;
              //
            });
                });
            });

  return (
    <div className="container">
      <Head>
        <title>Meek Msaki Resume</title>
      </Head>
      <div className="webviewer" ref={viewer} style={{ height: "100vh", width: "100vw" }}></div>
    </div>
  );
}
