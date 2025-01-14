const {test,expect}=require('@playwright/test')


test('Input Boxes',async({page})=>
{
  await page.goto('https://demo.automationtesting.in/Register.html');

  await expect(await page.locator("//input[@type='email']")).toBeVisible();
  await expect(await page.locator("//input[@type='email']")).toBeEmpty();
  await expect(await page.locator("//input[@type='email']")).toBeEditable();
  await expect(await page.locator("//input[@type='email']")).toBeEnabled();

  await page.locator("//input[@placeholder='First Name']").fill('Karimulla');
  await page.locator("//input[@placeholder='Last Name']").fill('Shaik');

  //page.locator("//input[@type='email']").fill('skm.mca27@gmail.com');
  await page.fill("//input[@type='email']",'skm.mca27@gmail.com');

  await page.locator("//input[@type='tel']").fill('9980866272');

  await page.locator("//input[@id='firstpassword']").fill('Welcome@27');

  await page.locator("//input[@id='secondpassword']").fill('Welcome@27');



  await page.waitForTimeout(5000);
   
})