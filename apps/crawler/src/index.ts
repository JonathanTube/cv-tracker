import RemoteOkCom from './websites/remoteok.com.js';

(async () => {
    const remoteOkCom = new RemoteOkCom();
    await remoteOkCom.crawl();
})();