import { When } from "@cucumber/cucumber";
import type { CustomWorld } from "../support/world";

When(
  "User fill username as {string}",
  async function (this: CustomWorld, username: string) {
    await this.getPage("LoginPage").inputUsername(username);
  }
);

When(
  "User fill password as {string}",
  async function (this: CustomWorld, password: string) {
    await this.getPage("LoginPage").inputPassword(password);
  }
);

When("User click login on login page", async function (this: CustomWorld) {
  await this.getPage("LoginPage").clickLogin();
});
