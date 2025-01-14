

const {test,expect}=require('@playwright/test')


test('Home Page',async({page})=>
{

    //Java Script promise: async :return a promise and await : waiting for promise

    await page.goto('https://www.demoblaze.com/');

    const pageTitle=await page.title();
    console.log('Page title is : ',pageTitle);

    const pageURL=await page.url();
    console.log('Page URL : ',pageURL);

    await expect(page).toHaveTitle('STORE');
    await expect(page).toHaveURL('https://www.demoblaze.com/');

    //fetch all links from webpage

    const links=await page.$$('a');

    for(const link of links)
    {
        const linktext= await link.textContent();
        console.log(linktext);
    }
    await page.locator('id=signin2').click();

    await page.locator('id=sign-username').fill('karim.mca27@gmail.com');
    await page.locator('id=sign-password').fill('Welcome@27');
    await page.locator("//button[@onclick='register()']").click();
   

    //await page.close();
})