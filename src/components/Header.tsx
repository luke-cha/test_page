import { useState } from 'react'
import { HiMenu } from 'react-icons/hi'
import { NAV_MENU } from '../constants/data'
import MobileMenu from './MobileMenu'

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      <header className="sticky top-0 z-50 bg-bg">
        <div className="page-width flex items-center justify-between h-14 px-5 md:px-8">
          <a href="/" className="text-base font-bold text-text-primary tracking-tight">
            바른길세무회계
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {NAV_MENU.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-text-secondary hover:text-text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-text-secondary"
            onClick={() => setMobileOpen(true)}
            aria-label="메뉴 열기"
          >
            <HiMenu className="w-5 h-5" />
          </button>
        </div>
      </header>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  )
}
