'use client'

import { useEffect, useRef } from 'react'

export default function Hero() {
  const dashRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const el = dashRef.current
      if (!el) return
      const r = el.getBoundingClientRect()
      const cx = r.left + r.width / 2
      const cy = r.top + r.height / 2
      const rx = ((e.clientY - cy) / r.height) * 3
      const ry = -((e.clientX - cx) / r.width) * 5 - 3
      el.style.transform = `rotateY(${ry}deg) rotateX(${rx}deg)`
    }
    window.addEventListener('mousemove', handler)
    return () => window.removeEventListener('mousemove', handler)
  }, [])

  return (
    <section
      className="min-h-screen flex items-center justify-center relative grid-bg-light pb-16 md:pb-24"
      style={{ paddingTop: 72 }}
    >
      {/* ambient glow */}
      <div
        className="absolute top-1/4 right-1/4 w-[560px] h-[560px] rounded-full pointer-events-none animate-pulse-glow"
        style={{ background: 'radial-gradient(circle,rgba(0,102,255,.15) 0%,rgba(0,212,255,.05) 40%,transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-5 md:px-10 py-14 md:py-20 grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center w-full z-10">

        {/* ── LEFT ── */}
        <div className="flex flex-col gap-6 md:gap-8">
          {/* badge */}
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] md:text-xs font-bold tracking-[0.18em] md:tracking-widest uppercase w-fit"
            style={{ background: 'rgba(0  ,102,255,.08)', border: '1px solid rgba(0,102,255,.2)', color: '#0066FF' }}
          >
            <div className="w-2 h-2 rounded-full bg-brand-primary" style={{ boxShadow:'0 0 8px rgba(0,102,255,.6)', backgroundColor: '#0066FF', animation:'pulseDot 2s infinite' }} />
            {/*<div className="w-1.5 h-1.5 rounded-full bg-brand-primary animate-pulse-dot" />*/}
            Live Biometric Monitoring
          </div>

          {/* headline */}
          <h1
            className="font-bold leading-tight text-tx-primary"
            style={{ fontSize: 'clamp(2.5rem,5vw,3.5rem)', letterSpacing: '-1.5px' }}
          >
            CREW AI
            <span
              className="block font-light text-brand-primary mt-2"
              style={{ fontSize: '0.6em', letterSpacing: '-0.5px', color: '#0066ff' }}
            >
              Crew Risk Evaluation &
            </span>
            <span
                className="block font-light text-brand-primary"
                style={{ fontSize: '0.6em', letterSpacing: '-0.5px', color: '#0066ff' }}
            >
              Wellness Care AI
            </span>
          </h1>

          {/* desc */}
          <p className="max-w-md break-keep text-base md:text-lg text-tx-secondary leading-relaxed">
            실시간 생체 모니터링과 AI 분석으로 피로 리스크를 사전에 감지하고,
            데이터 기반으로 스케줄을 자동 최적화합니다.
            안전성과 정시성, 두 가지를 동시에 잡으세요.
          </p>

          <div className="mt-1 flex flex-col sm:flex-row sm:flex-wrap gap-3 md:gap-4">
            <a
              href="#system"
              className="inline-flex items-center justify-center px-6 md:px-8 py-3.5 md:py-4 rounded-xl text-sm md:text-base font-semibold text-white transition-all hover:-translate-y-0.5"
              style={{ background: '#0066FF', boxShadow: '0 4px 16px rgba(0,102,255,.3)' }}
            >
              기능 더 보기
            </a>
            {/*<a*/}
            {/*  href="#system"*/}
            {/*  className="px-8 py-4 rounded-xl text-base font-semibold text-tx-primary border border-slate-200 hover:bg-slate-50 transition-colors"*/}
            {/*>*/}
            {/*  기능 더 보기*/}
            {/*</a>*/}
          </div>

          {/* status strip */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 md:gap-8 pt-6 md:pt-8 border-t border-slate-200 mt-1 md:mt-2">
            {[
              { label: 'System Status',        value: 'Online & Active', dot: true },
              { label: 'Active Flights',        value: '1,492' },
              { label: 'Data Latency',          value: '12ms' },
            ].map(({ label, value, dot }) => (
              <div key={label}>
                <div className="text-[10px] font-mono font-semibold text-tx-tertiary uppercase tracking-widest mb-1">{label}</div>
                <div className="flex items-center gap-2 text-sm md:text-[15px] font-medium text-tx-primary font-mono">
                  {dot && <div className="w-2 h-2 rounded-full bg-status-safe" />}
                  {value}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── RIGHT: dashboard mockup ── */}
        <div className="relative h-[460px] sm:h-[520px] lg:h-[580px]" style={{ perspective: 1000 }}>
          <div
            ref={dashRef}
            className="absolute inset-0 rounded-2xl bg-white border border-white/60"
            style={{
              boxShadow: '0 20px 40px -10px rgba(11,25,44,.12)',
              transform: 'rotateY(-5deg) rotateX(2deg)',
              transition: 'transform .5s ease',
            }}
          >
            {/* header */}
            <div
              className="flex justify-between items-center px-4 md:px-6 py-3 md:py-4 text-white rounded-tl-2xl rounded-tr-2xl"
              style={{ background: '#0B192C' }}
            >
              <div className="flex items-center gap-2 md:gap-3 min-w-0">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
                <span className="text-[10px] md:text-xs font-bold tracking-[0.18em] md:tracking-widest truncate">ACTIVE MISSION TELEMETRY</span>
                <span
                  className="font-mono text-[10px] md:text-xs px-2 py-0.5 rounded shrink-0"
                  style={{ background: 'rgba(255,255,255,.1)', color: '#00D4FF' }}
                >KE081</span>
              </div>
              <div className="font-mono text-xs text-white/50 hidden md:flex gap-4">
                <span>ALT: 34,000FT</span><span>SPD: 480KTS</span><span>SYS: NOMINAL</span>
              </div>
            </div>

            {/* body */}
            <div
              className="p-3 sm:p-4 md:p-5 grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 overflow-auto rounded-2xl"
              style={{ background: 'linear-gradient(180deg,#fff 0%,#F1F5F9 100%)' }}
            >
              {/* flight route */}
              <div className="sm:col-span-2 bg-white rounded-xl p-3 md:p-4 border border-slate-100" style={{ boxShadow: '0 2px 4px rgba(0,0,0,.04)' }}>
                <div className="flex items-start justify-between gap-3 text-[11px] md:text-xs font-semibold text-tx-secondary uppercase tracking-wider mb-3">
                  <span>Flight Progression</span>
                  <span className="font-mono text-brand-primary">T-MINUS 04:12:00</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-center">
                    <div className="text-xl md:text-2xl font-bold text-tx-primary">ICN</div>
                    <div className="text-xs font-mono text-tx-tertiary mt-1">10:00 KST</div>
                  </div>
                  <div className="flex-1 mx-4 h-8 relative">
                    <div className="absolute inset-y-1/2 left-0 right-0 border-t-2 border-dashed border-slate-300" />
                    <div className="absolute text-brand-primary bg-white px-1" style={{ left: '62%', top: '50%', transform: 'translate(-50%,-50%)' }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
                      </svg>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl md:text-2xl font-bold text-tx-primary">JFK</div>
                    <div className="text-xs font-mono text-tx-tertiary mt-1">11:00 EST</div>
                  </div>
                </div>
              </div>

              {/* crew vitals */}
              <div className="bg-white rounded-xl p-3 md:p-4 border border-slate-100" style={{ boxShadow: '0 2px 4px rgba(0,0,0,.04)' }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full border-2 border-white shadow-sm bg-slate-200" />
                  <div>
                    <div className="text-sm font-semibold text-tx-primary">CAPT. Park, Jihoon</div>
                    <div className="text-xs text-tx-secondary">Block Time: 09h 15m</div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { label: 'Heart Rate',   sub: '● LIVE', subColor: '#10B981', val: '72', unit: 'BPM', safe: true },
                    { label: 'HRV Index',    sub: 'Δ -2.4%', val: '42', unit: 'ms',  warn: true },
                    { label: 'Blood Oxygen', val: '98', unit: '%' },
                    { label: 'Stress Level', val: 'LOW', safe: true },
                  ].map(({ label, sub, subColor, val, unit, safe, warn }) => (
                    <div key={label} className="bg-slate-50 rounded-lg p-2.5 border border-slate-100">
                      <div className="flex justify-between text-[9px] font-mono text-tx-tertiary mb-1 uppercase">
                        <span>{label}</span>
                        {sub && <span style={{ color: subColor }}>{sub}</span>}
                      </div>
                      <div
                        className="text-base font-mono font-semibold"
                        style={{ color: safe ? '#10B981' : warn ? '#F59E0B' : '#0B192C' }}
                      >
                        {val} {unit && <span className="text-[9px] text-tx-secondary">{unit}</span>}
                      </div>
                      {safe && label === 'Heart Rate' && (
                        <svg className="w-full mt-1" style={{ height: 14 }} viewBox="0 0 100 14">
                          <polyline points="0,7 12,7 16,2 20,12 24,7 80,7" fill="none" stroke="#10B981" strokeWidth={1.5} strokeLinejoin="round" />
                        </svg>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* AI fatigue */}
              <div className="bg-white rounded-xl p-3 md:p-4 border border-brand-primary relative overflow-hidden" style={{ boxShadow: '0 2px 4px rgba(0,0,0,.04)' }}>
                <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: 'linear-gradient(90deg,#0066FF,#00D4FF)' }} />
                <div className="flex items-center gap-2 mb-3 text-brand-primary">
                  <svg className="animate-spin-slow" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  <span className="text-[10px] font-bold tracking-widest uppercase font-mono">Predictive Fatigue Model</span>
                </div>
                <div className="relative mb-3" style={{ height: 80 }}>
                  <svg width="100%" height="100%" viewBox="0 0 200 80" preserveAspectRatio="none">
                    <line x1="0" y1="20" x2="200" y2="20" stroke="#E2E8F0" strokeDasharray="2 2" />
                    <line x1="0" y1="40" x2="200" y2="40" stroke="#E2E8F0" strokeDasharray="2 2" />
                    <line x1="0" y1="60" x2="200" y2="60" stroke="#E2E8F0" strokeDasharray="2 2" />
                    <path d="M0 75 Q50 65 100 35 T200 10" fill="none" stroke="#CBD5E1" strokeWidth={1.5} strokeDasharray="4 4" />
                    <path d="M0 75 Q50 68 100 52 T200 32" fill="none" stroke="#0066FF" strokeWidth={2} />
                    <path d="M0 75 Q50 68 100 52 T200 32 L200 80 L0 80 Z" fill="url(#bgg)" opacity={0.15} />
                    <line x1="130" y1="0" x2="130" y2="80" stroke="#00D4FF" strokeWidth={1} />
                    <circle cx={130} cy={43} r={3.5} fill="white" stroke="#00D4FF" strokeWidth={2} />
                    <defs>
                      <linearGradient id="bgg" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#0066FF" />
                        <stop offset="100%" stopColor="transparent" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div className="rounded-lg p-2.5 border-l-2 border-brand-primary" style={{ background: 'rgba(0,102,255,.05)' }}>
                  <div className="text-[9px] font-bold text-brand-primary uppercase tracking-wider mb-0.5">Schedule Optimization Active</div>
                  <div className="text-[10px] text-tx-secondary leading-snug">피로 임계 도달 예측 (18:00Z). 자동 대응: 구간 4에서 45분 휴식 권고.</div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
