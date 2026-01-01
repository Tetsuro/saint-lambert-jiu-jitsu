import { useTranslation } from 'next-i18next'

export default function Info() {
  const { t } = useTranslation('common')
  
  return (
    <section className="md:grid md:gap-8 md:grid-cols-2">
      <div className="mb-4 md:mb-0">
        <h2 className='text-2xl font-semibold mb-4'>{t('information')}</h2>
      </div>
      <div>
        <ul className="list-disc">
          <li>No experience necessary.</li>
          <li>Please bring a gi and belt (not necessary for trial class).</li>
          <li>First class is free - please email beforehand as space is limited.</li>
          <li>More classes to be added in the future based on demand and rental space availability.</li>
        </ul>

      </div>
    </section>
  )
}
