import { IDENTITY } from '../constants/data'

export default function IdentitySection() {
  return (
    <section className="section-padding bg-bg-gray">
      <div className="content-width space-y-8">
        <h2 className="text-2xl md:text-3xl font-semibold text-text-main leading-snug">
          {IDENTITY.title}
        </h2>

        <div className="text-base text-text-main leading-relaxed space-y-1">
          {IDENTITY.description.map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </div>

        <div className="text-base text-text-main leading-relaxed space-y-1 mt-8">
          {IDENTITY.ctaMessage.map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </div>

        <a
          href={IDENTITY.ctaLink}
          className="inline-block mt-4 px-8 py-3 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary-light transition-colors"
        >
          {IDENTITY.ctaText}
        </a>
      </div>
    </section>
  )
}
