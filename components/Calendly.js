import Head from 'next/head';
import { useEffect } from 'react';

export default function Calendly() {
  useEffect(() => {
    window.Calendly.initInlineWidget({
      url: "https://calendly.com/meekmsaki",
      parentElement: document.getElementById("calendly-inline-widget"),
    });
  }, [])
  return (  
    <div>
      <Head>
        <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet"></link>
        <script src="https://assets.calendly.com/assets/external/widget.js"></script>
        <script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript" async></script>
      <script type="text/javascript">window.onload = function() { Calendly.initBadgeWidget({ url: 'https://calendly.com/meekmsaki', text: 'Schedule time with me', color: '#0069ff', textColor: '#ffffff', branding: true })}</script>

      </Head>
      <div id="calendly-inline-widget"></div>
    </div>
  );
}
