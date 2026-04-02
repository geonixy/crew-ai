import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx,js,jsx}',
    './components/**/*.{ts,tsx,js,jsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Pretendard Variable',
          '-apple-system',
          'BlinkMacSystemFont',
          'system-ui',
          'sans-serif',
        ],
        mono: ['JetBrains Mono', 'monospace'],
        // mono: ['Paperlogy', 'Wanted Sans'],
      },
      colors: {
        brand: {
          primary: '#0066FF',
          glow:    '#00D4FF',
          light:   '#EBF1FF',
          navy:    '#1E293B',
        },
        surface: {
          base: '#F8FAFC',
          card: '#FFFFFF',
        },
        tx: {
          primary:   '#0B192C',
          secondary: '#475569',
          tertiary:  '#94A3B8',
        },
        status: {
          safe:     '#10B981',
          warn:     '#F59E0B',
          critical: '#EF4444',
        },
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        card:  '0 4px 6px -1px rgba(0,0,0,0.05), 0 2px 4px -1px rgba(0,0,0,0.03)',
        float: '0 20px 40px -10px rgba(11,25,44,0.10), 0 10px 20px -5px rgba(11,25,44,0.05)',
        glow:  '0 0 24px rgba(0,102,255,0.18)',
      },
    },
  },
  plugins: [],
}

export default config
