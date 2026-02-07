import { PHILOSOPHY } from '../constants/data'

export default function PhilosophySection() {
  return (
    <section className="section-padding bg-bg-gray">
      <div className="content-width space-y-10">
        {/* Quote */}
        <blockquote className="text-xl md:text-2xl font-semibold text-text-main leading-relaxed border-l-4 border-primary pl-6">
          {PHILOSOPHY.quote}
        </blockquote>

        {/* Body */}
        <div className="text-base text-text-main leading-relaxed space-y-1">
          {PHILOSOPHY.body.map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </div>

        {/* Message */}
        <div className="text-base text-text-main leading-relaxed space-y-1">
          {PHILOSOPHY.message.map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </div>

        {/* Closing */}
        <div className="text-base text-text-main leading-relaxed space-y-1">
          {PHILOSOPHY.closing.map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </div>

        {/* CTA */}
        <a
          href={PHILOSOPHY.ctaLink}
          className="inline-block mt-6 px-8 py-3 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary-light transition-colors"
        >
          {PHILOSOPHY.ctaText}
        </a>
      </div>
    </section>
  )
}
