import {Page,expect} from "@playwright/test";

export class SignUpPage {
 constructor(private page: Page) {};
 async signUp(name: string, email: string) {
    await this.page.getByPlaceholder('Name').fill(name);
   await this.page.locator('input[data-qa="signup-email"]').fill(email);
    await this.page.getByRole('button', {name: 'Signup'}).click();
 }


async fillAccountInfo(
    password: string,
    firstName: string,
    lastName: string,
    address: string,
    country: string,
    state: string,
    city: string,
    zipcode: string,
    mobileNumber: string
) {
    await this.page.locator('#password').fill(password);
    await this.page.locator('#first_name').fill(firstName);
    await this.page.locator('#last_name').fill(lastName);
    await this.page.locator('#address1').fill(address);
    await this.page.locator('#country').selectOption({ label: country });
    await this.page.locator('#state').fill(state);
    await this.page.locator('#city').fill(city);
    await this.page.locator('#zipcode').fill(zipcode);
    await this.page.locator('#mobile_number').fill(mobileNumber);

    await this.page.getByRole('button', { name: 'Create Account' }).click();
}


  async verifyAccountCreation() {
    await expect(this.page.getByText('Account Created!')).toBeVisible();
    await this.page.getByText('Continue').click();
}

    async verifySingUpErrorMessage(){
        await expect(this.page.getByText('Email Address already exist!')).toBeVisible();
    }
}