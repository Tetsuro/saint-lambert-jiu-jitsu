import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Saint-Lambert Jiu-Jitsu Club</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Saint-Lambert Jiu-Jitsu Club" />
        <p className="description">
          Coming soon
        </p>
      </main>
    </div>
  )
}
