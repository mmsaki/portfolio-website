import Head from 'next/head'
import utilStyles from '../styles/utils.module.css' 
import Layout from '../components/layout'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import { GetStaticProps } from 'next'

export default function Home ({
  allPostsData
}: {
  allPostsData: {
    date: string
    title: string
    id: string
  }
}) {
  return (
    <Layout home>
      <Head>
        <title>Meek Msaki</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hello, I'm <span className={utilStyles.bolded}>Meek. </span>
          I'm a Blockchain Analytics Engineer and an Artist (Sculptor & Music Producer).
          You can contact me on
          {' '}
          <a href="https://twitter.com/msakiart">Twitter</a>.
        </p>
      </section>    
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date}/>
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
