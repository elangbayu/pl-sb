import { When } from "@cucumber/cucumber";
import type { CustomWorld } from "../support/world";

When(
  "User fill username as {string}",
  async function (this: CustomWorld, username: string) {
    await this.loginPage.inputUsername(username);
  }
);

When(
  "User fill password as {string}",
  async function (this: CustomWorld, password: string) {
    await this.loginPage.inputPassword(password);
  }
);

When("User click login on login page", async function (this: CustomWorld) {
  await this.loginPage.clickLogin();
});
