import Head from 'next/head'
import Link from 'next/link'
import Script from 'next/script'
import { useRouter } from 'next/router'
import { useTranslation, Trans } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Header from '@components/Header'

export default function Home() {
  const { t } = useTranslation('common')
  const router = useRouter()

  const changeTo = router.locale === 'en' ? 'fr' : 'en'
  return (
    <div>
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
        <title>Jiu-Jitsu Saint-Lambert</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"></link>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"></link> 
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"></link>
        <meta desc={t('meta_desc')} />
      </Head>

      <main className="container max-w-4xl p-8 text-sm text-slate-200">
        <section className="w-full mb-8 relative">
          <h1 className="text-3xl text-center sm:text-left">
            <img className="hidden sm:inline-block max-w-48 max-h-48" src="/logo.png" alt="Jiu-Jitsu Saint-Lambert" />
            <img className="inline-block sm:hidden max-w-48 max-h-48" src="/logo-circle.png" alt="Jiu-Jitsu Saint-Lambert" />
          </h1>
                <div className="absolute -top-4 -right-4 sm:top-0 sm:right-0">
        <Link href="/" locale={changeTo} className="
          text-sm
          inline-block
          px-4 py-1
          border
          border-slate-300
          rounded-2xl
          text-slate-300
          hover:border-slate-400
          hover:text-slate-400">
          {t('change-locale', { changeTo })}
        </Link>
      </div>
        </section>
        {/* Intro */}
        <section className="grid sm:gap-8 sm:grid-cols-2 items-center">
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              {t('description')}
            </h2>
            <p className="description mb-8">
              {t('sub_text')}
            </p>
          </div>
          <div>
            <div className="ml-embedded" data-form="937h89"></div>
          </div>
        </section>

        {/* Bio */}
        <section className="md:grid md:gap-8 md:grid-cols-2 items-center">
          <div>
            <img className="mb-4 sm:mb-0 rounded-lg" src="/bio.jpeg" alt="Tetsuro and his boy after a BJJ competion." />

          </div>
          <div>
            <Trans i18nKey="bio" components={{ 1: <p /> }} />
          </div>
        </section>

        {/* Map */}

        <section>
          {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2796.327883192133!2d-73.51274982330087!3d45.50347783081646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc91ad76bb5be99%3A0x174808b0b71a4afa!2s485%20Av.%20Birch%2C%20Saint-Lambert%2C%20QC%20J4P%202M7!5e0!3m2!1sen!2sca!4v1759318617168!5m2!1sen!2sca" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
        </section>

      </main>
    </div>
  )
}

export const getServerSideProps = async ({ locale }) => ({
  props: {
      ...(await serverSideTranslations(locale, ['common']))
  }
});