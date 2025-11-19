const textarea = document.querySelector("textarea");
const remainingCharacters = textarea.maxLength - textarea.value.length;

const charactersLeftP = document.querySelector("#character-limit-info");
charactersLeftP.textContent = `You have ${remainingCharacters} characters remaining`;
