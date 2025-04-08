import { Locator } from "@playwright/test";
import { Page } from "@browserbasehq/stagehand";
import { getEnvVar } from "../support/utils";
import { StreamPage } from "./StreamPage";
import { LandingPage } from "./LandingPage";

export class LoginPage {
  readonly streamPage: StreamPage;
  readonly landingPage: LandingPage;
  private usernameInput: Locator;
  private passwordInput: Locator;
  private loginButton: Locator;

  constructor(private page: Page) {
    this.streamPage = new StreamPage(page);
    this.landingPage = new LandingPage(page);
    this.usernameInput = page.locator("#username");
    this.passwordInput = page.locator("#password");
    this.loginButton = page.locator("#email-login-button");
  }

  async inputUsername(username: string) {
    await this.usernameInput.fill(getEnvVar(username)!);
  }

  async inputPassword(password: string) {
    await this.passwordInput.fill(getEnvVar(password)!);
  }

  async clickLogin() {
    await this.page.waitForTimeout(1000);
    await this.loginButton.click();
  }

  async login(account: string) {
    await this.landingPage.goto();
    await this.landingPage.clickLogin();
    await this.inputUsername(account + "_USERNAME");
    await this.inputPassword(account + "_PASSWORD");
    await this.clickLogin();
    await this.streamPage.clickSkipAvatarSelectionPopup();
  }
}
