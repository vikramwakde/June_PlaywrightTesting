import{test, expect} from '@playwright/test';

test('FirstTest', async({page})=> {
    await page.goto('https://utkarshaaacademy.com/');
    expect(page).toHaveTitle('Software Testing');
}

    
)