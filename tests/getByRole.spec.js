import{test,expect} from '@playwright/test'

test('Test getbyRole',async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html");
    const primaryButton = await page.getByRole('button',{name: 'Primary Action'});
    await expect(primaryButton).toBeVisible();
    await primaryButton.click();
    const ToggleButton = await page.getByRole('button',{name: 'Toggle Button'});
    await expect(ToggleButton).toBeVisible();
    await ToggleButton.click();
    const username = await page.getByRole('textbox',{name: 'username'});
    await username.type('utkarshaa academy');

    const checkbox = await page.getByRole('checkbox',{name: 'Accept terms'})
    await checkbox.check();
    await checkbox.uncheck();

    const HomeLink = await page.getByRole('link',{name: 'Home'}).nth(1);
    await HomeLink.click()

    // const blogLink = await page.getByRole('link',{name: 'Blog',exact:true}).first();
    // await blogLink.click();
   
    const alertmessage = await page.getByText('This is an important alert message').textContent();
    console.log(alertmessage);
})

/*
page.getByRole() to locate by explicit and implicit accessibility attributes.
page.getByText() to locate by text content.
page.getByLabel() to locate a form control by associated label's text.
page.getByPlaceholder() to locate an input by placeholder.
page.getByAltText() to locate an element, usually image, by its text alternative.
page.getByTitle() to locate an element by its title attribute.
page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured).


*/

