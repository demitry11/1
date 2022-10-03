import { Page } from "@playwright/test";

export default class RegPage {

   
    constructor(public page: Page) { }

    async enterUserName(username: string) {
        await this.page.locator("#user_login").type(username);
    }

     async enterUserPass(pass: string) {
        await this.page.locator("#user_password").type(pass);
    }
    async enterPassConf(passc: string) {
        await this.page.locator("#user_password_confirmation").type(passc);
    }
    async enterUserFirst(first: string) {
        await this.page.locator("#user_firstname").type(first);
    }
    async enterUserLast(last: string) {
        await this.page.locator("#user_lastname").type(last);
    }
    async enterUserMail(mail: string) {
        await this.page.locator("#user_mail").type(mail);
    }
     async clickRegBtn() {
               await this.page.click("[name$='commit']");
    }
}








