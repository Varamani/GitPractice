const {test,expect}=require('@playwright/test')


test('Radio Buttons',async({page})=>
{
  await page.goto('https://demo.automationtesting.in/Register.html');

  await page.locator("//input[@value='Male']").check();

  await expect(await page.locator("//input[@value='Male']")).toBeChecked();
  await expect(await page.locator("//input[@value='Male']").isChecked()).toBeTruthy();
  
  await expect(await page.locator("//input[@value='FeMale']").isChecked()).toBeFalsy();


  await page.waitForTimeout(5000);
   
})