import Head from 'next/head'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

export default function Home() {
  return (
    <>
      <Head>
        <title>Quatlas Team | Aeromodelling MSRIT</title>
        <meta
          name="description"
          content="Team Quatlas is the official aeromodelling team of RIT participating in SAE Aero design competition."
        />
        <meta
          name="keywords"
          content="Quatlas, Aeromodelling in RIT, Quatlas Ramaiah"
        />
      </Head>
      <Header />
      <main>
        <Faqs />
      </main>
      <Footer />
    </>
  )
}
