import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
    testDir: './tests',

    timeout: 30 * 1000,

    expect: {
        timeout: 5000,
    },

    fullyParallel: true,

    // retries: process.env.CI ? 2 : 0,

    // workers: process.env.CI ? 1 : undefined,

    reporter: [
        ['html'],
        ['list'],
    ],

    use: {
        baseURL: 'https://www.automationexercise.com',

        headless: true,

        screenshot: 'only-on-failure',

        video: 'retain-on-failure',

        trace: 'retain-on-failure',
    },

    projects: [
        {
            name: 'chromium',
            use: {
                ...devices['Desktop Chrome'],
            },
        },

        {
            name: 'firefox',
            use: {
                ...devices['Desktop Firefox'],
            },
        },

        {
            name: 'webkit',
            use: {
                ...devices['Desktop Safari'],
            },
        },

        {
            name: 'mobile-chrome',
            use: {
                ...devices['Pixel 5'],
            },
        },

        {
            name: 'mobile-safari',
            use: {
                ...devices['iPhone 13'],
            },
        },
    ],
});