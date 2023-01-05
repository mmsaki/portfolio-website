import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";
import { GetStaticProps } from "next";
import Image from "next/image";
import Calendly from "../components/calendly";

export default function Home({
  allPostsData,
}: {
  allPostsData: {
    date: string;
    title: string;
    id: string;
    author: string;
  }[];
}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hello, I'm <span className={utilStyles.bolded}>Meek. </span>
          I'm a Junior Fintech/Blockchain Analytst and also an Artist (Sculptor
          & Music Producer).
        </p>
        <a href="https://calendly.com/meekmsaki/30min">
          Schedule time with me
        </a>
        <p>
          Welcome to my FinTech blog! I'm glad you're here. I'm thrilled to have
          you as a reader and hope you find my insights and perspectives on
          FinTech helpful and informative.
        </p>
        <p>
          You can find me on
          <Link href="https://github.com/mmsaki"> Github</Link> and
          <Link href="https://twitter.com/msakiart"> Twitter</Link>.
        </p>
        <p>
          All content is for informational purposes only or not intended as
          financial advice.
        </p>
      </section>
      <div className="container">
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <div className="grid">
            {allPostsData.map(({ id, date, title, author }) => (
              <Link href={`/posts/${id}`} className="card">
                <div>{title}</div>
                <small className={utilStyles.lightText}>
                  <Date dateString={date} />
                </small>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};
