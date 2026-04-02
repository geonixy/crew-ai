const effects = [
  {
    num: '01', col: 'md:col-span-2',
    icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 12 2 2 4-4" /></svg>,
    dot: { color: '#10B981', pos: 'top' as const },
    title: '안전', sub: '더 이상 감에 의존하지 않습니다',
    desc: '데이터 기반 건강 관리로 기내 안전 수행 능력 향상',
    mini: (
      <div className="border border-slate-100 rounded-2xl p-4 h-24 flex flex-col justify-between">
        <div className="flex justify-between items-center">
          <span className="text-[10px] font-mono font-bold text-tx-tertiary uppercase tracking-widest">Safety Index</span>
          <span className="text-[10px] font-mono font-bold text-status-safe flex items-center gap-1">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round"><path d="m18 15-6-6-6 6" /></svg>OPTIMAL
          </span>
        </div>
        <div>
          <div className="flex justify-between text-[10px] font-mono text-slate-400 mb-1.5">
            <span>READINESS</span><span className="text-tx-primary font-bold">99.9%</span>
          </div>
          <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
            <div className="h-full bg-status-safe rounded-full" style={{ width: '95%' }} />
          </div>
        </div>
      </div>
    ),
  },
  {
    num: '02', col: 'md:col-span-2',
    icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"><rect width="16" height="10" x="2" y="7" rx="2" ry="2" /><line x1="22" x2="22" y1="11" y2="13" /></svg>,
    dot: null,
    title: '피로', sub: '보이지 않던 피로를 줄입니다',
    desc: 'Standby 대기 최적화로 불필요한 피로 감소, 만족도 향상',
    mini: (
      <div className="border border-slate-100 rounded-2xl p-4 h-24 flex flex-col justify-between relative overflow-hidden">
        <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(#d1d5db 1px,transparent 1px)', backgroundSize: '8px 8px' }} />
        <div className="flex justify-between items-center relative z-10">
          <span className="text-[10px] font-mono font-bold text-tx-tertiary uppercase tracking-widest">Fatigue Level</span>
          <span className="text-[10px] font-mono font-bold text-brand-primary">↓ Reduced</span>
        </div>
        <div className="relative z-10 w-full h-10 flex items-end justify-between px-1">
          {[80,75,60,55,40,30,25].map((h, i) => (
            <div key={i} className="w-1.5 rounded-t-sm" style={{ height: `${h}%`, background: i < 3 ? '#CBD5E1' : i < 5 ? '#EBF1FF' : '#0066FF' }} />
          ))}
        </div>
      </div>
    ),
  },
  {
    num: '03', col: 'md:col-span-2',
    icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>,
    dot: null,
    title: '정시성', sub: '결원 대응 속도가 바뀝니다',
    desc: '신속한 인력 투입으로 지연·결항 최소화',
    mini: (
      <div className="border border-slate-100 rounded-2xl p-4 h-24 flex flex-col justify-between">
        <div className="flex justify-between items-center">
          <span className="text-[10px] font-mono font-bold text-tx-tertiary uppercase tracking-widest">Response Time</span>
          <span className="text-[10px] font-mono font-bold text-brand-primary">MINIMIZED</span>
        </div>
        <div className="space-y-2">
          <div className="flex items-center gap-3"><span className="text-[9px] font-mono text-slate-400 w-6">PREV</span><div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden"><div className="h-full bg-slate-300 rounded-full" style={{ width: '85%' }} /></div></div>
          <div className="flex items-center gap-3"><span className="text-[9px] font-mono text-brand-primary font-bold w-6">AI</span><div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden"><div className="h-full bg-brand-primary rounded-full" style={{ width: '15%' }} /></div></div>
        </div>
      </div>
    ),
  },
  {
    num: '04', col: 'md:col-span-2 md:col-start-2',
    icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>,
    dot: { color: '#22D3EE', pos: 'bottom' as const },
    title: '운영 효율', sub: '의사결정이 빨라집니다',
    desc: '실시간 데이터 기반 대응으로 운영 효율 개선',
    mini: (
      <div className="border border-slate-100 rounded-2xl p-4 h-24 flex flex-col justify-between">
        <div className="flex justify-between items-center">
          <span className="text-[10px] font-mono font-bold text-tx-tertiary uppercase tracking-widest">Decision Process</span>
          <span className="text-[10px] font-mono font-bold text-cyan-500 flex items-center gap-1.5"><span className="w-1.5 h-1.5 bg-cyan-500 rounded-full" />REAL-TIME</span>
        </div>
        <div className="flex items-center justify-between px-2">
          {['#0066FF','#22D3EE','#10B981'].map((c, i) => (
            <div key={i} className="contents">
              <div className="w-3 h-3 rounded-full border-2 border-white shadow-sm" style={{ background: c }} />
              {i < 2 && <div className="flex-1 h-px" style={{ background: `linear-gradient(90deg,${c},${['#22D3EE','#10B981'][i]})` }} />}
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    num: '05', col: 'md:col-span-2',
    icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>,
    dot: null,
    title: '신뢰', sub: '고객이 체감하는 변화',
    desc: '안전성과 정시성 향상 → 항공사 신뢰도 상승',
    mini: (
      <div className="border rounded-2xl p-4 h-24 flex flex-col justify-between" style={{ background: 'rgba(67,119,250,.04)', borderColor: '#EBF1FF' }}>
        <div className="flex justify-between items-center">
          <span className="text-[10px] font-mono font-bold text-brand-primary uppercase tracking-widest">Brand Trust Score</span>
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <svg key={i} width="11" height="11" viewBox="0 0 24 24" fill="#4377FA"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
            ))}
          </div>
        </div>
        <div className="flex items-end justify-between w-full h-8 px-1">
          {[30,45,60,50,75,85,100].map((h, i) => (
            <div key={i} className="w-2 rounded-t-sm" style={{ height: `${h}%`, background: i < 2 ? '#BFDBFE' : i < 4 ? '#93C5FD' : '#4377FA' }} />
          ))}
        </div>
      </div>
    ),
  },
]

export default function Effect() {
  return (
    <section id="effect" className="py-20 md:py-28 grid-bg-dark text-white">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="text-center mb-12 md:mb-16">
          <div className="mb-4 flex justify-center">
            <span
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-brand-glow font-mono text-sm tracking-[0.2em] uppercase font-bold"
              style={{ background: 'rgba(34,211,238,.08)', border: '1px solid rgba(34,211,238,.24)' }}
            >
              <span
                className="w-2 h-2 rounded-full"
                style={{ background: '#22D3EE', boxShadow: '0 0 10px rgba(34,211,238,.65)' }}
              />
              Effect
            </span>
          </div>
          {/*<h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">시스템 도입이 가져올 5가지 변화</h2>*/}
          {/*<p className="text-slate-400 text-lg font-medium">운영 효율의 차이가 안전한 결과로 이어집니다</p>*/}
            <h2 className="text-[28px] md:text-5xl font-bold tracking-tight text-white mb-4 leading-[1.3] break-keep">
                시스템 도입이 가져올 <br className="md:hidden" />
                <span className="text-brand-secondary">5가지 변화</span>
            </h2>

            <p className="max-w-[260px] md:max-w-none mx-auto text-base md:text-xl text-slate-400 font-medium leading-relaxed break-keep">
                운영 효율의 차이가 <br className="md:hidden" />
                안전한 결과로 이어집니다
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-6 md:gap-8">
          {effects.map((e) => (
            <div key={e.num} className={`${e.col} bg-white rounded-[24px] md:rounded-[2rem] p-6 md:p-10 shadow-float flex flex-col text-tx-primary`}>
              <div className="flex justify-between items-start mb-5 md:mb-6 gap-4">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-[18px] md:rounded-[20px] bg-brand-light flex items-center justify-center text-brand-primary relative">
                  {e.icon}
                  {e.dot && (
                    <div
                      className="absolute w-3.5 h-3.5 rounded-full border-[3px] border-white"
                      style={{ background: e.dot.color, top: e.dot.pos === 'top' ? -4 : 'auto', bottom: e.dot.pos === 'bottom' ? -4 : 'auto', right: -4 }}
                    />
                  )}
                </div>
                <span className="font-bold text-4xl md:text-6xl text-slate-100 tracking-tighter select-none">{e.num}</span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-tx-primary mb-1">{e.title}</h3>
              <h4 className="text-sm md:text-base font-semibold text-brand-primary mb-3 break-keep">{e.sub}</h4>
              <p className="text-sm text-tx-secondary leading-relaxed break-keep mb-6 flex-1">{e.desc}</p>
              {e.mini}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
