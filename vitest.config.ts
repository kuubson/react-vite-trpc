import tsconfigPaths from 'vite-tsconfig-paths'
import { defineConfig } from 'vitest/config'

export const vitestConfig = defineConfig({
   test: {
      setupFiles: ['vitest.setup.ts'],
      coverage: {
         provider: 'istanbul',
         reporter: ['html', 'text-summary', 'lcovonly'],
         all: true,
      },
      testTimeout: 15000,
   },
   plugins: [tsconfigPaths()],
})
