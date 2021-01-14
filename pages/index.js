import Head from 'next/head'
import Layout, { WebsiteName } from '../components/Layout'
import Navbar from '../components/Navbar'
import Showcase from '../components/index/Showcase'
import APIDocumentation from '../components/Api'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Better Url Shrinker | {WebsiteName}</title>
      </Head>

      {/* main navigation menu */}
      <Navbar />

      {/* showcase section => it includes the main form too */}
      <Showcase />

      <hr />

      {/* api documentation */}
      <APIDocumentation />
    </Layout>
  )
}
