import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'CREW AI — Aviation Safety Intelligence',
  description: '항공 승무원 실시간 모니터링 및 AI 기반 인력 운영 최적화',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
      <html lang="ko">
      <head>
        <link
            href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&display=swap"
            rel="stylesheet"
        />
      </head>
      <body>{children}</body>
      </html>
  )
}