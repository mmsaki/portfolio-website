import Head from "next/head";
import Image from "next/image";
import utilStyles from "../../styles/utils.module.css";

export default function Resume() {
  return (
    <div className="container">
      <Head>
        <title>Meek Msaki Resume</title>
      </Head>
      <img
        alt="Meek Msaki Resume"
        src="/images/resume.jpg"
        style={{ height: "100vh" }}
      />
    </div>
  );
}
