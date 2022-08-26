// This script clones the PIN password field, removes the original field, then sets a custom font for the field --
// all to prevent Chrome from asking the user to update their Steam password.

// Get the PIN password box.
const passwordBox = document.getElementById("steam_parental_password_box");
if (passwordBox != null) {

	// Record if password box is focused.
	const focus = document.activeElement == passwordBox;

	// Change the password box to a plain text input field.
	passwordBox.type = "text";

	// Since Chrome initially saw the box as a password field, Chrome still thinks it's a password worth nagging about, so we have to get creative...

	// Get the password box's parent element, then clone the password box.
	const parentElement = passwordBox.parentElement;
	const passwordBox_new = passwordBox.cloneNode();

	// Remove the original password box to make Chrome forget about it.
	passwordBox.remove();

	// BLur the box to mask the numbers?
	// passwordBox.style += "; filter: blur(.25rem);";

	// Blur the text to mask the numbers?
	// passwordBox_new.style += "; color: transparent; text-shadow: 0 0 10px rgba(255,255,255,1);";

	// Set a custom font that renders each number as a square.
	const fontURL = chrome.runtime.getURL("FamilyViewMask.ttf");
	const css = `
		@font-face {
		  font-family: 'FamilyViewMask';
		  src: url(`+fontURL+`) format('truetype');
		}
	`;
	const style = document.createElement('style');
	style.textContent = css;
	document.head.append(style);
	passwordBox_new.style += "; font-family: FamilyViewMask;";

	// Disable autocomplete and spellcheck.
	passwordBox_new.autocomplete = false;
	passwordBox_new.spellcheck = false;

	// Insert the cloned password box into the DOM, which is now just a regular text field, so Chrome won't interpret it as a password at all.
	parentElement.prepend(passwordBox_new);

	// Focus the new password box.
	if (focus) {
		passwordBox_new.focus();
	}

	// When the password box's input changes...
	const OnPasswordBoxChanged = () => {

		// Restrict the PIN to just numbers.
		const newValue = passwordBox_new.value.replace(/\D/g, '');
		passwordBox_new.value = newValue;

		// Ensure the Submit button gets enabled appropriately.
		const submitButton = document.getElementById("submit_btn");
		if (passwordBox_new.value.length > 0) {
			submitButton.disabled = false;
			submitButton.classList.remove("btn_disabled");
		}
		else {
			submitButton.disabled = true;
			submitButton.classList.add("btn_disabled");
		}
	};
	passwordBox_new.addEventListener("input", OnPasswordBoxChanged);
}