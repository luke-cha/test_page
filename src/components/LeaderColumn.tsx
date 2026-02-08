import { LEADER_COLUMNS } from '../constants/data'
import { HiArrowRight } from 'react-icons/hi'

export default function LeaderColumn() {
  return (
    <section className="card p-6 md:p-8">
      <p className="text-base font-semibold text-text-primary mb-5">
        {LEADER_COLUMNS.title}
      </p>

      <div className="space-y-0">
        {LEADER_COLUMNS.columns.map((col, i) => (
          <a
            key={i}
            href="#"
            className="flex items-center justify-between py-3.5 group"
            style={i < LEADER_COLUMNS.columns.length - 1 ? { borderBottom: '1px solid #F0F0F0' } : {}}
          >
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs text-mint-600 font-medium bg-mint-50 px-2 py-0.5 rounded-full">
                  {col.category}
                </span>
                <span className="text-xs text-text-muted">{col.author}</span>
              </div>
              <p className="text-sm text-text-primary group-hover:text-mint-600 transition-colors truncate">
                {col.title}
              </p>
            </div>
            <HiArrowRight className="w-4 h-4 text-text-muted group-hover:text-mint-600 transition-colors shrink-0 ml-3" />
          </a>
        ))}
      </div>

      <div className="mt-4 text-center">
        <a
          href={LEADER_COLUMNS.moreLink}
          className="text-sm text-text-muted hover:text-text-primary transition-colors"
        >
          {LEADER_COLUMNS.moreText} →
        </a>
      </div>
    </section>
  )
}
