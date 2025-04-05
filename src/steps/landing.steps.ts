import { Given, When } from "@cucumber/cucumber";
import type { CustomWorld } from "../support/world";

Given("User open Stockbit", async function (this: CustomWorld) {
  await this.getPage("LandingPage").goto();
});

When("User click login on landing page", async function (this: CustomWorld) {
  await this.getPage("LandingPage").clickLogin();
});
