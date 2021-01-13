import Head from 'next/head'
import Layout, { WebsiteName } from '../components/Layout'
import Navbar from '../components/Navbar'
import Showcase from '../components/index/Showcase'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Better Url Shrinker | {WebsiteName}</title>
      </Head>

      {/* main navigation menu */}
      <Navbar />

      {/* showcase section */}
      <Showcase />
    </Layout>
  )
}
