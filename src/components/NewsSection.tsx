import { NEWS } from '../constants/data'
import { HiExternalLink } from 'react-icons/hi'

export default function NewsSection() {
  return (
    <section className="card p-6 md:p-8">
      <p className="text-base font-semibold text-text-primary mb-4">
        {NEWS.title}
      </p>

      <p className="text-sm text-text-secondary leading-relaxed">
        {NEWS.description}
      </p>

      <a
        href={NEWS.ctaLink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1 mt-3 text-sm text-mint-600 font-medium hover:text-mint-400 transition-colors"
      >
        {NEWS.ctaText}
        <HiExternalLink className="w-3.5 h-3.5" />
      </a>

      <div className="divider my-5" />

      <p className="text-xs text-text-muted">
        {NEWS.videoText}
      </p>
    </section>
  )
}
