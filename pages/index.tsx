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
          I'm a Blockchain Analytics Engineer and an Artist (Sculptor & Music
          Producer). You can contact me on{" "}
          <Link href="https://twitter.com/msakiart">Twitter</Link>.
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
        <Link href="/punk">
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
        </Link>
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
