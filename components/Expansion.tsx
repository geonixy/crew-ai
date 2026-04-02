const industries = [
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="3" width="16" height="16" rx="2" ry="2" /><path d="M4 11h16" /><path d="M12 3v8" /></svg>,
    title: '철도 산업',
    desc: '기관사 및 관제사의 피로도 모니터링 및 교대 스케줄 최적화',
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="M12 8v8" /><path d="M8 12h8" /></svg>,
    title: '해운 산업',
    desc: '장기간 해상 근무자의 생체 데이터 통합 및 건강 이상 사전 감지',
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>,
    title: '의료 산업',
    desc: '응급실 및 3교대 의료진의 컨디션 관리 및 인력 공백 예방',
  },
]

export default function Expansion() {
  return (
    <section id="expansion" className="py-20 md:py-28 grid-bg-light relative overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: 'rgba(0,102,255,.05)', filter: 'blur(100px)' }} />

      <div className="max-w-7xl mx-auto px-5 md:px-10 relative z-10">
        {/* header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 shadow-sm" style={{ background: 'rgba(0,102,255,.04)', border: '1px solid rgba(0,102,255,.1)' }}>
            <div className="w-2 h-2 rounded-full bg-brand-primary" style={{ boxShadow: '0 0 8px rgba(0,102,255,.6)' }} />
            <span className="text-xs font-mono font-bold text-brand-primary uppercase tracking-widest">Expansion</span>
          </div>
          {/*<h2 className="text-3xl md:text-5xl font-bold tracking-tight text-tx-primary leading-snug break-keep">*/}
          {/*  하나의 시스템,<br />더 넓은 적용*/}
          {/*</h2>*/}
          {/*<h2 className="text-3xl md:text-5xl font-bold tracking-tight text-tx-primary mb-4 md:mb-5 leading-snug break-keep">*/}
          {/*  /!*데이터부터 운영까지,<br />하나의 흐름으로 연결됩니다*!/*/}
          {/*  하나의 시스템으로 실현하는{" "}*/}
          {/*  <br className="hidden md:block" />*/}
          {/*  압도적인 운영 확장성*/}
          {/*</h2>*/}
          <h2 className="mx-auto max-w-[300px] md:max-w-4xl text-[28px] md:text-5xl font-bold tracking-tight text-tx-primary leading-[1.3] md:leading-tight break-keep text-center">
            단 하나의 시스템, <br className="md:hidden" />
            {/* '단 하나'를 추가해 시스템의 강력함을 강조 */}
            <span className="text-brand-primary">무한한 운영 확장성</span>
          </h2>
        </div>

        {/* 내부 확장 */}
        <div className="card-hover group bg-white rounded-[24px] md:rounded-[28px] p-6 md:p-12 border border-slate-200 shadow-card relative flex flex-col lg:flex-row gap-8 md:gap-12 items-center mb-8 md:mb-10">
          <div className="top-accent absolute top-0 left-0 right-0 h-1.5 rounded-t-[28px] opacity-0" style={{ background: 'linear-gradient(90deg,#0066FF,#00D4FF)' }} />

          {/* text */}
          <div className="lg:w-1/2 w-full space-y-4 md:space-y-5">
            <div className="flex items-center gap-2 text-brand-primary font-mono font-bold text-sm tracking-widest uppercase">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}><circle cx="12" cy="12" r="10" /><line x1="12" y1="16" x2="12" y2="12" /><line x1="12" y1="8" x2="12.01" y2="8" /></svg>
              내부 확장
            </div>
            <h3 className="text-xl md:text-3xl font-bold text-tx-primary leading-snug break-keep">
              CREW AI는 승무원에서 시작하지만,<br />
              <span className="gradient-text">항공사의 모든 인력</span>으로 확장됩니다
            </h3>
            <div className="text-base text-tx-secondary leading-relaxed break-keep space-y-3">
              <p>항공 정비사 · 운항관리사 등 교대 근무와 안전 리스크가 존재하는 전 직군에 적용 가능합니다.</p>
              <p>부서별로 파편화된 데이터를 하나로 연결하여 <strong className="text-tx-primary">전사 통합 안전 관리 체계</strong>를 구축합니다.</p>
            </div>
          </div>

          {/* visual */}
          <div className="lg:w-1/2 w-full bg-slate-50/50 rounded-2xl border border-slate-100 p-5 md:p-8 dot-bg flex items-center justify-center min-h-[240px] md:min-h-[280px]">
            <div className="flex flex-col sm:flex-row items-center gap-6 md:gap-8 w-full max-w-md">
              {/* core badge */}
              <div className="flex-shrink-0">
                <div className="w-24 h-24 rounded-2xl p-0.5" style={{ background: 'linear-gradient(135deg,#0066FF,#00D4FF)', boxShadow: '0 0 24px rgba(0,102,255,.18)' }}>
                  <div className="w-full h-full bg-white rounded-[14px] flex flex-col items-center justify-center gap-1">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0066FF" strokeWidth={2}>
                      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                    </svg>
                    <span className="text-[10px] font-mono font-bold text-brand-primary">CORE</span>
                  </div>
                </div>
              </div>
              {/* expansion nodes */}
              <div className="flex flex-col gap-3 w-full">
                <div className="bg-white border-2 border-brand-primary rounded-xl p-4 shadow-sm">
                  <h5 className="text-sm font-bold text-brand-primary mb-1">승무원 (Flight Crew)</h5>
                  <div className="flex justify-between items-center">
                    <p className="text-xs font-mono text-tx-secondary">현재 적용 중</p>
                    <span className="w-1.5 h-1.5 bg-status-safe rounded-full animate-pulse-dot" />
                  </div>
                </div>
                {[
                  { title: '항공 정비사 (Maintenance)', label: '전사 확장 적용' },
                  { title: '운항관리사 (Dispatchers)', label: '전사 확장 적용' },
                ].map((item) => (
                  <div key={item.title} className="bg-white/80 border border-slate-200 rounded-xl p-4 hover:border-brand-primary/40 transition-colors">
                    <h5 className="text-sm font-bold text-tx-primary mb-1">{item.title}</h5>
                    <p className="text-xs font-mono text-slate-400">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* middle banner */}
        <div className="bg-white border-2 rounded-[24px] md:rounded-3xl p-5 md:p-6 flex items-center justify-center mb-8 md:mb-10 relative overflow-hidden" style={{ borderColor: 'rgba(0,102,255,.2)' }}>
          <div className="absolute inset-0" style={{ background: 'linear-gradient(90deg,rgba(0,102,255,.03),rgba(0,212,255,.06),rgba(0,102,255,.03))' }} />
          <div className="flex items-center justify-center z-10 text-center">
            <h4 className="max-w-[260px] md:max-w-none text-lg md:text-2xl font-bold text-tx-primary tracking-tight leading-[1.4] break-keep">
              조직 전체의 리스크를{" "}
              <br className="md:hidden" />
              <span className="text-brand-primary relative inline-block">
                하나로 관리합니다.
              </span>
            </h4>
          </div>
        </div>

        {/* 산업 확장 */}
        <div className="card-hover group bg-white rounded-[24px] md:rounded-[28px] p-6 md:p-12 border border-slate-200 shadow-card relative flex flex-col lg:flex-row gap-8 md:gap-12">
          <div className="top-accent absolute top-0 left-0 right-0 h-1.5 rounded-t-[28px] opacity-0" style={{ background: 'linear-gradient(90deg,#0066FF,#00D4FF)' }} />

          <div className="lg:w-5/12 w-full flex flex-col justify-center space-y-4 md:space-y-5">
            <div className="flex items-center gap-2 text-brand-primary font-mono font-bold text-sm tracking-widest uppercase">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}><polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" /></svg>
              산업 확장
            </div>
            <h3 className="text-xl md:text-3xl font-bold text-tx-primary leading-snug break-keep">
              이 구조는 <span className="gradient-text">항공에만</span><br />적용되지 않습니다
            </h3>
            <div className="text-base text-tx-secondary leading-relaxed break-keep space-y-3">
              <p>"교대 근무 + 안전 리스크"가 존재하는 모든 산업에 즉시 적용될 수 있습니다.</p>
              <p>스마트 헬스 데이터를 기반으로 한 <strong className="text-tx-primary">근로자 안전 관리 구조</strong>의 새로운 표준을 제시합니다.</p>
            </div>
          </div>

          <div className="lg:w-7/12 w-full grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
            {industries.map((ind) => (
              <div
                key={ind.title}
                className="bg-surface-base rounded-[20px] p-6 border border-slate-200 hover:border-brand-primary/40 hover:bg-white hover:shadow-card transition-all duration-300 group/card flex flex-col"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-100 group-hover/card:bg-brand-light flex items-center justify-center text-slate-500 group-hover/card:text-brand-primary mb-5 transition-colors">
                  {ind.icon}
                </div>
                <h4 className="text-base font-bold text-tx-primary mb-2">{ind.title}</h4>
                <p className="text-xs text-tx-secondary leading-relaxed break-keep mb-4 flex-1">{ind.desc}</p>
                <div className="flex items-center gap-2 opacity-0 group-hover/card:opacity-100 transition-opacity">
                  <span className="text-[10px] font-mono text-brand-primary font-bold tracking-widest uppercase">Expandable</span>
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#0066FF" strokeWidth={2}><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
