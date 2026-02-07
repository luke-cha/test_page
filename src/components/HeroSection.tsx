import { HERO } from '../constants/data'

export default function HeroSection() {
  return (
    <section className="section-padding">
      <div className="content-width">
        <p className="text-sm md:text-base font-medium text-primary tracking-wide mb-4">
          {HERO.slogan}
        </p>
        <h1 className="text-3xl md:text-4xl font-semibold text-text-main leading-snug">
          {HERO.title}
        </h1>
        <p className="mt-4 text-xl md:text-2xl font-medium text-text-muted leading-relaxed">
          {HERO.subtitle}
        </p>
      </div>
    </section>
  )
}
