import {Page,expect} from "@playwright/test";

export class SignUpPage {
 constructor(private page: Page) {};
 async signUp(name: string, email: string) {
    await this.page.getByPlaceholder('Name').fill(name);
    await this.page.getByPlaceholder('Email Address').fill(email);
    await this.page.getByRole('button', {name: 'Sign Up'}).click();
 }

 async fillAccountInfo( password: string,
        firstName: string,
        lastName: string,
        address: string,
        country: string,
        state: string,
        city: string,
        zipcode: string,
        mobileNumber: string){
            await this.page.getByLabel('Password*').fill(password);
            await this.page.getByLabel('First name*').fill(firstName);
            await this.page.getByLabel('Last name*').fill(lastName);
            await this.page.getByLabel('Address*').fill(address);
            await this.page.getByLabel('Country*').selectOption(country);
            await this.page.getByLabel('State*').fill(state);
            await this.page.getByLabel('City*').fill(city);
            await this.page.getByLabel('Zipcode*').fill(zipcode);
            await this.page.getByLabel('Mobile Number*').fill(mobileNumber);
            await this.page.getByRole('button', {name: 'Create Account'}).click();
        }

    async verifyAccountCreation(){
        await expect(this.page.getByText('Account Created!')).toBeVisible();
        await this.page.getByRole('button', {name: 'Continue'}).click();
    }

    async verifySingUpErrorMessage(){
        await expect(this.page.getByText('Email Address already exist!')).toBeVisible();
    }
}