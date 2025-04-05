import {
  Browser,
  BrowserContext,
  chromium,
  devices,
  Page,
} from "@playwright/test";
import { LandingPage } from "../pages/LandingPage";
import { After, Before, setWorldConstructor, World } from "@cucumber/cucumber";
import { LoginPage } from "../pages/LoginPage";
import { StreamPage } from "../pages/StreamPage";

export class CustomWorld extends World {
  browser!: Browser;
  context!: BrowserContext;
  page!: Page;
  landingPage!: LandingPage;
  loginPage!: LoginPage;
  streamPage!: StreamPage;
}

setWorldConstructor(CustomWorld);

Before(async function (this: CustomWorld) {
  const device = devices["Desktop Chrome"];
  this.browser = await chromium.launch({
    channel: "chrome",
    headless: false,
    args: ["--start-maximized"],
  });
  this.context = await this.browser.newContext({
    ...device,
    deviceScaleFactor: undefined,
    viewport: null,
  });
  this.page = await this.context.newPage();
  this.landingPage = new LandingPage(this.page);
  this.loginPage = new LoginPage(this.page);
  this.streamPage = new StreamPage(this.page);
});

After(async function () {
  await this.page.close();
  await this.context.close();
  await this.browser.close();
});
