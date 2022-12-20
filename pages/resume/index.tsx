import Head from "next/head";
import Image from "next/image";
import utilStyles from "../../styles/utils.module.css";

export default function Punks() {
  return (
    <div className="container">
      <Head>
        <title>Meek Msaki Resume</title>
      </Head>
      <img
        alt="Meek Msaki Resume"
        width="50%"
        height="100%"
        src="/images/resume.jpg"
      />
    </div>
  );
}
