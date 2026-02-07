import { NEWS } from '../constants/data'
import { HiOutlineBookOpen, HiExternalLink } from 'react-icons/hi'

export default function NewsSection() {
  return (
    <section className="section-padding bg-bg-gray">
      <div className="content-width space-y-8">
        <h2 className="text-2xl md:text-3xl font-semibold text-text-main flex items-center gap-2">
          <span className="text-2xl">🔥</span> {NEWS.title}
        </h2>

        <div className="border border-gray-200 rounded-xl p-6 bg-white space-y-6">
          <div className="flex items-start gap-4">
            <HiOutlineBookOpen className="w-8 h-8 text-primary shrink-0 mt-1" />
            <div>
              <p className="text-base text-text-main leading-relaxed">
                {NEWS.description}
              </p>
              <a
                href={NEWS.ctaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 mt-3 text-sm font-medium text-primary hover:underline"
              >
                {NEWS.ctaText}
                <HiExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="border-t border-gray-100 pt-4">
            <p className="text-sm text-text-muted">{NEWS.videoText}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
