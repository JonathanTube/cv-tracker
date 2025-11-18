import delay from "@cv-tracker/utils/src/delay.js";
import { Browser, Locator, Page } from "playwright";

class DynamitejobsCom {
    private url: string = 'https://dynamitejobs.com/remote-jobs';

    async crawl(browser: Browser) {
        const context = await browser.newContext();
        try {
            const page = await context.newPage();
            await page.goto(this.url);
            await this.execute(page);
        } catch (error) {
            console.log(error);
        } finally {
            if (context) {
                await context.close();
            }
        }
    }

    async execute(page: Page) {
        await page.waitForLoadState('networkidle');
        const ul = await page.locator('//*[@id="app"]/div/main/div/div[3]/div/div[2]/div[1]/div[2]');
        const li = await ul.locator('li');
        const rows = await li.all();
        for (let row of rows) {
            await this.handleSingleRow(row, page);
        }
    }

    async handleSingleRow(row: Locator, page: Page) {
        await row.click();
        await delay(1000);
        const companyInfoBlock = await page.locator('//*[@id="app"]/div/main/div/div[3]/div/div[2]/div[2]/div/div/div[1]');
        const jobTitle = await companyInfoBlock.locator('a').nth(0).textContent()
        console.log(jobTitle);
    }
}

export default DynamitejobsCom;
