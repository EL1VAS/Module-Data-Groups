const textarea = document.querySelector("textarea");
const remainingCharacters = textarea.maxLength - textarea.value.length;
const limitDisplay = document.querySelector("#character-limit-info");
limitDisplay.innerText = "You have loaded the page.";
