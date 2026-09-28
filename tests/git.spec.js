import {test} from '@playwright/test';
test ('git', async ({ page }) => {
    await page.goto('https://github.com/');
})