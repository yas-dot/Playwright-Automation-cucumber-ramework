import  {BeforeAll, AfterAll}  from "@cucumber/cucumber"
import  {chromium, Page } from "@playwright/test"
import  { PageFixture } from "./PageFixture";

let page: Page;
BeforeAll(async function (){
    const browser= await chromium.launch({
        headless:false,
       })
      page =await browser.newPage()
      PageFixture.page=page;
})


