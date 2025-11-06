import { useTranslation, Trans } from 'next-i18next'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Header() {
  const { t } = useTranslation('common')
  const router = useRouter()

  const changeTo = router.locale === 'en' ? 'fr' : 'en'
  return (
    <section className="w-full mb-8 md:mb-16 relative">
      <h1 className="text-3xl text-center sm:text-left">
        <img className="hidden sm:inline-block max-w-48 max-h-48" src="/logo.png" alt="Jiu-Jitsu Saint-Lambert" />
        <img className="inline-block sm:hidden max-w-48 max-h-48" src="/logo-circle.png" alt="Jiu-Jitsu Saint-Lambert" />
      </h1>
      <div className="absolute -top-4 -right-4 sm:top-0 sm:right-0">
      <Link href="/" locale={changeTo} className="
        text-sm
        inline-block
        px-4 py-1
        border
        border-slate-300
        rounded-2xl
        text-slate-300
        text-
        hover:border-slate-400
        hover:text-slate-400">
        {t('change-locale', { changeTo })}
      </Link>
    </div>
    </section>
  )
}
