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
  home: <HiHome className="w-4 h-4" />,
  kakao: <RiKakaoTalkFill className="w-4 h-4" />,
  youtube: <FaYoutube className="w-4 h-4" />,
  blog: <FaBlog className="w-4 h-4" />,
  instagram: <FaInstagram className="w-4 h-4" />,
}

export default function Footer() {
  const { contact } = FOOTER

  return (
    <footer className="content-width px-5 md:px-8 pb-10 pt-2">
      <div className="card p-6 md:p-8 space-y-5">
        <span className="text-sm font-bold text-text-primary">바른길세무회계</span>

        <div className="divider" />

        {/* Contact info */}
        <div className="space-y-2.5 text-sm">
          <div className="flex items-center gap-2.5 text-text-secondary">
            <HiPhone className="w-4 h-4 text-text-muted shrink-0" />
            <span className="font-medium text-text-primary">T {contact.phone}</span>
          </div>
          <div className="flex items-center gap-2.5 text-text-secondary">
            <FaFax className="w-4 h-4 text-text-muted shrink-0" />
            <span>F {contact.fax}</span>
          </div>
          <div className="flex items-center gap-2.5 text-text-secondary">
            <HiPhone className="w-4 h-4 text-text-muted shrink-0" />
            <span>M {contact.mobile}</span>
          </div>
          <div className="flex items-center gap-2.5 text-text-secondary">
            <HiMail className="w-4 h-4 text-text-muted shrink-0" />
            <a
              href={`mailto:${contact.email}`}
              className="hover:text-text-primary transition-colors"
            >
              {contact.email}
            </a>
          </div>
          <div className="flex items-start gap-2.5 text-text-secondary">
            <HiLocationMarker className="w-4 h-4 text-text-muted shrink-0 mt-0.5" />
            <span className="leading-relaxed">{contact.address}</span>
          </div>
        </div>

        <div className="divider" />

        {/* Social links */}
        <div className="flex flex-wrap gap-2">
          {FOOTER.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-bg text-xs text-text-secondary hover:text-text-primary transition-colors"
              aria-label={link.label}
            >
              {iconMap[link.icon]}
              <span>{link.label}</span>
            </a>
          ))}
        </div>

        <div className="divider" />

        {/* Copyright */}
        <div className="space-y-1.5">
          <p className="text-xs text-text-muted">{FOOTER.copyright}</p>
          <p className="text-[11px] text-text-muted/70 leading-relaxed">
            {FOOTER.notice}
          </p>
        </div>
      </div>
    </footer>
  )
}
