import { Browser } from 'playwright';
import delay from '@cv-tracker/utils/src/delay.js';
import axios from 'axios';
import * as cheerio from 'cheerio';

interface Job {
    companyLogoUrl?: string
    jobTitle?: string
    organization?: string
    imageUrl?: string
}

/**
 * The date of this website can be fetched by api
 */
export default class RemoteOkCom {
    private templateUrl: string = 'https://remoteok.com/?order_by=date&action=get_jobs&premium=0&pagination={pagination}&offset={offset}';
    private pagination: number = 1;
    private offset: number = 50;

    async crawl() {
        try {
            const actualUrl = this.templateUrl.replace('{pagination}', this.pagination.toString()).replace('{offset}', this.offset.toString());
            const response = await axios.get(actualUrl);
            console.log(response.data);
            const $ = cheerio.load(response.data);
            
        } catch (error) {
            console.log(error);
        } finally {

        }
    }
}
