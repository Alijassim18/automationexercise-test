import {Page,expect} from "@playwright/test";

export class HomePage{
   constructor(private page:Page){};

   async goTo(){
    await this.page.goto('/');
   }
async clickOnSignUpLoginButton(){
    await this.page.getByRole('link', {name:'Signup / Login'}).click();
}

   async logout() {
        await this.page.getByRole('link', {
            name: 'Logout'
        }).click();
    }
    
}