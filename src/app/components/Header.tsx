import { Menu, Phone, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { siteConfig, navItems } from '../data/siteData';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // 모바일 메뉴 열림 시 스크롤 방지
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      {/* 모바일 메뉴 배경 Dim */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      <header
        className={`sticky top-0 z-50 border-b border-gray-200 transition-all duration-300 ${
          mobileMenuOpen
            ? 'bg-white backdrop-blur-[0px]'
            : 'bg-white/70 backdrop-blur-[10px] shadow-sm'
        }`}
      >
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <button
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setMobileMenuOpen(false);
              }}
              className="flex flex-col group cursor-pointer"
            >
              <img
                src={siteConfig.image.src}
                alt={siteConfig.image.alt}
                className="w-30 object-cover group-hover:opacity-80"
              />
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* CTA Button - Desktop */}
            <div className="hidden lg:block">
              <a
                href={`tel:${siteConfig.phone.replace(/[^0-9]/g, '')}`}
                className="bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2 duration-300 hover:shadow-lg hover:-translate-y-1 shadow-sm"
              >
                <Phone className="w-4 h-4" />
                {siteConfig.cta.primary}
              </a>
            </div>

            {/* Mobile: CTA + Menu */}
            <div className="flex lg:hidden items-center gap-3">
              <a
                href={`tel:${siteConfig.phone.replace(/[^0-9]/g, '')}`}
                className="bg-blue-600 text-white px-5 py-2.5 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2 duration-300 hover:shadow-lg hover:-translate-y-1 shadow-sm"
              >
                <Phone className="w-4 h-4" />
                {siteConfig.cta.short}
              </a>

              {/* Mobile menu button */}
              <button
                onClick={() => setMobileMenuOpen((prev) => !prev)}
                className="lg:hidden p-2 rounded-lg text-neutral-600 hover:text-neutral-800 hover:bg-neutral-50 transition-colors cursor-pointer"
                aria-label={mobileMenuOpen ? '메뉴 닫기' : '메뉴 열기'}
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu Overlay */}
          <div
            id="mobile-menu"
            className={`lg:hidden absolute left-0 right-0 top-full z-50 transition-all duration-300 ${
              mobileMenuOpen
                ? 'opacity-100 translate-y-0 pointer-events-auto'
                : 'opacity-0 -translate-y-2 pointer-events-none'
            }`}
          >
            <div className="border border-gray-200 bg-white">
              <nav className="flex flex-col gap-1 p-4">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="text-gray-700 hover:text-blue-600 hover:bg-gray-50 py-3 px-3 rounded-lg transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}