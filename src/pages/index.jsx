import Head from 'next/head'
import { useEffect } from 'react'
import { CallToAction } from '@/components/CallToAction'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { Reviews } from '@/components/Reviews'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'

export default function Home() {
  useEffect(() => {
    window.location.href = 'https://quatlas.web.app/'
  }, [])

  return (
    <>
      <Head>
        <title>Quatlas | Aeromodelling MSRIT</title>
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
        <Hero />
        <PrimaryFeatures />
        <SecondaryFeatures />
      </main>
      <Footer />
    </>
  )
}
