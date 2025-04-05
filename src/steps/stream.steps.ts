import { Then, When } from "@cucumber/cucumber";
import { CustomWorld } from "../support/world";

When("User skip avatar selection popup", async function (this: CustomWorld) {
  await this.streamPage.clickSkipAvatarSelectionPopup();
});

Then("User see stream page", async function (this: CustomWorld) {
  await this.streamPage.assertStreamLoaded();
});
