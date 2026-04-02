export default function Footer() {
  return (
    <>
      {/* ── Footer ── */}
      <footer className="py-8 md:py-10 border-t border-slate-800 grid-bg-dark">
        <div className="max-w-7xl mx-auto px-5 md:px-10 flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4 text-center md:text-left">
          <div className="flex items-center gap-3 font-bold text-base md:text-lg text-white">
            <div
              className="w-6 h-6 md:w-7 md:h-7 rounded-md flex items-center justify-center relative overflow-hidden"
              style={{ background: 'linear-gradient(135deg,#0066FF,#00D4FF)' }}
            >
              <div className="absolute w-full h-0.5 bg-white top-1/2 -translate-y-1/2" />
            </div>
            CREW AI
          </div>

          <p className="text-slate-500 text-xs md:text-sm font-mono">
            © 2026 4조참치 프로젝트. Crew Risk Evaluation &amp; Wellness Care AI.
          </p>

          <div className="flex gap-5 md:gap-6 text-sm text-slate-500">
            {['Contact'].map((link) => (
              <a key={link} href="#" className="hover:text-white transition-colors">{link}</a>
            ))}
          </div>
        </div>
      </footer>
    </>
  )
}
