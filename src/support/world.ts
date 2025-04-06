import {
  After,
  Before,
  setDefaultTimeout,
  setWorldConstructor,
  World,
} from "@cucumber/cucumber";
import * as Pages from "../pages";
import {
  ActResult,
  Browser,
  BrowserContext,
  Page,
  Stagehand,
} from "@browserbasehq/stagehand";
import { CustomOpenAIClient } from "./customOpenAI_client";
import OpenAI from "openai";

export class CustomWorld extends World {
  browser!: Browser;
  context!: BrowserContext;
  page!: Page;
  stagehand!: Stagehand;
  private pageObjects = new Map<
    string,
    any /* eslint-disable-line @typescript-eslint/no-explicit-any */
  >();

  getPage<T extends keyof typeof Pages>(
    pageName: T
  ): InstanceType<(typeof Pages)[T]> {
    if (!this.pageObjects.has(pageName)) {
      const PageClass = Pages[pageName];
      this.pageObjects.set(pageName, new PageClass(this.page));
    }
    return this.pageObjects.get(pageName);
  }

  async actWithAI(instruction: string): Promise<ActResult> {
    return await this.page.act(instruction);
  }
}

setWorldConstructor(CustomWorld);
setDefaultTimeout(30 * 1000);

Before(async function (this: CustomWorld) {
  this.stagehand = new Stagehand({
    env: "LOCAL",
    llmClient: new CustomOpenAIClient({
      modelName: "gpt-4o",
      client: new OpenAI({
        // eslint-disable-next-line no-undef
        apiKey: process.env.LLM_API_KEY,
        // eslint-disable-next-line no-undef
        baseURL: process.env.LLM_BASE_URL,
      }),
    }),
    localBrowserLaunchOptions: {
      args: ["--window-size=1440,900", "--no-sandbox"],
      viewport: {
        width: 1440,
        height: 695,
      },
      deviceScaleFactor: 2,
    },
  });
  await this.stagehand.init();
  this.page = this.stagehand.page;
  this.context = this.page.context();
  this.browser = this.context.browser()!;
});

After(async function (this: CustomWorld) {
  await this.stagehand.close();
});
