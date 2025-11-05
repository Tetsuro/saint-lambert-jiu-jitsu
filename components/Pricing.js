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
        <ul>
          <li>{t('kids_age')}</li>
          <li>{t('kids_time')}</li>
        </ul>
        <a className="cta small" href="https://calendly.com/jiujitsusaintlambert/new-meeting" target="_blank">
          {t('book_now')}
        </a> 
      </div>
      <div>
        <h3>{t('adults_heading')}</h3>
        <div className="price"><strong>$10</strong><span>/ {t('session')}</span></div>
        <ul>
          <li>{t('adults_beginner')}</li>
          <li>{t('adults_time')}</li>
        </ul>
        <a className="cta small" href="https://calendly.com/jiujitsusaintlambert/adult-class" target="_blank">
          {t('book_now')}
        </a> 
      </div>
    </section>
  )
}
