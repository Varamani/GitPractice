const {test,expect}=require('@playwright/test');
const { tap } = require('node:test/reporters');


test('Multiple Selections',async({page})=>
{
  await page.goto('https://demo.automationtesting.in/Register.html');

 const options= await page.$$('#basicBootstrapForm > div:nth-child(7) > div > multi-select > div:nth-child(2) > ul >li lable a');
    
 for(const option of options)
 {
    const value=option.textContent();
    console.log('Option is :',value)
 }
  await page.waitForTimeout(5000);
   
  await page.getByText('Item').press('Enter');

  await page.keyboard.
})
