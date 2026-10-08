import {Page,expect} from "@playwright/test";

export class LoginPage {
    constructor(private page: Page) {}

    async login(email: string, password: string) {
       await this.page.locator('[data-qa="login-email"]').fill(email);
    await this.page.locator('[data-qa="login-password"]').fill(password);
        await this.page.getByRole('button', {name: 'Login'}).click();
    }

async verifyLoginErrorMessage(){
    await expect(this.page.getByText('Your email or password is incorrect!')).toBeVisible()
}

}