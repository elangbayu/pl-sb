import { When } from "@cucumber/cucumber";
import { CustomWorld } from "../support/world";
import { actWithCache } from "../support/utils";

When("User do {string}", async function (this: CustomWorld, action: string) {
  await actWithCache(this.page, action);
});
