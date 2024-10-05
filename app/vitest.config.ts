/// <reference types="vitest" />
import { mergeConfig, defineConfig } from 'vitest/config'
import viteConfig from './vite.config'

export default mergeConfig(
  viteConfig, 
  defineConfig({
    test: {
      environment: 'happy-dom',
      coverage: {
        reporter: ['text', 'json', 'html'],
        all: true,
        include: [
          'src/components/**',
          'src/composable/**',
          'src/layouts/**',
        ]
      },
      exclude: [
        './playwright/*',
        './node_modules/*',
        '.cache/*' // for CI
      ]
    },
  })
)
