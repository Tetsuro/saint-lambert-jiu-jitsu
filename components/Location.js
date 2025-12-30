import { useTranslation, Trans } from 'next-i18next'

export default function Location() {
  const { t } = useTranslation('common')
  
  return (
    <section className="md:grid md:gap-8 md:grid-cols-2">
      <div>
        <h2 className='text-2xl font-semibold mb-4'>{t('location')}</h2>
        <p>
          {/* {t('location_desc')} */}
          <Trans i18nKey="location_desc" components={{ 1: <a target="_blank" href="https://ballethop.com/saint-lambert" />, 2: <a href="https://maps.app.goo.gl/hwQXF7VADMWRfiWS6" target="_blank" /> }} />
        </p>
      </div>
      <div>
        <div className="rounded-lg overflow-hidden mb-4 md:mb-0">
          <div className="mapouter"><div className="gmap_canvas"><iframe className="gmap_iframe" frameborder="0" scrolling="no" marginheight="0" width="100%" marginwidth="0" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=300A rue d’Arran, Saint-Lambert&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe></div></div>
        </div>
      </div>
    </section>
  )
}
