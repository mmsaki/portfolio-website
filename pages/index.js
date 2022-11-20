import Head from 'next/head'
import utilStyles from '../styles/utils.module.css' 
import Link from 'next/link'
import Layout from '../components/layout'

export default function Home() {
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
    </Layout>
  )
}
