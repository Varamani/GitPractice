const {test,expect}=require('@playwright/test')


test('Dropdown',async({page})=>
{
  await page.goto('https://demo.automationtesting.in/Register.html');

  await page.locator("//select[@id='Skills']").selectOption({label:'Adobe Photoshop'});
  await page.locator("//select[@id='Skills']").selectOption('Analytics');
  await page.locator("//select[@id='Skills']").selectOption({value : 'Corel Draw'});
  await page.locator("//select[@id='Skills']").selectOption({index : 1});

  await page.selectOption("//select[@id='Skills']",'Analytics');

  const options = await page.$$("//select[@id='Skills']");

  for(const option of options)
  {
    let value=await option.textContent();

    if(value.includes('Engineering'))
    {
        await page.selectOption("//select[@id='Skills']",value);
        break;
    }
  }
    
  await page.waitForTimeout(5000);
   
})