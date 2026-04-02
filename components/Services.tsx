const services = [
  {
    num: '01',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
    dot: { color: '#10B981', position: 'top' as const },
    title: '실시간 생체 데이터로,\n컨디션을 숫자로 확인합니다',
    desc: '웨어러블 디바이스를 통해 심박수, 산소포화도, 수면 패턴을 지속 수집하고 비행 전·중·후 데이터를 하나의 플랫폼에 통합합니다.',
    mini: (
      <div className="border border-slate-100 rounded-2xl p-4 mb-6 h-24 flex flex-col justify-between relative overflow-hidden">
        <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(#d1d5db 1px,transparent 1px)', backgroundSize: '8px 8px' }} />
        <div className="flex justify-between items-center relative z-10">
          <span className="text-[10px] font-mono font-bold text-tx-tertiary uppercase tracking-widest">Live Vitals Sync</span>
          <span className="text-[10px] font-mono font-bold text-status-safe flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-status-safe" />ACTIVE
          </span>
        </div>
        <div className="relative z-10 h-8 flex items-center">
          <svg className="w-full h-full" viewBox="0 0 100 20" preserveAspectRatio="none">
            <polyline points="0,10 15,10 20,4 25,16 30,10 45,10 50,6 55,14 60,10 100,10" fill="none" stroke="#4377FA" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    ),
    bullets: [
      '심박수(HR), HRV, 산소포화도, 체온, 수면 단계 수집',
      '1분 단위 연속 측정 및 비행 전후 자동 동기화',
      '개인별 정상 기준 대비 편차 기반 이상 감지',
    ],
  },
  {
    num: '02',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
    dot: null,
    title: '스케줄은 사람이 아니라,\n데이터가 결정합니다',
    desc: '피로 위험 점수, 자격 요건, 법정 휴식 시간까지 모두 반영해 AI가 스케줄을 자동 최적화합니다. 결원이 발생하기 전에 예측하고 필요한 인력을 즉시 추천합니다.',
    mini: (
      <div className="border border-slate-100 rounded-2xl p-4 mb-6 h-24 flex flex-col justify-between">
        <div className="flex justify-between items-center mb-1">
          <span className="text-[10px] font-mono font-bold text-tx-tertiary uppercase tracking-widest">AI Optimization</span>
          <span className="text-[10px] font-mono font-bold text-brand-primary">99.8% FIT</span>
        </div>
        <div className="space-y-2.5">
          <div className="flex items-center gap-2">
            <span className="text-[9px] font-mono text-tx-tertiary w-8">SEC 1</span>
            <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden flex">
              <div className="h-full bg-brand-primary" style={{ width: '45%' }} />
              <div className="h-full bg-cyan-400" style={{ width: '20%' }} />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[9px] font-mono text-tx-tertiary w-8">SEC 2</span>
            <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden">
              <div className="h-full bg-status-safe rounded-full" style={{ width: '75%' }} />
            </div>
          </div>
        </div>
      </div>
    ),
    bullets: [
      '규정 위반 사전 감지 및 자동 경보',
      '수요 변동 시나리오별 인력 배치 시뮬레이션',
      '결원 발생 전 대체 인력 자동 추천 및 즉시 알림',
    ],
  },
  {
    num: '03',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M12 8v4" /><path d="M12 16h.01" />
      </svg>
    ),
    dot: { color: '#22D3EE', position: 'bottom' as const },
    title: "이상 징후는 '발생 후'가 아니라\n'발생 전에' 대응합니다",
    desc: '생체 데이터의 작은 변화도 놓치지 않고 이상 징후를 조기에 감지해 즉시 대응합니다. 운항 중 리스크를 줄이는 가장 빠른 방법은 사전에 아는 것입니다.',
    mini: (
      <div className="border rounded-2xl p-4 mb-6 h-24 flex flex-col justify-center" style={{ background: 'rgba(67,119,250,.04)', borderColor: '#EBF1FF' }}>
        <div className="flex gap-3 items-start">
          <div className="text-brand-primary mt-0.5 flex-shrink-0">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
              <line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[10px] font-mono font-bold text-brand-primary uppercase tracking-widest">Predictive Alert</span>
              <span className="text-[10px] font-mono font-bold text-orange-400">T-24H</span>
            </div>
            <div className="text-xs text-tx-secondary leading-snug">Elevated fatigue risk detected. Auto-recommending rest allocation.</div>
          </div>
        </div>
      </div>
    ),
    bullets: [
      'LSTM 기반 24~72시간 피로 위험도 예측',
      '이상 감지 시 즉시 관리자 알림 및 대응 프로토콜 실행',
      '의료팀 연계 및 대응 프로세스 자동화',
      'FRMS 이행 데이터 자동 기록 및 리포트 생성',
    ],
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28 grid-bg-dark text-white relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none opacity-5 select-none hidden lg:block" style={{ top: -40 }}>
        <span className="text-[160px] font-black leading-none tracking-widest">CREW AI</span>
      </div>

      <div className="max-w-7xl mx-auto px-5 md:px-10 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          {/*<h2 className="mx-auto max-w-[320px] md:max-w-4xl text-[30px] sm:text-[34px] md:text-4xl font-bold tracking-[-0.03em] text-white leading-[1.28] md:leading-[1.25] break-keep">*/}
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white leading-snug break-keep">
            CREW AI의{" "}
            <br className="hidden md:block" />
            세 가지 리스크 차단 전략
          </h2>
          {/*<h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white leading-snug break-keep">*/}
          {/*  CREW AI는 세 가지 방식으로<br />리스크를 사전에 차단합니다*/}
          {/*</h2>*/}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {services.map((s) => (
            <div key={s.num} className="bg-white rounded-[24px] md:rounded-[2rem] p-6 md:p-10 shadow-float flex flex-col text-tx-primary">
              {/* header row */}
              <div className="flex justify-between items-start mb-6 md:mb-8 gap-4">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-[18px] md:rounded-[20px] bg-brand-light flex items-center justify-center text-brand-primary relative">
                  {s.icon}
                  {s.dot && (
                    <div
                      className="absolute w-3.5 h-3.5 rounded-full border-[3px] border-white"
                      style={{
                        background: s.dot.color,
                        top: s.dot.position === 'top' ? -4 : 'auto',
                        bottom: s.dot.position === 'bottom' ? -4 : 'auto',
                        right: -4,
                      }}
                    />
                  )}
                </div>
                <span className="font-bold text-4xl md:text-6xl text-slate-100 tracking-tighter select-none">{s.num}</span>
              </div>

              <h3 className="text-xl font-bold text-tx-primary mb-3 leading-snug break-keep whitespace-pre-line">{s.title}</h3>
              <p className="text-sm text-tx-secondary leading-relaxed break-keep mb-6 flex-1">{s.desc}</p>

              {s.mini}

              <div className="h-px w-full bg-slate-100 mb-5" />

              <ul className="space-y-3">
                {s.bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-sm bg-brand-primary rotate-45 flex-shrink-0" />
                    <span className="text-xs text-tx-secondary leading-relaxed">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
