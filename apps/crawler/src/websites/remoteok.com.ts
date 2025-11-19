import { Browser, Locator, Page } from 'playwright';
import delay from '@cv-tracker/utils/src/delay.js';
import dayjs from 'dayjs';

interface Job {
    postTime?: string
    logoUrl?: string
    companyName?: string
    jobTitle?: string
}

/**
 * The date of this website can be fetched by api
 */
export default class RemoteOkCom {
    private url: string = 'https://remoteok.com/?order_by=date';

    private withinDays: number = 3;

    private handledRowCount: number = 0;

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
        const table = await page.locator('table#jobsboard');
        const tbody = await table.locator('tbody');
        const rows = await tbody.locator('tr.job').all();
        let filteredRows = rows.slice(this.handledRowCount);
        if (filteredRows.length === 0) return;

        this.handledRowCount = rows.length;
        const finished = await this.handleRows(filteredRows);
        if (finished) return;
        // scroll to the bottom of the page to load more jobs
        await page.evaluate(() => {
            window.scrollTo(0, document.body.scrollHeight);
        });
        // wait for the new jobs to load
        await delay(2000);
        // fetch the new jobs
        await this.execute(page);
    }

    async handleRows(rows: Locator[]) {
        for (let row of rows) {
            const datetime = await row!.locator('td.time > time').getAttribute('datetime');
            const formattedDatetime = dayjs(datetime).format('YYYY-MM-DD HH:mm:ss');
            const daysDiff = dayjs().diff(dayjs(formattedDatetime), 'day');
            const isOld = daysDiff > this.withinDays;
            if (isOld) {
                return true;
            }
            await this.handleSingleRow(row, formattedDatetime);
        }
    }

    async handleSingleRow(row: Locator, datetime: string) {
        try {
            let job: Job = { postTime: datetime }
            const dataOffset = await row!.getAttribute('data-offset');
            await row.click();
            await delay(100);
            const expandItem = await row.locator('xpath=following-sibling::tr[1]');
            const jobTitleItem = await expandItem.locator('div.description >div').nth(1).locator('h1');
            if (await jobTitleItem.isVisible()) {
                job.jobTitle = await jobTitleItem.textContent() || "";
            }

            const logoUrlItem = await expandItem.locator('div.description div.company_profile img.logo');
            if (await logoUrlItem.isVisible()) {
                job.logoUrl = await logoUrlItem.getAttribute('src') || "";
            }

            const companyNameItem = await expandItem.locator('div.description div.company_profile h2');
            if (await companyNameItem.isVisible()) {
                job.companyName = (await companyNameItem.textContent() || "").trim();
            }
            console.log('dataOffset=', dataOffset, 'job=', job);
        } catch (err) {
            console.log(err);
        }
    }
}
