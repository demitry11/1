import { Page } from "@playwright/test";

export default class SecurePage {
   
    constructor(public page: Page) { }

    async flashAlert () {
        await this.page.waitForSelector("#errorExplanation");
    }
   
}


