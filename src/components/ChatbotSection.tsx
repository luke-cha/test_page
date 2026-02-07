import { CHATBOT } from '../constants/data'
import { HiChat } from 'react-icons/hi'

export default function ChatbotSection() {
  return (
    <section className="section-padding">
      <div className="content-width">
        <h2 className="text-2xl md:text-3xl font-semibold text-text-main flex items-center gap-2 mb-6">
          <span className="text-2xl">💬</span> {CHATBOT.title}
        </h2>

        <a
          href={CHATBOT.ctaLink}
          className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary-light transition-colors"
        >
          <HiChat className="w-5 h-5" />
          {CHATBOT.ctaText}
        </a>
      </div>
    </section>
  )
}
