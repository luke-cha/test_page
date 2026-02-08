import { QUOTE_CARDS } from '../constants/data'

export default function QuoteCards() {
  return (
    <section className="card p-6 md:p-8">
      <p className="text-base font-semibold text-text-primary mb-5">
        {QUOTE_CARDS.title}
      </p>

      <div className="space-y-3">
        {QUOTE_CARDS.quotes.map((quote, i) => (
          <div
            key={i}
            className="flex items-start gap-3 p-4 rounded-2xl bg-bg"
          >
            <span className="text-mint-400 text-lg leading-none mt-0.5">"</span>
            <p className="text-sm text-text-secondary leading-relaxed">
              {quote}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
