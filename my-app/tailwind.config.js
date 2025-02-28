// tailwind.config.js
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        // 例: neon-text クラス用のスタイルを追加
        colors: {
          neonRed: '#ff073a',
        },
        keyframes: {
          neon: {
            '0%, 100%': { textShadow: '0 0 5px #ff073a, 0 0 10px #ff073a, 0 0 20px #ff073a' },
            '50%': { textShadow: '0 0 10px #ff073a, 0 0 20px #ff073a, 0 0 30px #ff073a' },
          },
        },
        animation: {
          neon: 'neon 1.5s ease-in-out infinite',
        },
      },
    },
    plugins: [],
  }
  