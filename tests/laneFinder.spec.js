// @ts-check
const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.lanefinder.com/');

    //Click "Accept all cookies" button
    await page.locator("//button[@class='ch2-btn ch2-allow-all-btn ch2-btn-primary']").click();
});

test('setting up filters and selecting job', async ({ page }) => {

  //Setup job filters and search for job & Do assertion
  await page.getByPlaceholder("Enter your zip...").type("33607"); //Select location "Tampa, FL"
  await page.locator("//*[text()='Class A']").click(); //Select "Class A"
  await page.locator("//button[@type='submit']").click(); //Click "Show .. Jobs" button

  let address = (await page.locator("//div[@data-test-id='virtuoso-item-list']/div[1]/div/div[1]/a/div[3]").innerText()).valueOf();
  await expect(address).toContain("33607");
  await expect(page).toHaveURL(/LicenseType=a/);


  //Select one job (first job on the list) & Do assertion
  await page.locator("//div[@data-item-index='0']").click();
  await page.locator("//div[@data-test-id='virtuoso-item-list']/div[1]/div/div[1]/div[1]/div[2]").click();

  let selectedItems = (await page.locator("//div[@class='basketButton-module--badge--76be0']").innerText()).valueOf();
  await expect(selectedItems).toEqual("1");

  //Go to the shopping cart and apply to the job & Do assertion
  await page.locator("//div[@class='basketButton-module--basketButton--4b46e']").click();
  await page.locator("//button[@class='button-module--button--47b44 button-module--block--11092 button-module--secondary--a6253 jobBasketPanel-module--applyButton--05aaa']").click();
  
  await expect(page).toHaveURL(/addLanefinderDriverToApplication/);





  // Click the get started link.
//  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects the URL to contain intro.
//  await expect(page).toHaveURL(/.*intro/);
});
