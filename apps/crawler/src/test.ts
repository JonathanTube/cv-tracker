import { chromium } from 'playwright';
import RemoteOkCom from './websites/remoteok.com.js';

(async () => {
    // Setup
    const browser = await chromium.launch({ headless: false });

    // start crawl
    const remoteOkCom = new RemoteOkCom();
    await remoteOkCom.crawl(browser);

    // Teardown
    await browser.close();
})();