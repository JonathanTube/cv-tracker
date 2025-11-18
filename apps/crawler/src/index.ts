import { chromium } from 'playwright';
import RemoteOkCom from './websites/remoteok.com.js';
import DynamitejobsCom from './websites/dynamitejobs.com.js';

(async () => {
    // Setup
    const browser = await chromium.launch({ headless: false });

    // start crawl
    // const remoteOkCom = new RemoteOkCom();
    // await remoteOkCom.crawl(browser);

    const dynamitejobsCom = new DynamitejobsCom();
    await dynamitejobsCom.crawl(browser);

    // Teardown
    await browser.close();
})();