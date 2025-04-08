import { Then, When } from "@cucumber/cucumber";
import { CustomWorld } from "../support/world";
import { expect } from "@playwright/test";

When("User skip avatar selection popup", async function (this: CustomWorld) {
  await this.getPage("StreamPage").clickSkipAvatarSelectionPopup();
});

Then("User see stream page", async function (this: CustomWorld) {
  expect(
    (await this.getPage("StreamPage").getStreamNavigationElement()).isVisible()
  ).toBe(true);
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
    expect(this.getPage("StreamPage").getSearchSuggestionsText()).toEqual(
      query
    );
  }
);
