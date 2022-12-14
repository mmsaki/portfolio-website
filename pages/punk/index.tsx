import Head from "next/head";
import Link from "next/link";
import utilStyles from "../../styles/utils.module.css";
import Image from "next/image";

export default function Punks() {
  return (
    <div className="container">
      <Head>
        <title>American Brotherssters From the Hood</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="punk-grid">
          <Link href="/">
            <section className="card">
              <h2
                className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}
              >
                msaki.eth™ Punks &rarr;
              </h2>
              <p className="">🚧 Under consturction. </p>
              <small className={`${utilStyles.lightText}`}>
                No Punks sale on this site. Please check back later.
              </small>
            </section>
          </Link>
          <div id="Punk List">
            <div id="1" className="punk">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                shape-rendering="crispEdges"
                transform="scale(-1, 1) translate(0, 0)"
              >
                <metadata>American Brothers</metadata>
                <g className="face">
                  <g className="outline">
                    <path
                      stroke="#000000"
                      d="M10 5h7M9 6h1M17 6h2M8 7h1M18 7h1M8 8h1M18 8h2M7 9h1M19 9h1M7 10h2M19 10h1M6 11h1M9 11h1M15 11h1M19 11h1M5 12h1M16 12h1M19 12h1M5 13h1M16 13h1M19 13h1M6 14h1M16 14h1M19 14h1M6 15h1M15 15h1M19 15h1M7 16h1M14 16h1M19 16h1M6 17h1M19 17h1M7 18h1M19 18h1M7 19h1M19 19h1M7 20h5M19 20h1M11 21h1M19 21h1M11 22h1M19 22h1M11 23h1M19 23h1"
                    />
                  </g>
                  <g className="skin-color">
                    <path
                      stroke="#713f1d"
                      d="M10 6h7M9 7h2M12 7h6M9 8h1M11 8h7M8 9h11M11 10h8M7 11h2M11 11h4M16 11h3M6 12h2M10 12h6M17 12h2M6 13h2M9 13h7M17 13h2M8 14h8M17 14h2M7 15h7M17 15h2M9 16h5M15 16h4M7 17h12M8 18h11M8 19h4M14 19h5M12 20h7M12 21h7M12 22h7M12 23h7"
                    />
                  </g>
                  <g className="highlight">
                    <path stroke="#8b532c" d="M11 7h1M10 8h1" />
                  </g>
                  <g className="shadow-light">
                    <path stroke="#552f16" d="M9 10h2M8 12h1M7 14h1M12 19h2" />
                  </g>
                  <g className="shadow-dark">
                    <path
                      stroke="#562600"
                      d="M10 11h1M9 12h1M8 13h1M14 15h1M16 15h1M8 16h1"
                    />
                  </g>
                </g>
                <g className="ear-ring">
                  <path stroke="#ffbaff" d="M14 15h1" />
                </g>
                <g className="beard">
                  <g className="hair">
                    <path
                      stroke="#e22626"
                      d="M6 15h4M11 15h2M8 16h2M11 16h2M6 17h7M5 18h8M5 19h8M5 20h8M5 21h7M7 22h5"
                    />
                  </g>
                  <g className="lips">
                    <path stroke="#853217" d="M6 16h2" />
                  </g>
                </g>
                <g className="dreds 2">
                  <path
                    stroke="#e22626"
                    d="M10 5h8M9 6h2M12 6h8M8 7h2M11 7h10M8 8h12M6 9h15M6 10h15M6 11h2M9 11h13M5 12h1M7 12h1M10 12h2M13 12h9M4 13h1M6 13h3M10 13h2M13 13h8M4 14h1M6 14h1M8 14h1M10 14h2M13 14h1M16 14h7M10 15h1M13 15h1M15 15h7M10 16h1M16 16h6M16 17h6M16 18h1M19 18h1M21 18h1M21 19h1"
                  />
                  <path stroke="#5bfa29" d="M11 6h1M10 7h1" />
                </g>
                <g className="addition">
                  <g className="smoke">
                    <path stroke="#c6c6c6" d="M2 11h1M2 12h1M2 13h1M2 14h1" />
                  </g>
                  <g className="outline">
                    <path stroke="#000000" d="M2 15h5M7 16h1M2 17h5" />
                  </g>
                  <g className="lit">
                    <path stroke="#e25b26" d="M2 16h1" />
                  </g>
                  <g className="blunt-type">
                    <path stroke="#552f16" d="M3 16h4" />
                  </g>
                </g>
              </svg>
            </div>
            <div id="2" className="punk">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                shape-rendering="crispEdges"
                transform="scale(-1, 1) translate(0, 0)"
              >
                <metadata>American Brothers</metadata>
                <g className="face">
                  <path
                    stroke="#000000"
                    d="M10 5h7M9 6h1M17 6h2M8 7h1M18 7h1M8 8h1M18 8h2M7 9h1M19 9h1M7 10h2M19 10h1M6 11h1M9 11h1M15 11h1M19 11h1M5 12h1M16 12h1M19 12h1M5 13h1M16 13h1M19 13h1M6 14h1M16 14h1M19 14h1M6 15h1M15 15h1M19 15h1M7 16h1M14 16h1M19 16h1M6 17h1M19 17h1M7 18h1M19 18h1M7 19h1M19 19h1M7 20h5M19 20h1M11 21h1M19 21h1M11 22h1M19 22h1M11 23h1M19 23h1"
                  />
                  <path
                    stroke="#dbb180"
                    d="M10 6h7M9 7h3M13 7h5M9 8h2M12 8h6M8 9h11M11 10h8M7 11h2M11 11h4M16 11h3M6 12h2M10 12h6M17 12h2M6 13h10M17 13h2M8 14h8M17 14h2M7 15h7M17 15h2M9 16h5M15 16h4M7 17h12M8 18h11M8 19h4M14 19h5M12 20h7M12 21h7M12 22h7M12 23h7"
                  />
                  <path stroke="#e7cba9" d="M12 7h1M11 8h1" />
                  <path
                    stroke="#a66e2c"
                    d="M10 11h1M9 12h1M14 15h1M16 15h1M8 16h1 M9 10h2"
                  />
                  <path stroke="#bc883f" d="M8 12h1M7 14h1 M12 19h2" />
                </g>
                <g className="locks">
                  <path
                    stroke="#dd99cc"
                    d="M10 5h8M9 6h10M8 7h12M8 8h12M6 9h16M6 10h4M11 10h10M6 11h3M11 11h1M13 11h9M5 12h4M11 12h1M13 12h1M15 12h7M4 13h5M10 13h2M13 13h1M15 13h1M17 13h4M4 14h1M6 14h1M8 14h1M10 14h2M13 14h1M17 14h6M8 15h1M10 15h1M13 15h1M17 15h5M10 16h1M17 16h5M16 17h6M16 18h1M19 18h1M21 18h1M21 19h1"
                  />
                </g>
                <g className="goatee">
                  <path stroke="#000000" d="M6 19h3M6 20h3" />
                </g>
                {/* <g className="blunt-type">
                  <path
                    stroke="#c6c6c6"
                    d="M2 11h1M2 12h1M2 13h1M2 14h1M3 16h4"
                  />
                  <path stroke="#000000" d="M2 15h4M7 16h1M2 17h4" />
                  <path stroke="#e25b26" d="M2 16h1" />
                </g> */}
              </svg>
            </div>
            <div id="3" className="punk">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                shape-rendering="crispEdges"
              >
                <metadata>American Brothers</metadata>
                <g className="face">
                  <path
                    stroke="#000000"
                    d="M10 5h7M9 6h1M17 6h2M8 7h1M18 7h1M8 8h1M18 8h2M7 9h1M19 9h1M7 10h2M19 10h1M6 11h1M9 11h1M15 11h1M19 11h1M5 12h1M16 12h1M19 12h1M5 13h1M16 13h1M19 13h1M6 14h1M16 14h1M19 14h1M6 15h1M15 15h1M19 15h1M7 16h1M14 16h1M19 16h1M6 17h1M19 17h1M7 18h1M19 18h1M7 19h1M19 19h1M7 20h5M19 20h1M11 21h1M19 21h1M11 22h1M19 22h1M11 23h1M19 23h1"
                  />
                  <path
                    stroke="#713f1d"
                    d="M10 6h7M9 7h2M12 7h6M9 8h1M11 8h7M8 9h11M11 10h8M7 11h2M11 11h4M16 11h3M6 12h2M10 12h6M17 12h2M6 13h2M9 13h7M17 13h2M8 14h8M17 14h2M7 15h7M17 15h2M9 16h5M15 16h4M7 17h12M8 18h11M8 19h4M14 19h5M12 20h7M12 21h7M12 22h7M12 23h7"
                  />
                  <path stroke="#8b532c" d="M11 7h1M10 8h1" />
                  <path stroke="#552f16" d="M9 10h2M8 12h1M7 14h1M12 19h2" />
                  <path
                    stroke="#562600"
                    d="M10 11h1M9 12h1M8 13h1M14 15h1M16 15h1M8 16h1"
                  />
                </g>
                <g className="ear">
                  <path stroke="#ffba00" d="M14 15h1" />
                </g>
                <g className="beard">
                  <path
                    stroke="#000000"
                    d="M6 15h4M11 15h2M8 16h2M11 16h2M6 17h7M5 18h8M5 19h8M5 20h8M5 21h7M7 22h5"
                  />
                  <path stroke="#853217" d="M6 16h2" />
                </g>
                {/* <g className="blunt-type">
                  <path stroke="#c6c6c6" d="M2 11h1M2 12h1M2 13h1M2 14h1" />
                  <path stroke="#c6c6c6" d="M2 11h1M2 12h1M2 13h1M2 14h1" />
                  <path stroke="#000000" d="M2 15h5M7 16h1M2 17h5" />
                  <path stroke="#e25b26" d="M2 16h1" />
                  <path stroke="#552f16" d="M3 16h4" />
                </g> */}
              </svg>
            </div>
            <div id="4" className="punk">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                shape-rendering="crispEdges"
              >
                <metadata>American Brothers</metadata>
                <g className="face">
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
                  <path
                    stroke="#a66e2c"
                    d="M10 11h1M9 12h1M14 15h1M16 15h1M8 16h1"
                  />
                  <path stroke="#a77c47" d="M8 12h1M7 14h1" />
                  <path stroke="#bc883f" d="M12 19h2" />
                </g>
                <g className="locks">
                  <path
                    stroke="#e22626"
                    d="M10 5h8M9 6h10M8 7h12M8 8h12M6 9h16M6 10h4M11 10h10M6 11h3M11 11h1M13 11h9M5 12h4M11 12h1M13 12h1M15 12h7M4 13h5M10 13h2M13 13h1M15 13h1M17 13h4M4 14h1M6 14h1M8 14h1M10 14h2M13 14h1M17 14h6M8 15h1M10 15h1M13 15h1M17 15h5M10 16h1M17 16h5M16 17h6M16 18h1M19 18h1M21 18h1M21 19h1"
                  />
                </g>
                <g className="addiction">
                  <path
                    stroke="#c6c6c6"
                    d="M2 11h1M2 12h1M2 13h1M2 14h1M3 16h4"
                  />
                  <path stroke="#000000" d="M2 15h4M7 16h1M2 17h4" />
                  <path stroke="#e25b26" d="M2 16h1" />
                </g>
                <g className="beard">
                  <path stroke="#000000" d="M6 19h3M6 20h3" />
                </g>
                <g className="bead-dreds">
                  <path
                    stroke="#000000"
                    d="M10 5h9M8 6h12M8 7h13M7 8h14M7 9h15M6 10h1M8 10h13M6 11h16M5 12h2M8 12h1M10 12h12M6 13h1M8 13h1M10 13h3M14 13h7M10 14h1M14 14h1M16 14h6M15 15h6M22 15h1M16 16h6M16 17h1M18 17h2M21 17h1M16 18h1M19 18h3M21 19h1"
                  />
                  <path
                    stroke="#6107ae"
                    d="M8 15h1M13 15h1 M6 9h1M7 10h1M7 12h1M4 13h2M7 13h1M13 13h1M4 14h1M6 14h1M8 14h1M11 14h1M13 14h1M22 14h1M10 15h1M21 15h1M10 16h1M17 17h1M20 17h1"
                  />
                  <path
                    stroke="#ffbaff"
                    // d="M8 15h1M13"
                  />
                </g>
              </svg>
            </div>
            <div id="5" className="punk">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                shape-rendering="crispEdges"
                transform="scale(-1, 1) translate(0, 0)"
              >
                <metadata>American Brothers</metadata>
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
                <path
                  stroke="#a66e2c"
                  d="M10 11h1M9 12h1M14 15h1M16 15h1M8 16h1"
                />
                <path stroke="#a77c47" d="M8 12h1M7 14h1" />
                <path stroke="#bc883f" d="M12 19h2" />
                <path
                  stroke="#c6c6c6"
                  d="M2 11h1M2 12h1M2 13h1M2 14h1M3 16h4"
                />
                <path stroke="#000000" d="M2 15h4M7 16h1M2 17h4" />
                <path stroke="#e25b26" d="M2 16h1" />
              </svg>
            </div>
          </div>
        </div>
      </main>

      <footer className="footer noselect">
        <p>© 2022</p>
      </footer>
    </div>
  );
}
