export default function System() {
  return (
    <section id="system" className="py-20 md:py-28 grid-bg-light relative overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: 'rgba(0,102,255,.05)', filter: 'blur(100px)' }} />

      <div className="max-w-7xl mx-auto px-5 md:px-10 relative z-10">
        {/* header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-5 md:mb-6 shadow-sm" style={{ background: 'rgba(0,102,255,.04)', border: '1px solid rgba(0,102,255,.1)' }}>
            <div className="w-2 h-2 rounded-full bg-brand-primary" style={{ boxShadow: '0 0 8px rgba(0,102,255,.6)' }} />
            <span className="text-xs font-mono font-bold text-brand-primary uppercase tracking-widest">Data Pipeline</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-tx-primary mb-4 md:mb-5 leading-snug break-keep">
            {/*데이터부터 운영까지,<br />하나의 흐름으로 연결됩니다*/}
            데이터부터 운영까지,
            <br/>
            끊김 없는 연결
          </h2>
          <div
              className="inline-flex items-center justify-center gap-2 md:gap-3 flex-wrap px-4 md:px-5 py-2 md:py-2.5 rounded-full w-fit text-center"
              style={{
                background: 'rgba(0,102,255,.034)',
                border: '1px solid rgba(0,102,255,.14)',
              }}
          >
            <span className="text-brand-primary text-sm md:text-base font-semibold">데이터 수집</span>
            <span style={{ color: '#00D4FF' }}>→</span>
            <span className="text-brand-primary text-sm md:text-base font-semibold">통합</span>
            <span style={{ color: '#00D4FF' }}>→</span>
            <span className="text-brand-primary text-sm md:text-base font-semibold">분석</span>
            <span style={{ color: '#00D4FF' }}>→</span>
            <span className="text-brand-primary text-sm md:text-base font-semibold">운영</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 relative">
          {/* desktop arrows */}
          {[{ left: 'calc(33.333% - 24px)' }, { left: 'calc(66.666% - 24px)' }].map((pos, i) => (
            <div
              key={i}
              className="hidden lg:flex absolute top-1/2 z-20 items-center justify-center w-12 h-12 rounded-full bg-white border border-slate-200 shadow-sm text-brand-primary"
              style={{ ...pos, transform: 'translateY(-50%)' }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>
          ))}

          {/* ── Card 01 ── */}
          <div className="group card-hover bg-white rounded-[24px] md:rounded-[28px] p-6 md:p-10 border border-slate-200 shadow-card relative flex flex-col">
            <div className="top-accent absolute top-0 left-0 right-0 h-1.5 rounded-t-[28px] opacity-0" style={{ background: 'linear-gradient(90deg,#0066FF,#00D4FF)' }} />
            <div className="flex justify-between items-start mb-6 md:mb-8 gap-4">
              <div className="icon-wrap w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-blue-50/80 flex items-center justify-center text-brand-primary border border-blue-100/50">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
                  <line x1="12" y1="18" x2="12.01" y2="18" />
                  <path d="M12 14v-4" /><path d="M8 10h8" />
                </svg>
              </div>
              <span className="font-mono text-4xl md:text-5xl font-bold text-slate-100 select-none">01</span>
            </div>
            <h3 className="text-xl font-bold text-tx-primary mb-3">01. 데이터 수집 체계</h3>
            <p className="text-sm text-tx-secondary leading-relaxed break-keep mb-6">초기에는 충분한 데이터를 확보하고, 이후에는 필요한 순간에만 측정합니다. 정확도는 유지하면서 승무원의 부담은 줄입니다.</p>
            <div className="bg-slate-50/50 rounded-xl p-4 mb-6 border border-slate-100 dot-bg">
              <div className="flex justify-between mb-3">
                <span className="text-[10px] font-mono font-semibold text-slate-500 uppercase tracking-wider">Device Sync Status</span>
                <span className="text-[10px] font-mono font-bold text-status-safe flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-status-safe rounded-full animate-pulse-dot" />ACTIVE
                </span>
              </div>
              <svg viewBox="0 0 100 20" className="w-full" style={{ height: 20 }}>
                <path d="M0 10 L10 10 L15 2 L25 18 L30 10 L45 10 L50 5 L55 15 L60 10 L100 10" fill="none" stroke="#0066FF" strokeWidth={1.5} strokeLinejoin="round" opacity={0.6} />
              </svg>
            </div>
            <div className="h-px w-full bg-slate-100 mb-5 mt-auto" />
            <div className="space-y-3">
              {[
                { title: '초기 집중 수집', desc: '웨어러블 기반 생체 데이터 확보 → AI 학습 데이터셋 구축' },
                { title: '운항 전 집중 모니터링', desc: '운항 24~48시간 전 핵심 데이터만 수집 → 컨디션 사전 점검' },
              ].map((item) => (
                <div key={item.title} className="rounded-lg p-3 border" style={{ background: 'rgba(0,102,255,.02)', borderColor: 'rgba(0,102,255,.1)' }}>
                  <h4 className="text-sm font-bold text-brand-primary mb-0.5">{item.title}</h4>
                  <p className="text-xs text-tx-secondary">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Card 02 ── */}
          <div className="group card-hover bg-white rounded-[24px] md:rounded-[28px] p-6 md:p-10 border border-slate-200 shadow-card relative flex flex-col">
            <div className="top-accent absolute top-0 left-0 right-0 h-1.5 rounded-t-[28px] opacity-0" style={{ background: 'linear-gradient(90deg,#0066FF,#00D4FF)' }} />
            <div className="flex justify-between items-start mb-6 md:mb-8 gap-4">
              <div className="icon-wrap w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-blue-50/80 flex items-center justify-center text-brand-primary border border-blue-100/50">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
                </svg>
              </div>
              <span className="font-mono text-4xl md:text-5xl font-bold text-slate-100 select-none">02</span>
            </div>
            <h3 className="text-xl font-bold text-tx-primary mb-3">02. 데이터 통합 및 클라우드 연동</h3>
            <p className="text-sm text-tx-secondary leading-relaxed break-keep mb-6">데이터는 자동으로 연결되고, 따로 관리할 필요가 없습니다. 모든 정보가 하나의 흐름으로 이어집니다.</p>
            {/* pipeline visual */}
            <div className="bg-slate-50/50 rounded-xl p-5 mb-6 border border-slate-100 relative overflow-hidden">
              <div className="grid grid-cols-4 items-center relative gap-3">
                <div className="absolute left-6 right-6 top-1/2 h-px bg-slate-300 -translate-y-1/2" />
                <div className="absolute left-6 right-6 top-1/2 h-px -translate-y-1/2 overflow-hidden">
                  <div className="w-full h-full animate-stream" style={{ background: 'linear-gradient(90deg,transparent,#0066FF,transparent)' }} />
                </div>
                {[
                  { icon: <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />, blue: false },
                  { icon: <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />, blue: false },
                  { icon: <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />, blue: true },
                  { icon: <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />, primary: true },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-xl shadow-sm border flex items-center justify-center justify-self-center z-10"
                    style={{
                      background: item.primary ? '#0066FF' : item.blue ? '#EDF5FF' : '#fff',
                      borderColor: item.primary ? '#0066FF' : '#E2E8F0',
                      color: item.primary ? '#fff' : item.blue ? '#0066FF' : '#0B192C',
                    }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>{item.icon}</svg>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-4 mt-2 gap-3">
                {['WEARABLE', 'APP', 'CLOUD', 'AI MODEL'].map((label, i) => (
                  <span
                    key={label}
                    className="text-[9px] font-mono text-center"
                    style={{ color: i >= 2 ? '#0066FF' : '#94A3B8', fontWeight: i >= 2 ? 700 : 400 }}
                  >
                    {label}
                  </span>
                ))}
              </div>
            </div>
            <div className="h-px w-full bg-slate-100 mb-5 mt-auto" />
            <ul className="space-y-3">
              {['웨어러블 → 헬스 앱 → 클라우드 → AI 모델 자동 연결', '별도 전송 없이 실시간 데이터 반영', '건강검진 데이터 + 생체 데이터 + 설문 응답 통합 분석'].map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-sm bg-brand-primary rotate-45 flex-shrink-0" />
                  <span className="text-sm text-tx-secondary">{b}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Card 03 ── */}
          <div className="group card-hover bg-white rounded-[24px] md:rounded-[28px] p-6 md:p-10 border border-slate-200 shadow-card relative flex flex-col">
            <div className="top-accent absolute top-0 left-0 right-0 h-1.5 rounded-t-[28px] opacity-0" style={{ background: 'linear-gradient(90deg,#0066FF,#00D4FF)' }} />
            <div className="flex justify-between items-start mb-6 md:mb-8 gap-4">
              <div className="icon-wrap w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-blue-50/80 flex items-center justify-center text-brand-primary border border-blue-100/50">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                  <path d="M7 8l4 4 6-6" />
                </svg>
              </div>
              <span className="font-mono text-4xl md:text-5xl font-bold text-slate-100 select-none">03</span>
            </div>
            <h3 className="text-xl font-bold text-tx-primary mb-3">03. AI 분석 및 운영 최적화</h3>
            <p className="text-sm text-tx-secondary leading-relaxed break-keep mb-6">데이터는 분석으로 끝나지 않습니다. 바로 운영에 반영됩니다.</p>
            {/* reassignment visual */}
            <div className="bg-slate-50/50 rounded-xl p-4 mb-6 border border-slate-100 relative">
              <div className="flex justify-between items-center mb-3">
                <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider">Operation Update</span>
                <span className="text-[10px] font-mono font-bold text-brand-primary">RESOLVED</span>
              </div>
              <div className="space-y-2 relative">
                <div className="w-full h-7 rounded border flex items-center justify-between px-3 opacity-60" style={{ borderColor: 'rgba(239,68,68,.2)', background: 'rgba(239,68,68,.05)' }}>
                  <span className="text-[10px] font-mono text-status-critical font-semibold line-through">SCHEDULE: CAPT. LEE</span>
                  <span className="text-[9px] font-mono text-status-critical">RISK DETECTED</span>
                </div>
                <div className="absolute z-10 w-5 h-5 bg-white rounded-full shadow border border-slate-200 flex items-center justify-center text-brand-primary" style={{ top: 22, left: '50%', transform: 'translateX(-50%)' }}>
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M12 5v14M19 12l-7 7-7-7" /></svg>
                </div>
                <div className="w-full h-8 rounded border flex items-center justify-between px-3" style={{ borderColor: 'rgba(0,102,255,.3)', background: 'rgba(0,102,255,.08)' }}>
                  <span className="text-[10px] font-mono text-brand-primary font-bold">REASSIGNED: CAPT. PARK</span>
                  <span className="text-[9px] font-mono text-status-safe flex items-center gap-1">
                    <div className="w-1.5 h-1.5 bg-status-safe rounded-full" />OPTIMIZED
                  </span>
                </div>
              </div>
            </div>
            <div className="h-px w-full bg-slate-100 mb-5 mt-auto" />
            <ul className="space-y-3">
              {[
                { text: '주기적 모델 재학습 → 개인별 피로 예측 정확도 향상', warn: false },
                { text: '스케줄 자동 조정 → 대체 인력 자동 추천', warn: false },
                { text: '실시간 이상 징후 감지 → 즉시 대응', warn: true },
              ].map(({ text, warn }) => (
                <li key={text} className="flex items-start gap-3">
                  <div className={`mt-1.5 w-1.5 h-1.5 rounded-sm rotate-45 flex-shrink-0 ${warn ? 'bg-status-warn' : 'bg-brand-primary'}`} />
                  <span className="text-sm text-tx-secondary">{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* tagline */}
        <div className="mt-10 md:mt-12 bg-white border border-slate-200 shadow-card rounded-[24px] md:rounded-3xl p-5 md:p-6 flex flex-wrap items-center justify-center gap-3 md:gap-4">
          <div className="flex items-center gap-2 md:gap-3 text-lg sm:text-xl md:text-2xl font-bold text-tx-primary tracking-tight flex-wrap justify-center">
            예측
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0066FF" strokeWidth={2}><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            판단
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0066FF" strokeWidth={2}><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            <span className="text-brand-primary relative">
              실행
              <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-brand-primary opacity-30" />
            </span>
            까지 자동으로 이어집니다
          </div>
        </div>
      </div>
    </section>
  )
}
