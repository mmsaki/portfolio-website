import Head from "next/head";
import { useEffect, useRef } from 'react';

export default function Porfolio() {
  const viewer = useRef(null);

  useEffect(() => {
    import('@pdftron/webviewer').then(() => {
      WebViewer(
        {
          path: '/lib',
          initialDoc: "/files/portfolio_oct_2022.pdf",
        },
        viewer.current
      ).then((instance) => {
        const { docViewer } = instance;
        // you can now call WebViewer APIs here...
      });
    });
  }, []);

  return (
      <div className='webviewer' ref={viewer} style={{ height: '100vh', width: "100vw" }}></div>
  );
}
