import Head from 'next/head'

import Contact from '../components/Contact'
import Layout from '../components/Layout'

import Services from '../components/Services'
import TopSection from '../components/TopSection'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Oriental Thaimassasje Trondheim</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge"></meta>
        <meta name="description" content="Oriental Thaimassasje Trondheim" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <Layout>
        <TopSection />
        <Services />
        <Contact />
      </Layout>
    </div>
  )
}
