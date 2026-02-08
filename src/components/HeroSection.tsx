import { HERO, REPRESENTATIVE } from '../constants/data'

export default function HeroSection() {
  return (
    <section className="card p-6 md:p-8">
      <p className="text-xs font-medium text-text-muted uppercase tracking-wider mb-4">
        {HERO.slogan}
      </p>

      <h1 className="text-2xl md:text-3xl font-bold text-text-primary leading-snug">
        {HERO.title}
      </h1>
      <p className="mt-3 text-base text-text-secondary leading-relaxed">
        {HERO.subtitle}
      </p>

      <div className="divider my-5" />

      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-mint-100 flex items-center justify-center text-mint-600 font-bold text-sm">
          {REPRESENTATIVE.name.charAt(0)}
        </div>
        <div>
          <p className="text-sm font-semibold text-text-primary">{REPRESENTATIVE.role} {REPRESENTATIVE.name}</p>
          <p className="text-xs text-text-muted">{REPRESENTATIVE.title}</p>
        </div>
      </div>
    </section>
  )
}
