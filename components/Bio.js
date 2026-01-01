import { useTranslation, Trans } from 'next-i18next'

export default function Bio() {
  const { t } = useTranslation('common')
  
  return (
    <section className="md:grid md:gap-8 md:grid-cols-2">
      <div>
        <h2 className='text-2xl font-semibold mb-4'>{t('about')}</h2>
        <Trans i18nKey="bio" components={{ 1: <p />, 2: <a target="_blank" href="https://mizustudio.ca/" /> }} />
      </div>
      <div>
        <img className="mb-4 sm:mb-0 rounded-lg" src="/bio.jpeg" alt="Tetsuro and his boy after a BJJ competion." />
      </div>
    </section>
  )
}
