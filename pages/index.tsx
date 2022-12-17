import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";
import { GetStaticProps } from "next";

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
      </section>
      <div className="container">
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <div className="grid">
            {allPostsData.map(({ id, date, title, author }) => (
              <Link href={`/posts/${id}`} className="card">
                <div>{title} &rarr;</div>
                <small className={utilStyles.lightText}>
                  <Date dateString={date} />
                </small>
              </Link>
            ))}
          </div>
        </section>
        {/* <Link href="/punk">
          <section className="card">
            <h2
              className={`${utilStyles.headingMd} ${utilStyles.padding1px} noneselect`}
            >
              Money Brothers™ Punk &rarr;
            </h2>
            <p className="noselect">🚧 Under consturction. </p>
            <small className="noselect">
              No Punks sales on this site. Please check back later.
            </small>
          </section>
        </Link> */}
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
