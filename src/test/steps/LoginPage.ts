import {Given, When, Then} from "@cucumber/cucumber"
import { chromium, expect, test } from "@playwright/test";
let browser;
let page;
         Given('user Naviagte to applicaiton', async function () {
            browser = await chromium.launch({
                headless: false,
              });
              const context = await browser.newContext({
                // recordVideo:{
                //   dir: "./video/"
                // }
              });
              page = await context.newPage();
              await page.goto("https://www.lambdatest.com/"), {timeout: 60000};
              page.close();
           
         });       
       
         Given('User click login button', async function () {
         
         });
       

         Given('User enter valid user name  {string}', async function (string) {
          
         });
       

       
         Given('User enter valid password {string}', async function (string) {
           
         });
       
  
       
         When('user click on the login button', async function () {

         });

       
         Then('Login should success', async function () {

         });
