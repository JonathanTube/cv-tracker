import { chromium } from 'playwright';
import RemoteOkCom from './websites/remoteok.com.js';
// import DynamitejobsCom from './websites/dynamitejobs.com.js';

(async () => {
    // Setup
    const browser = await chromium.launch({ headless: true });

    // start crawl
    await new RemoteOkCom().crawl(browser);

    // await new DynamitejobsCom().crawl(browser);

    // Teardown
    await browser.close();
})();