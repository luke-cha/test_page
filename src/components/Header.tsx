import { useState } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'
import { NAV_MENU } from '../constants/data'
import MobileMenu from './MobileMenu'

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
        <div className="page-width flex items-center justify-between h-16 px-6 md:px-24">
          <a href="/" className="text-lg font-bold text-text-main tracking-tight">
            바른길세무회계
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_MENU.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-text-main hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-text-main"
            onClick={() => setMobileOpen(true)}
            aria-label="메뉴 열기"
          >
            <HiMenu className="w-6 h-6" />
          </button>
        </div>
      </header>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  )
}
