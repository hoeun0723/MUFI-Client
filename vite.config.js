import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteCompression from 'vite-plugin-compression';

export default defineConfig({
  plugins: [
    react(),
    // Gzip 압축 플러그인 추가
    viteCompression({
      algorithm: 'gzip', // Gzip 방식으로 압축
      ext: '.gz', // 압축 파일 확장자
      threshold: 10240, // 10KB 이상의 파일만 압축
    }),
  ],
  build: {
    chunkSizeWarningLimit: 1000, // Chunk 크기 경고 한도를 1000kB로 설정
    rollupOptions: {
      output: {
        // manualChunks로 특정 라이브러리를 별도로 분리
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('lottie-react')) {
              return 'lottie'; // Lottie를 별도 청크로 분리
            }
            if (id.includes('@fullcalendar')) {
              return 'fullcalendar'; // FullCalendar를 별도 청크로 분리
            }
            if (id.includes('react-draggable')) {
              return 'react-draggable'; // react-draggable을 별도 청크로 분리
            }
          }
        },
      },
    },
  },
});
