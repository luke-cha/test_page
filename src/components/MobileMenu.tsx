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
      {open && (
        <div
          className="fixed inset-0 bg-black/20 z-50"
          onClick={onClose}
        />
      )}

      <div
        className={`fixed top-0 right-0 h-full w-[80vw] max-w-[360px] bg-surface z-50 shadow-xl transform transition-transform duration-300 ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-5 border-b border-border-light">
          <span className="text-base font-bold text-text-primary">메뉴</span>
          <button onClick={onClose} aria-label="메뉴 닫기" className="p-1 text-text-muted">
            <HiX className="w-5 h-5" />
          </button>
        </div>

        <nav className="p-5 overflow-y-auto h-[calc(100%-61px)]">
          {NAV_MENU.map((item, idx) => (
            <div key={item.label} className="mb-1">
              <button
                onClick={() => toggleExpand(idx)}
                className="flex items-center justify-between w-full py-3 text-sm font-medium text-text-primary"
              >
                {item.label}
                {expandedIndex === idx ? (
                  <HiChevronUp className="w-4 h-4 text-text-muted" />
                ) : (
                  <HiChevronDown className="w-4 h-4 text-text-muted" />
                )}
              </button>
              {expandedIndex === idx && item.subItems && (
                <div className="pl-3 pb-2">
                  {item.subItems.map((sub) => (
                    <a
                      key={sub.label}
                      href={sub.href}
                      className="block py-2 text-sm text-text-secondary hover:text-text-primary transition-colors"
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
