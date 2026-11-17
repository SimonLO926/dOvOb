import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  testMatch: '**/*.spec.js',
  timeout: 120000,
  expect: {
    timeout: 10000
  },
  workers: 1,
  fullyParallel: false,
  reporter: [['list']],
  outputDir: '/tmp/lotus-playwright-artifacts',
  use: {
    browserName: 'chromium',
    headless: true,
    launchOptions: {
      executablePath: process.env.PLAYWRIGHT_EXECUTABLE_PATH || undefined,
      args: [
        '--use-gl=angle',
        '--use-angle=swiftshader',
        '--enable-unsafe-swiftshader',
        '--ignore-gpu-blocklist'
      ]
    },
    trace: 'retain-on-failure'
  }
});
