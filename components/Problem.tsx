const problems = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
        <path d="M12 9v4" /><path d="M12 17h.01" />
      </svg>
    ),
    iconBg: '#FFF7ED',
    iconColor: '#FB923C',
    dot: { color: '#EF4444', position: 'top' as const },
    bar: { color: '#FB923C', width: '33%' },
    title: '항공 안전 리스크,\n보이지 않는 피로에서 시작됩니다',
    items: [
      '인적오류는 항공사고의 주요 원인 중 하나이며, 그 중심에는 피로가 있습니다.',
      '장거리 운항, 시차, 야간 비행이 반복되면서 규정 내 운항이라도 피로는 계속 누적됩니다.',
      '최근 승무원 기내 실신 사례는 현재 관리 방식의 한계를 보여줍니다.',
    ],
    bold: 2,
    offset: false,
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
    iconBg: '#EFF6FF',
    iconColor: '#0066FF',
    dot: null,
    bar: { color: '#0066FF', width: '66%' },
    title: '피로는 쌓이지만,\n현재 시스템으로는 보이지 않습니다',
    items: [
      '현재 피로 관리는 비행시간 규제와 자기 보고에 의존합니다.',
      '하지만 개인의 생체 리듬, 수면의 질, 시차 누적은 이 방식으로는 측정되지 않습니다.',
      '관리자는 실제 컨디션을 파악할 수 없고, 리스크는 사전에 대응되지 못합니다.',
    ],
    bold: 2,
    offset: true,
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
    iconBg: '#F8FAFC',
    iconColor: '#64748B',
    dot: null,
    bar: { color: '#CBD5E1', width: '50%' },
    title: 'FRMS는 요구되지만,\n실제 운영은 제한적입니다',
    items: [
      '국토교통부와 ICAO는 피로위험관리시스템(FRMS) 도입을 권고하며 관련 제도적 기반도 마련되어 있습니다.',
      '하지만 실제 운영 단계까지 도입한 항공사는 많지 않습니다.',
      '데이터 없는 피로 관리는 안전과 경쟁력 모두에서 공백을 만들고 있습니다.',
    ],
    bold: 2,
    offset: false,
  },
]

export default function Problem() {
  return (
    <section
      id="problem"
      className="py-20 md:py-28 relative overflow-hidden"
      style={{
        background: '#F9FAFB',
        backgroundImage: 'radial-gradient(circle at 2px 2px, #E5E7EB 1px, transparent 0)',
        backgroundSize: '48px 48px',
      }}
    >
      {/* glows */}
      <div className="absolute top-[8%] left-[4%] w-[400px] h-[400px] rounded-full pointer-events-none" style={{ background: 'rgba(93,169,233,.06)', filter: 'blur(120px)' }} />
      <div className="absolute bottom-[8%] right-[4%] w-[300px] h-[300px] rounded-full pointer-events-none" style={{ background: 'rgba(255,159,106,.06)', filter: 'blur(100px)' }} />

      <div className="max-w-7xl mx-auto px-5 md:px-10 relative z-10">
        {/* header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-100 rounded-full mb-6 md:mb-8 shadow-sm">
            <div className="w-2 h-2 rounded-full bg-brand-primary" />
            <span className="text-[12px] font-bold text-brand-primary uppercase tracking-widest">Problem</span>
          </div>
          {/*<h2 className="text-3xl md:text-5xl font-bold tracking-tight text-tx-primary mb-5 md:mb-6 leading-tight break-keep">*/}
          {/*  비행 안전의 가장 큰 위협,<br />*/}
          {/*  <span className="text-brand-primary font-medium">관리되지 않는 피로</span>*/}
          {/*</h2>*/}
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-tx-primary mb-5 md:mb-6 leading-tight break-keep">
            안전을 위협하는 <br className="md:hidden" />
            가장 조용한 리스크,
            <span className="block mt-1 md:mt-3 text-brand-primary font-extrabold">
              관리되지 않는 피로
            </span>
          </h2>
          <div className="w-12 h-1 bg-slate-200 rounded-full mx-auto" />
        </div>

        {/* cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {problems.map((p, i) => (
            <div
              key={i}
              className={`bg-white rounded-[24px] md:rounded-[2rem] p-6 md:p-10 border border-slate-100 shadow-card hover:shadow-float transition-all duration-500 flex flex-col group ${p.offset ? 'md:translate-y-10' : ''}`}
            >
              {/* icon */}
              <div
                className="w-14 h-14 md:w-16 md:h-16 rounded-[20px] md:rounded-3xl flex items-center justify-center mb-7 md:mb-10 relative transition-transform group-hover:scale-105"
                style={{ background: p.iconBg, color: p.iconColor }}
              >
                {p.icon}
                {p.dot && (
                  <div
                    className="absolute -top-1 -right-1 w-4 h-4 rounded-full border-4 border-white shadow-sm"
                    style={{ background: p.dot.color }}
                  />
                )}
              </div>

              {/* title */}
              <h3 className="text-xl md:text-2xl font-bold text-tx-primary mb-4 leading-snug break-keep whitespace-pre-line">
                {p.title}
              </h3>

              {/* progress bar */}
              <div className="w-full h-1.5 bg-slate-50 rounded-full mb-6 overflow-hidden">
                <div className="h-full rounded-full" style={{ background: p.bar.color, width: p.bar.width }} />
              </div>

              {/* body text */}
              <div className="space-y-3 text-sm md:text-base text-tx-secondary leading-relaxed break-keep flex-1">
                {p.items.map((text, j) => (
                  <p key={j} className={j === p.bold ? 'font-semibold text-tx-primary' : ''}>
                    {text}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
