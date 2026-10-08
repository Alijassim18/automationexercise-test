import {Page,expect} from "@playwright/test";

export class LoginPage {
    constructor(private page: Page) {}

    async login(email: string, password: string) {
        await this.page.getByPlaceholder('Email Address').fill(email)
        await this.page.getByPlaceholder('Password').fill(password);
        await this.page.getByRole('button', {name: 'Login'}).click();
    }

async verifyLoginErrorMessage(){
    await expect(this.page.getByText('Your email or password is incorrect!')).toBeVisible()
}

}