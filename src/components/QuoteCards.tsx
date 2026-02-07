import { QUOTE_CARDS } from '../constants/data'

export default function QuoteCards() {
  return (
    <section className="section-padding">
      <div className="content-width">
        <h2 className="text-2xl md:text-3xl font-semibold text-text-main mb-10">
          {QUOTE_CARDS.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {QUOTE_CARDS.quotes.map((quote, i) => (
            <div
              key={i}
              className="border border-gray-200 rounded-xl p-6 hover:border-primary hover:shadow-md transition-all"
            >
              <span className="text-4xl text-primary leading-none">"</span>
              <p className="mt-2 text-base text-text-main leading-relaxed">
                {quote}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
