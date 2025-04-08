import { Then } from "@cucumber/cucumber";
import { CustomWorld } from "../support/world";
import { expect } from "@playwright/test";

Then("User see profile page", async function (this: CustomWorld) {
  expect(await this.getPage("ProfilePage").isUsernameDisplayed()).toBe(true);
});
