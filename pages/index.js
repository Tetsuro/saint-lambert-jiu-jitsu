import Head from 'next/head'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Header from '@components/Header'
import Intro from '@components/Intro'
import Pricing from '@components/Pricing'
import Location from '@components/Location'
import Bio from '@components/Bio'

export default function Home() {
  const { t } = useTranslation('common')
  const router = useRouter()

  const changeTo = router.locale === 'en' ? 'fr' : 'en'
  return (
    <div>
      <Head>
        <title>Jiu-Jitsu Saint-Lambert</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"></link>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"></link> 
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"></link>
        <meta desc={t('meta_desc')} />
      </Head>

      <main className="container max-w-3xl p-8 text-sm text-slate-200">
        <Header />
        <Intro />
        <Pricing />
        <Location />
        <Bio />
        <section>
          <a className="cta" href="mailto:info@jiujitsusaintlambert.ca">
            <img src="/mail.svg" className="inline-block mr-1" />
            {t('contact_us')}
          </a>
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