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
      <section tw={utilStyles.headingMd}>
        <p>
          Hello, I'm <span tw={utilStyles.bolded}>Meek. </span>
          I'm a Blockchain Analytics Engineer and an Artist (Sculptor & Music
          Producer). You can contact me on{" "}
          <a href="https://twitter.com/msakiart">Twitter</a>.
        </p>
      </section>
      <section></section>
      <section tw={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 tw={utilStyles.headingLg}>Blog</h2>
        <ul tw={utilStyles.list}>
          {allPostsData.map(({ id, date, title, author }) => (
            <li tw={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small tw={utilStyles.lightText}>
                <Date dateString={date} />
                <p>{author}</p>
              </small>
            </li>
          ))}
        </ul>
      </section>
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
