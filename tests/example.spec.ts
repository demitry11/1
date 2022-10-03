import { expect, test } from "@playwright/test";
import Env from "./Pageobjects/env";
import HeadPage from "./Pageobjects/head";
import RegPage from "./Pageobjects/reg.page";
import SecurePage from "./Pageobjects/secure.page";




test("TC_001", async ({ page }) => {
  const register = new RegPage(page);
const head = new HeadPage(page);
const alert = new SecurePage(page);
  await page.goto(Env.test);
  // expect(await page.title()).toBe('/Overview - Redmine/');
  await head.clickRegisBtn();
  // expect(await page.url()).toBe(/.*register/);
  await register.enterUserName("Dmytro_rud");
  await register.enterUserPass("");
  await register.enterPassConf("1234");
  await register.enterUserFirst("Dmytro");
  await register.enterUserLast("Rudenko");
  await register.enterUserMail("rudenko@mail.com");
  await register.clickRegBtn();
  await alert.flashAlert();
  // await expect(alert.flashAlert).toHaveText('Email не может быть пустым');
  
});

test("TC_002", async ({ page }) => {
  const register = new RegPage(page);
const head = new HeadPage(page);
const alert = new SecurePage(page);
  await page.goto(Env.test);
  // await page.toHaveTitle(/Overview - Redmine/);
  await head.clickRegisBtn();
  // await expect(head).toHaveURL(/.*register/);
  await register.enterUserName("Dmytro_rud");
  await register.enterUserPass("1234");
  await register.enterPassConf("");
  await register.enterUserFirst("Dmytro");
  await register.enterUserLast("Rudenko");
  await register.enterUserMail("rudenko@mail.com");
  await register.clickRegBtn();
  await alert.flashAlert();
  // await expect(alert.flashAlert).toHaveText('Email не может быть пустым');
  
});


test("TC_003", async ({ page }) => {
  const register = new RegPage(page);
const head = new HeadPage(page);
const alert = new SecurePage(page);
  await page.goto(Env.test);
  // await page.toHaveTitle(/Overview - Redmine/);
  await head.clickRegisBtn();
  // await expect(head).toHaveURL(/.*register/);
  await register.enterUserName("");
  await register.enterUserPass("1234");
  await register.enterPassConf("1234");
  await register.enterUserFirst("Dmytro");
  await register.enterUserLast("Rudenko");
  await register.enterUserMail("rudenko@mail.com");
  await register.clickRegBtn();
  await alert.flashAlert();
  // await expect(alert.flashAlert).toHaveText('Email не может быть пустым');
  
});

test("TC_004", async ({ page }) => {
  const register = new RegPage(page);
const head = new HeadPage(page);
const alert = new SecurePage(page);
  await page.goto(Env.test);
  // await page.toHaveTitle(/Overview - Redmine/);
  await head.clickRegisBtn();
  // await expect(head).toHaveURL(/.*register/);
  await register.enterUserName("Dmytro_rud");
  await register.enterUserPass("1234");
  await register.enterPassConf("1234");
  await register.enterUserFirst("");
  await register.enterUserLast("Rudenko");
  await register.enterUserMail("rudenko@mail.com");
  await register.clickRegBtn();
  await alert.flashAlert();
  // await expect(alert.flashAlert).toHaveText('Email не может быть пустым');
  
});

test("TC_005", async ({ page }) => {
  const register = new RegPage(page);
const head = new HeadPage(page);
const alert = new SecurePage(page);
  await page.goto(Env.test);
  // await page.toHaveTitle(/Overview - Redmine/);
  await head.clickRegisBtn();
  // await expect(head).toHaveURL(/.*register/);
  await register.enterUserName("Dmytro_rud");
  await register.enterUserPass("1234");
  await register.enterPassConf("1234");
  await register.enterUserFirst("Dmytro");
  await register.enterUserLast("Rudenko");
  await register.enterUserMail("");
  await register.clickRegBtn();
  await alert.flashAlert();
  // await expect(alert.flashAlert).toHaveText('Email не может быть пустым');
  
});