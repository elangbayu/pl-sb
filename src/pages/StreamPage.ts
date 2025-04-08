import { Locator } from "@playwright/test";
import { Page } from "@browserbasehq/stagehand";
import { AvatarSelectionModal } from "../components/AvatarSelectionModal";
import { actWithCache } from "../support/utils";
import { z } from "zod";

export class StreamPage {
  readonly avatarSelectionPopup: AvatarSelectionModal;
  private streamWidgetNavigation: Locator;

  constructor(private page: Page) {
    this.avatarSelectionPopup = new AvatarSelectionModal(page);
    this.streamWidgetNavigation = page.locator(
      "xpath=//div[@data-cy='stream-widget-navigation']"
    );
  }

  async clickSkipAvatarSelectionPopup() {
    await this.avatarSelectionPopup.clickSkip();
  }

  async isStreamWidgetVisible() {
    return await this.streamWidgetNavigation.isVisible();
  }

  async search(query: string) {
    await actWithCache(
      this.page,
      `Type '${query}' into the search box in the top navigation bar then press return/enter`
    );
  }

  async getSearchSuggestionsText() {
    const { text } = await this.page.extract({
      instruction:
        "Extract the text from the search suggestions result right below the search input in navigation menu bar",
      schema: z.object({
        text: z.string(),
      }),
    });
    return text;
  }
}
