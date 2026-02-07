import { FOOTER } from '../constants/data'
import {
  HiHome,
  HiPhone,
  HiMail,
  HiLocationMarker,
} from 'react-icons/hi'
import { FaFax } from 'react-icons/fa'
import {
  FaYoutube,
  FaInstagram,
  FaBlog,
} from 'react-icons/fa'
import { RiKakaoTalkFill } from 'react-icons/ri'

const iconMap: Record<string, React.ReactNode> = {
  home: <HiHome className="w-5 h-5" />,
  kakao: <RiKakaoTalkFill className="w-5 h-5" />,
  youtube: <FaYoutube className="w-5 h-5" />,
  blog: <FaBlog className="w-5 h-5" />,
  instagram: <FaInstagram className="w-5 h-5" />,
}

export default function Footer() {
  const { contact } = FOOTER

  return (
    <footer className="px-6 md:px-24 py-12 border-t border-gray-200">
      <div className="content-width space-y-8">
        {/* Contact info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-text-main">
              <HiPhone className="w-5 h-5 text-primary shrink-0" />
              <span className="text-base font-semibold">T {contact.phone}</span>
            </div>
            <div className="flex items-center gap-2 text-text-main">
              <FaFax className="w-5 h-5 text-primary shrink-0" />
              <span className="text-sm">F {contact.fax}</span>
            </div>
            <div className="flex items-center gap-2 text-text-main">
              <HiPhone className="w-5 h-5 text-primary shrink-0" />
              <span className="text-sm">M {contact.mobile}</span>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-2 text-text-main">
              <HiMail className="w-5 h-5 text-primary shrink-0" />
              <a
                href={`mailto:${contact.email}`}
                className="text-sm hover:text-primary transition-colors"
              >
                {contact.email}
              </a>
            </div>
            <div className="flex items-start gap-2 text-text-main">
              <HiLocationMarker className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <span className="text-sm leading-relaxed">{contact.address}</span>
            </div>
          </div>
        </div>

        {/* Social links */}
        <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-gray-100">
          {FOOTER.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-text-muted hover:text-primary transition-colors"
              aria-label={link.label}
            >
              {iconMap[link.icon]}
              <span>{link.label}</span>
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="space-y-2">
          <p className="text-sm text-text-muted">{FOOTER.copyright}</p>
          <p className="text-xs text-text-muted leading-relaxed">
            {FOOTER.notice}
          </p>
        </div>
      </div>
    </footer>
  )
}
