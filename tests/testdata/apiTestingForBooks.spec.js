import { test, expect, request } from '@playwright/test';

const API_Account_URL = 'https://demoqa.com/Account/v1';

let registeredUserName = '';
let registeredUserId = '';
let token = '';
test.describe.serial('Book Store API flow', () => {
  test('Register New User', async ({ request }) => {
    const response = await request.post(`${API_Account_URL}/User`, {
      data: {
        userName: `vikram${Date.now()}`,
        password: 'Admin@123'
      }
    });

    expect(response.status()).toBe(201);

    const responseBody = await response.json();
    expect(responseBody).toHaveProperty('userID');
    expect(responseBody).toHaveProperty('username');
    expect(responseBody).toHaveProperty('books');

    registeredUserName = responseBody.username;
    registeredUserId = responseBody.userID;

    console.log('Registered username:', registeredUserName);
  });

  test('Generate Authentication Token', async ({ request }) => {
    expect(registeredUserName).not.toBe('');

    const response = await request.post(`${API_Account_URL}/GenerateToken`, {
      data: {
        userName: registeredUserName,
        password: 'Admin@123'
      }
    });

    expect(response.status()).toBe(200);

    const responseBody = await response.json();
    expect(responseBody).toHaveProperty('token');
    expect(responseBody).toHaveProperty('expires');
    expect(responseBody).toHaveProperty('status');
    expect(responseBody).toHaveProperty('result');
    token = responseBody.token;
    console.log(responseBody);
  });

  test('Is user Authorized',async({request})=>{
       const response = await request.post(`${API_Account_URL}/Authorized`,{
            data:{
                 userName: registeredUserName,
                 password: 'Admin@123'
            }
        })
         expect(response.status()).toBe(200);

         const responseBody = await response.json();
         console.log(responseBody)
  })

  test('Delete user Account',async({request})=>{
    expect(registeredUserId).not.toBe('');
    expect(token).not.toBe('');
      const response =  await request.delete(`${API_Account_URL}/User/${registeredUserId}`,{
         headers:{
            'Authorization': `Bearer ${token}`
         }  
        })
        expect(response.status()).toBe(204);
  })
});