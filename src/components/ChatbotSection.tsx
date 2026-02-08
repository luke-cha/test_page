import { CHATBOT } from '../constants/data'
import { HiChat } from 'react-icons/hi'

export default function ChatbotSection() {
  return (
    <section className="rounded-3xl bg-mint-50 border border-mint-200 p-6 md:p-8">
      <div className="flex items-center gap-2.5 mb-2">
        <HiChat className="w-5 h-5 text-mint-600" />
        <p className="text-base font-semibold text-text-primary">
          {CHATBOT.title}
        </p>
      </div>

      <div className="divider my-4 !border-mint-200" />

      <p className="text-sm text-text-secondary mb-5">
        궁금한 점이 있으시면 언제든 챗봇으로 빠르게 상담받으세요.
      </p>

      <a href={CHATBOT.ctaLink} className="btn-dark">
        <HiChat className="w-4 h-4" />
        {CHATBOT.ctaText}
      </a>
    </section>
  )
}
