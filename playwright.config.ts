import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
    testDir: './tests',

    timeout: 30 * 1000,

    expect: {
        timeout: 5000,
    },

    fullyParallel: true,

     retries: 2,

     workers:1,
     

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