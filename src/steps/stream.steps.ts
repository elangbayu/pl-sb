import { Then, When } from "@cucumber/cucumber";
import { CustomWorld } from "../support/world";

When("User skip avatar selection popup", async function (this: CustomWorld) {
  await this.getPage("StreamPage").clickSkipAvatarSelectionPopup();
});

Then("User see stream page", async function (this: CustomWorld) {
  await this.getPage("StreamPage").assertStreamLoaded();
});
