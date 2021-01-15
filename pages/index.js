import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Layout, { WebsiteName } from '../components/Layout'
import Navbar from '../components/Navbar'
import Showcase from '../components/index/Showcase'
import APIDocumentation from '../components/Api'
import TermsOfUse from '../components/Terms'

export default function Home() {
  const [showTerms, setShowTerms] = useState(false)

  return (
    <Layout>
      <Head>
        <title>Better Url Shrinker | {WebsiteName}</title>
      </Head>

      {/* terms of use */}
      <TermsOfUse showTerms={showTerms} setShowTerms={setShowTerms} />

      {/* main navigation menu */}
      <Navbar />

      {/* showcase section => it includes the main form too */}
      <Showcase />

      <hr />

      {/* api documentation */}
      <APIDocumentation />

      {/* simple footer */}
      <footer className="w-4/5 mx-auto text-center py-8 text-gray-500 text-xl">
        <a href="https://www.buymeacoffee.com/theboringdude" target="_blank">
          <div className="h-16 w-56 mx-auto relative z-40">
            <Image
              alt="Buy Me A Coffee"
              src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
              layout="fill"
            />
          </div>
        </a>
        <div className="mt-4">
          &copy; {new Date().getFullYear()} |{' '}
          <a
            href="https://github.com/TheBoringDude"
            className="underline hover:text-gray-600 font-black"
          >
            @TheBoringDude
          </a>{' '}
          |{' '}
          <button
            className="hover:underline"
            onClick={() => setShowTerms(true)}
          >
            Terms of Use
          </button>
        </div>
      </footer>
    </Layout>
  )
}
