import Head from 'next/head'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Header from '@components/Header'
import Intro from '@components/Intro'
import Pricing from '@components/Pricing'
import Location from '@components/Location'
import Bio from '@components/Bio'
import Info from '@components/Info'

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
        <meta name="description" content={t('meta_desc')} key="desc" />
      </Head>

      <main className="container max-w-3xl p-8 text-slate-200">
        <Header />
        <Intro />
        <Pricing />
        <Info />
        <Location />
        <Bio />
        <section>
        </section>
        <footer>
          <a href="mailto:info@jiujitsusaintlambert.ca">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z"/></svg>
            <span>{t('contact_us')}</span>
          </a>
          <a href="https://www.instagram.com/jiujitsusaintlambert" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="18px" stroke="#fff" viewBox="-271 273 256 256"><path d="M-64.5 273h-157c-27.3 0-49.5 22.2-49.5 49.5v157.1c0 27.3 22.2 49.5 49.5 49.5h157c27.3 0 49.5-22.2 49.5-49.5V322.4c-.1-27.2-22.3-49.4-49.5-49.4zm14.2 29.5h5.7v43.4l-43.3.1-.1-43.4 37.7-.1zm-129.3 72.2c8.2-11.3 21.5-18.8 36.5-18.8s28.3 7.4 36.5 18.8c5.4 7.4 8.5 16.5 8.5 26.3 0 24.8-20.2 45.1-45.1 45.1s-44.9-20.3-44.9-45.1c0-9.8 3.2-18.9 8.5-26.3zM-40 479.5C-40 493-51 504-64.5 504h-157c-13.5 0-24.5-11-24.5-24.5V374.7h38.2c-3.3 8.1-5.2 17-5.2 26.3 0 38.6 31.4 70 70 70s70-31.4 70-70c0-9.3-1.9-18.2-5.2-26.3H-40v104.8z"/></svg>
            <span>Instagram</span>
          </a>
        </footer>
      </main>
    </div>
  )
}

export const getServerSideProps = async ({ locale }) => ({
  props: {
      ...(await serverSideTranslations(locale, ['common']))
  }
});