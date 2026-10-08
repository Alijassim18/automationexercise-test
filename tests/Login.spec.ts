import{test}from'@playwright/test';
import{HomePage}from'../pages/HomePage';
import{LoginPage}from'../pages/LoginPage';

test.describe('Login Test',()=>{
test('Login with valid credentials',async({page})=>{
const homePage=new HomePage(page);
const loginPage=new LoginPage(page);
await homePage.goTo()
await homePage.clickOnSignUpLoginButton()
await loginPage.login('ahf12@example.com','password123')
await homePage.logout();
})

test('Login with invalid credentials',async({page})=>{
const homePage=new HomePage(page);
const loginPage=new LoginPage(page);
await homePage.goTo()
await homePage.clickOnSignUpLoginButton()
await loginPage.login('invalid@example.com','0000000d')
await loginPage.verifyLoginErrorMessage()
})
})