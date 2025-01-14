const {test,expect}=require('@playwright/test')


test('Check Boxes',async({page})=>
{
  await page.goto('https://demo.automationtesting.in/Register.html');

  //await page.locator("//input[@value='Cricket']").check();

  //await expect(await page.locator("//input[@value='Cricket']")).toBeChecked();
  //await expect(await page.locator("//input[@value='Cricket']").isChecked()).toBeTruthy();
  
  await expect(await page.locator("//input[@value='Movies']").isChecked()).toBeFalsy();


  const checkboxlocators= [
    "//input[@value='Cricket']",
    "//input[@value='Movies']",
    "//input[@value='Hockey']"
  ];

  for(const locator of checkboxlocators)
   {
    await page.locator(locator).check();
   }

   for(const locator of checkboxlocators)
    {
     await page.locator(locator).uncheck();
    }
    
  await page.waitForTimeout(5000);
   
})