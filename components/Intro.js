import { useTranslation } from 'next-i18next'

export default function Intro() {
  const { t } = useTranslation('common')
  
  return (
    <section className="w-full flex justify-center">
      <div className="md:max-w-3/4 text-center">
        <h1 className="text-2xl font-semibold mb-4">
          {t('description')}
        </h1>
        <p className="description">
          {t('sub_text')}
        </p>
        <p>
        {/* <a className="cta" href="https://calendly.com/jiujitsusaintlambert" target="_blank">
          {t('book_now')}
        </a>  */}
        </p>
      </div>
    </section>
  )
}
