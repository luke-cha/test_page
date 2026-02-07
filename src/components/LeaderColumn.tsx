import { LEADER_COLUMNS } from '../constants/data'
import { HiArrowRight } from 'react-icons/hi'

export default function LeaderColumn() {
  return (
    <section className="section-padding">
      <div className="content-width">
        <h2 className="text-2xl md:text-3xl font-semibold text-text-main mb-10">
          {LEADER_COLUMNS.title}
        </h2>

        <div className="space-y-4">
          {LEADER_COLUMNS.columns.map((col, i) => (
            <a
              key={i}
              href="#"
              className="block border border-gray-200 rounded-xl p-5 hover:border-primary hover:shadow-md transition-all group"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <span className="inline-block text-xs text-primary font-medium bg-blue-50 px-2 py-0.5 rounded mb-2">
                    {col.category}
                  </span>
                  <h3 className="text-base font-medium text-text-main group-hover:text-primary transition-colors">
                    {col.title}
                  </h3>
                  <p className="mt-1 text-sm text-text-muted">{col.author}</p>
                </div>
                <HiArrowRight className="w-5 h-5 text-text-muted group-hover:text-primary transition-colors mt-1 shrink-0" />
              </div>
            </a>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a
            href={LEADER_COLUMNS.moreLink}
            className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
          >
            {LEADER_COLUMNS.moreText}
            <HiArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
