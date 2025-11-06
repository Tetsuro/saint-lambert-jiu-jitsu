import { useTranslation } from 'next-i18next'

export default function Location() {
  const { t } = useTranslation('common')
  
  return (
    <section className="md:grid md:gap-8 md:grid-cols-2">
      <div>
        <h2 className='text-2xl font-semibold mb-4'>{t('location')}</h2>
        <p>
          {t('location_desc')}
        </p>
      </div>
      <div>
        <div className="rounded-lg overflow-hidden mb-4 md:mb-0">
          <div class="mapouter"><div class="gmap_canvas"><iframe class="gmap_iframe" width="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=485 av birch, saint-lambert&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe></div></div>
        </div>
      </div>
    </section>
  )
}
