import {
  Browser,
  BrowserContext,
  chromium,
  devices,
  Page,
} from "@playwright/test";
import { After, Before, setWorldConstructor, World } from "@cucumber/cucumber";
import * as Pages from "../pages";

type PageObj = InstanceType<(typeof Pages)[keyof typeof Pages]>;

export class CustomWorld extends World {
  browser!: Browser;
  context!: BrowserContext;
  page!: Page;
  private pageObjects = new Map<string, any>();

  getPage<T extends keyof typeof Pages>(
    pageName: T
  ): InstanceType<(typeof Pages)[T]> {
    if (!this.pageObjects.has(pageName)) {
      const PageClass = Pages[pageName];
      this.pageObjects.set(pageName, new PageClass(this.page));
    }
    return this.pageObjects.get(pageName);
  }
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
});

After(async function () {
  await this.page.close();
  await this.context.close();
  await this.browser.close();
});
