import { Then, When } from "@cucumber/cucumber";
import { CustomWorld } from "../support/world";

When("User skip avatar selection popup", async function (this: CustomWorld) {
  await this.getPage("StreamPage").clickSkipAvatarSelectionPopup();
});

Then("User see stream page", async function (this: CustomWorld) {
  await this.getPage("StreamPage").assertStreamLoaded();
});

When(
  "User search for {string}",
  async function (this: CustomWorld, query: string) {
    await this.getPage("StreamPage").search(query);
  }
);

Then(
  "User see {string} in the search result suggestions list",
  async function (this: CustomWorld, query: string) {
    await this.getPage("StreamPage").assertSearchResultSuggestions(query);
  }
);
