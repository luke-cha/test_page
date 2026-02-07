import { PRESS } from '../constants/data'
import { HiExternalLink } from 'react-icons/hi'

export default function PressSection() {
  return (
    <section className="section-padding bg-bg-gray">
      <div className="content-width">
        <h2 className="text-2xl md:text-3xl font-semibold text-text-main mb-10">
          {PRESS.title}
        </h2>

        <div className="space-y-6">
          {PRESS.articles.map((article, i) => (
            <div
              key={i}
              className="border border-gray-200 rounded-xl p-6 bg-white hover:border-primary hover:shadow-md transition-all"
            >
              <h3 className="text-base font-medium text-text-main">
                {article.title}
              </h3>
              <p className="mt-2 text-sm text-text-muted">
                {article.description}
              </p>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 mt-3 text-xs text-primary hover:underline"
              >
                출처: {article.source}
                <HiExternalLink className="w-3 h-3" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
