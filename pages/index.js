import Head from 'next/head'
import Header from '@components/Header'
import Script from 'next/script'

export default function Home() {
  return (
    <div className="container p-8">
    <Script
      id="show-banner"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
          __html: `(function(w,d,e,u,f,l,n){w[f]=w[f]||function(){(w[f].q=w[f].q||[])
    .push(arguments);},l=d.createElement(e),l.async=1,l.src=u,
    n=d.getElementsByTagName(e)[0],n.parentNode.insertBefore(l,n);})
    (window,document,'script','https://assets.mailerlite.com/js/universal.js','ml');
    ml('account', '1686257');`,
      }}
      />
      <Head>
        <title>Saint-Lambert Jiu-Jitsu Club</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="max-w-lg">
        <Header title="Saint-Lambert Jiu-Jitsu Club" />
        <p className="description mb-4">
          If you are interested, please use the form below to be added to the mailing list. We will contact you as soon as we are ready!
        </p>
        <div>
          <div className="ml-embedded" data-form="937h89"></div>
        </div>
      </main>
    </div>
  )
}
