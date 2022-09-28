// @ts-check
const { test, expect } = require('@playwright/test');

test('homepage has Playwright in title and get started link linking to the intro page', async ({ page }) => {
  
  await page.goto('https://www.redmine.org/');
    await expect(page).toHaveTitle(/Overview - Redmine/);
    const getStarted = page.locator("[href$='/account/register']");
    await getStarted.click();
      await expect(page).toHaveURL(/.*register/);
 await page.locator("#user_login").fill("Dmytro_rud");
 await page.locator("#user_password").fill("");
  await page.locator("#user_password_confirmation").fill("1234");
 await page.locator("#user_firstname").fill("Dmytro");
  await page.locator("#user_lastname").fill("Rudenko");
  await page.locator("#user_mail").fill("rudenko@mail.com");
 await page.locator("[name$='commit']").click();
  await page.locator('text=Пароль не совпадает с подтверждением', 'text=Пароль недостаточной длины (не может быть меньше 4 символа)').isVisible();
   

  
  await page.goto('https://www.redmine.org/account/register');
          await expect(page).toHaveURL(/.*register/);
      await page.locator("#user_login").fill("Dmytro_rud");
      await page.locator("#user_password").fill("1234");
       await page.locator("#user_password_confirmation").fill("");
      await page.locator("#user_firstname").fill("Dmytro");
       await page.locator("#user_lastname").fill("Rudenko");
       await page.locator("#user_mail").fill("rudenko@mail.com");
      await page.locator("[name$='commit']").click();
      await page.locator('text=Пароль не совпадает с подтверждением').isVisible();

  
  await page.goto('https://www.redmine.org/account/register');
          await expect(page).toHaveURL(/.*register/);
     await page.locator("#user_login").fill("");
    await page.locator("#user_password").fill("1234");
     await page.locator("#user_password_confirmation").fill("1234");
    await page.locator("#user_firstname").fill("Dmytro");
     await page.locator("#user_lastname").fill("Rudenko");
     await page.locator("#user_mail").fill("rudenko@mail.com");
    await page.locator("[name$='commit']").click();
  await page.locator('text=Пользователь не может быть пустым').isVisible();


  await page.goto('https://www.redmine.org/account/register');
         await expect(page).toHaveURL(/.*register/);
      await page.locator("#user_login").fill("Dmytro_rud");
      await page.locator("#user_password").fill("1234");
       await page.locator("#user_password_confirmation").fill("1234");
      await page.locator("#user_firstname").fill("");
       await page.locator("#user_lastname").fill("Rudenko");
       await page.locator("#user_mail").fill("rudenko@mail.com");
      await page.locator("[name$='commit']").click();
    await page.locator('text=Имя не может быть пустым').isVisible();
  
   

  await page.goto('https://www.redmine.org/account/register');
          await expect(page).toHaveURL(/.*register/);
      await page.locator("#user_login").fill("Dmytro_rud");
      await page.locator("#user_password").fill("1234");
       await page.locator("#user_password_confirmation").fill("1234");
      await page.locator("#user_firstname").fill("Dmytro");
       await page.locator("#user_lastname").fill("Rudenko");
       await page.locator("#user_mail").fill("");
      await page.locator("[name$='commit']").click();
    await page.locator('text=Email не может быть пустым').isVisible();
  
});
