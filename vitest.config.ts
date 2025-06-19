import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./tests/setupTests.ts'],
    coverage: {
      reporter: ['text', 'json', 'html'],
    },
    watch: false, // Run tests only once
  },
});
