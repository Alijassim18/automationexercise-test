import {test, expect} from '@playwright/test';
import {HomePage} from '../pages/HomePage';
import {SignUpPage} from '../pages/SignUp';

test.describe('Sign Up Test', () => {
test('Sign Up with valid credentials', async ({page}) => {
    const homePage = new HomePage(page);
    const signUpPage = new SignUpPage(page);
    await homePage.goTo()
    await homePage.clickOnSignUpLoginButton()
    await signUpPage.signUp('ahf12','ahf12@example.com')
await signUpPage.fillAccountInfo(
    'password123',
    'Ali',
    'Ahmed',
    '123 Main St',
    'United States',
    'California',
    'Los Angeles',
    '90001',
    '1234567890'
)
    await signUpPage.verifyAccountCreation()
})



})