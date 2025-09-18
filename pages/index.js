import Head from 'next/head'
import Link from 'next/link'
import Script from 'next/script'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
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
      </Head>
      <div className="absolute top-4 right-4">
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
      <main className="container max-w-[400px] p-8 text-sm text-center text-slate-200">
        <Header title="Jiu-Jitsu Saint-Lambert" />
        <p className="description mb-4">
          {t('description')}
        </p>
        <p className="description mb-8">
          {t('sub_text')}
        </p>
        <div>
          <div className="ml-embedded" data-form="937h89"></div>
        </div>
      </main>
    </div>
  )
}

export const getServerSideProps = async ({ locale }) => ({
  props: {
      ...(await serverSideTranslations(locale, ['common']))
  }
});