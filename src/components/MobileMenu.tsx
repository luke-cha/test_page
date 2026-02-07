import { useState } from 'react'
import { HiX, HiChevronDown, HiChevronUp } from 'react-icons/hi'
import { NAV_MENU } from '../constants/data'

interface MobileMenuProps {
  open: boolean
  onClose: () => void
}

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const toggleExpand = (idx: number) => {
    setExpandedIndex(expandedIndex === idx ? null : idx)
  }

  return (
    <>
      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-50 transition-opacity"
          onClick={onClose}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-[80vw] max-w-[400px] bg-white z-50 shadow-xl transform transition-transform duration-300 ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <span className="text-lg font-bold text-text-main">메뉴</span>
          <button onClick={onClose} aria-label="메뉴 닫기" className="p-1">
            <HiX className="w-6 h-6 text-text-main" />
          </button>
        </div>

        <nav className="p-6 overflow-y-auto h-[calc(100%-73px)]">
          {NAV_MENU.map((item, idx) => (
            <div key={item.label} className="mb-2">
              <button
                onClick={() => toggleExpand(idx)}
                className="flex items-center justify-between w-full py-3 text-base font-medium text-text-main hover:text-primary transition-colors"
              >
                {item.label}
                {expandedIndex === idx ? (
                  <HiChevronUp className="w-5 h-5" />
                ) : (
                  <HiChevronDown className="w-5 h-5" />
                )}
              </button>
              {expandedIndex === idx && item.subItems && (
                <div className="pl-4 pb-2">
                  {item.subItems.map((sub) => (
                    <a
                      key={sub.label}
                      href={sub.href}
                      className="block py-2 text-sm text-text-muted hover:text-primary transition-colors"
                      onClick={onClose}
                    >
                      {sub.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </>
  )
}
