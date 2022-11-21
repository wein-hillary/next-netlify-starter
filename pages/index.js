import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      body {
      <background-image: url('https://lh3.googleusercontent.com/43RonhurXJTEEDInNW5gTMPNx08vG6VQyDLgTRYh20qBdngG1qRMV1swDjY43HYUt7QiP_Kqhxeme8b-YGSe6yJG2jw_GwJX1QRmIlsSLr_rgA-qpWiIc2cSgsWSat6edE1SFDQk=w2400')>
      }
      <main>
        <Header title="Whisk taker" />
        <p className="description">
          Recipes, fails, and exerpts from my kitchen.
        </p>
      </main>

      <Footer />
    </div>
  )
}
