import { Given, When, Then } from "@cucumber/cucumber"
import { chromium, Page } from "@playwright/test"
import { PageFixture } from "../../Hooks/PageFixture";


Given('go to login page', async function () {
  await PageFixture.page.goto("URL");
});


Given('User enter valid user name  {string}', async function (Username) {
  await PageFixture.page.locator('#email').type(Username)

});


Given('User enter valid password {string}', async function (Password) {
  await PageFixture.page.locator('#password').fill(Password)

});


When('user click on the login button', async function () {
  await PageFixture.page.locator('button[type="button"]').click()

});


Then('Login should success', async function () {
  await PageFixture.page.close()
});
