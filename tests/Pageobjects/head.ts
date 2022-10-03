import { Page } from "@playwright/test";
export default class HeadPage {
    
    constructor(public page: Page) { }
    
  

    async clickRegisBtn() {
        await this.page.click('[href="/account/register"]');
    }    
   
}
