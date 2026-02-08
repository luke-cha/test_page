import { PHILOSOPHY } from '../constants/data'

export default function PhilosophySection() {
  return (
    <section className="card p-6 md:p-8">
      <p className="text-lg font-semibold text-text-primary leading-relaxed">
        {PHILOSOPHY.quote}
      </p>

      <div className="divider my-5" />

      <div className="space-y-4 text-sm text-text-secondary leading-relaxed">
        <div className="space-y-0.5">
          {PHILOSOPHY.body.map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </div>

        <div className="space-y-0.5">
          {PHILOSOPHY.message.map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </div>

        <div className="space-y-0.5 text-text-primary font-medium">
          {PHILOSOPHY.closing.map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <a href={PHILOSOPHY.ctaLink} className="btn-dark">
          {PHILOSOPHY.ctaText}
        </a>
      </div>
    </section>
  )
}
