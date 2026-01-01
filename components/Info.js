import { useTranslation, Trans } from 'next-i18next'

export default function Info() {
  const { t } = useTranslation('common')
  
  return (
    <section className="md:grid md:gap-8 md:grid-cols-2">
      <div className="mb-4 md:mb-0">
        <h2 className='text-2xl font-semibold mb-4'>{t('information')}</h2>
      </div>
      <div>
        <ul className="list-disc">
          <li>{t('info_exp')}</li>
          <li>{t('info_gi')}</li>
          <li><Trans i18nKey="info_free" components={{ 1: <a href="mailto:info@jiujitsusaintlambert.ca" />}} /></li>
          <li>{t('info_more')}</li>
        </ul>
      </div>
    </section>
  )
}
