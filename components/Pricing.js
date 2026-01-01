import { useTranslation, Trans } from 'next-i18next'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Pricing() {
  const { t } = useTranslation('common')
  const router = useRouter()

  const changeTo = router.locale === 'en' ? 'fr' : 'en'
  return (
    <section className="pricing md:grid md:gap-8 md:grid-cols-2">
      <div className="mb-4 md:mb-0">
        <h3>{t('kids_heading')}</h3>
        <div className="price"><strong>$10</strong><span>/ {t('session')}</span></div>
        <p>{t('kids_time')}</p>
        {/* <a className="cta small" href="https://calendly.com/jiujitsusaintlambert/new-meeting" target="_blank">
          {t('book_now')}
        </a> 
         */}
        <button className="cta small">{t('coming_soon')}</button> 
      </div>
            <div>
        <h3>{t('kids_heading_2')}</h3>
        <div className="price"><strong>$10</strong><span>/ {t('session')}</span></div>
        <p>{t('kids_time_2')}</p>

        {/* <a className="cta small" href="https://calendly.com/jiujitsusaintlambert/adult-class" target="_blank">
          {t('coming_soon')}
        </a> */}
        <button className="cta small">{t('coming_soon')}</button> 
      </div>
    </section>
  )
}
