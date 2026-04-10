import { defineConfig, devices } from '@playwright/test';

const rawURL = process.env.PLAYWRIGHT_BASE_URL;
if (process.env.CI && !rawURL) {
  throw new Error(
    'PLAYWRIGHT_BASE_URL must be set in CI. It should come from the build job output (the Vercel preview URL).',
  );
}
const baseURL = rawURL || 'http://localhost:3000';

export default defineConfig({
  testDir: './e2e',
  timeout: 30_000,
  retries: process.env.CI ? 1 : 0,
  reporter: [['html', { open: 'never' }]],
  use: {
    baseURL,
    extraHTTPHeaders: {
      'x-vercel-protection-bypass': process.env.VERCEL_BYPASS_SECRET ?? '',
    },
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
