'use client'

import { useEffect, useState } from 'react'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const handleScroll = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault()
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300 ${
        scrolled ? 'border-slate-100 shadow-sm' : 'border-transparent'
      }`}
      style={{
        height: 72,
        background: 'rgba(255,255,255,0.85)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
      }}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-10 h-full flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 md:gap-3 font-bold text-lg md:text-xl tracking-tight text-tx-primary no-underline">
          <div
            className="w-7 h-7 md:w-8 md:h-8 rounded-md flex items-center justify-center relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg,#0066FF,#00D4FF)' }}
          >
            <div className="absolute w-full h-0.5 bg-white top-1/2 -translate-y-1/2" />
          </div>
          CREW AI
        </a>

        {/* Nav links */}
        <nav className="hidden md:flex gap-10 text-sm font-medium text-tx-secondary">
          {[
            { href: '#problem',   label: 'Problem' },
            { href: '#services',  label: 'Services' },
            { href: '#system',    label: 'System' },
            { href: '#effect',    label: 'Effect' },
            { href: '#expansion', label: 'Expansion' },
          ].map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={handleScroll(href)}
              className="hover:text-brand-primary transition-colors"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        {/*<div className="flex items-center gap-3">*/}
        {/*  <a*/}
        {/*    href="#cta"*/}
        {/*    onClick={handleScroll('#cta')}*/}
        {/*    className="hidden md:inline-flex px-4 py-2 rounded-lg text-sm font-semibold border border-slate-200 text-tx-primary hover:bg-slate-50 transition-colors"*/}
        {/*  >*/}
        {/*    Log in*/}
        {/*  </a>*/}
        {/*  <a*/}
        {/*    href="#cta"*/}
        {/*    onClick={handleScroll('#cta')}*/}
        {/*    className="inline-flex px-4 py-2 rounded-lg text-sm font-semibold text-white transition-all hover:-translate-y-0.5"*/}
        {/*    style={{ background: '#0066FF', boxShadow: '0 4px 12px rgba(0,102,255,.25)' }}*/}
        {/*  >*/}
        {/*    Request Demo*/}
        {/*  </a>*/}
        {/*</div>*/}
      </div>
    </header>
  )
}
