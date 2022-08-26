# Family View Anti-Prompt
### Prevents Chrome from asking to save your Steam Family View PIN as a password.

_An extension for Google Chrome._

![FamilyView_Screenshot01](https://user-images.githubusercontent.com/280814/186867223-25c23fcc-0a20-41de-8096-e080d84500b4.jpg)

[Steam's Family View](https://help.steampowered.com/en/faqs/view/6B1A-66BE-E911-3D98) gate page uses a password field for the Family View PIN, which makes Chrome ask if you'd like to update your password. Not helpful.

To prevent this annoyance, this extension:
- Clones the PIN password field as a regular text field
- Removes the original password field
- Sets a custom font for the new field, to render the PIN as squares

... all in an effort to remove the nag of being prompted to update your password when using Steam Family View.

_This is an unofficial extension. Steam is a product of Valve Corp._

# Installation instructions

Until Google approves the extension for listing on the Chrome Web Store, the extension has to be manually installed:

1. Download the repository to your harddrive somewhere.

2. In Chrome, go to `chrome://extensions`

3. Enable "Developer mode" in the top-right corner.

4. Click the <kbd>Load unpacked</kbd> button.

5. Choose the deepest "FamilyViewAntiPrompt" folder, which contains the `manifest.json` file.

Once installed, your Extensions page should look something like the following:

<img width="589" alt="extensions" src="https://user-images.githubusercontent.com/280814/186870958-2e47a125-8f8a-4d0b-a9d2-9f5fa2210235.png">

For updates, please view the [Steam discussion thread](https://steamcommunity.com/groups/familyview/discussions/0/1745644917623322853/).
