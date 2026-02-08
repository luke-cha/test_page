import { PRESS } from '../constants/data'
import { HiExternalLink } from 'react-icons/hi'

export default function PressSection() {
  return (
    <section className="card p-6 md:p-8">
      <p className="text-base font-semibold text-text-primary mb-5">
        {PRESS.title}
      </p>

      <div className="space-y-4">
        {PRESS.articles.map((article, i) => (
          <div key={i} className="p-4 rounded-2xl bg-bg">
            <p className="text-sm font-medium text-text-primary">
              {article.title}
            </p>
            <p className="mt-1.5 text-xs text-text-secondary leading-relaxed">
              {article.description}
            </p>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 mt-2.5 text-xs text-text-muted hover:text-text-primary transition-colors"
            >
              출처: {article.source}
              <HiExternalLink className="w-3 h-3" />
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
