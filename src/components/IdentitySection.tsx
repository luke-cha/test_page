import { IDENTITY } from '../constants/data'
import { HiArrowRight } from 'react-icons/hi'

export default function IdentitySection() {
  return (
    <section className="card p-6 md:p-8">
      <p className="text-base font-semibold text-text-primary leading-snug">
        {IDENTITY.title}
      </p>

      <div className="divider my-5" />

      <div className="text-sm text-text-secondary leading-relaxed space-y-0.5">
        {IDENTITY.description.map((line, i) => (
          <p key={i}>{line}</p>
        ))}
      </div>

      <div className="mt-5 p-4 rounded-2xl bg-mint-50 border border-mint-200">
        <div className="text-sm text-text-primary leading-relaxed space-y-0.5">
          {IDENTITY.ctaMessage.map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </div>
      </div>

      <div className="mt-5">
        <a
          href={IDENTITY.ctaLink}
          className="btn-mint"
        >
          {IDENTITY.ctaText}
          <HiArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  )
}
