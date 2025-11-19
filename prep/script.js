const textarea = document.querySelector("textarea");
const remainingCharacters = textarea.maxLength - textarea.value.length;

const charactersLeftP = document.querySelector("#character-limit-info");
charactersLeftP.textContent = `You have ${remainingCharacters} characters remaining`;

function updateCharacterLimit() {
    console.log(
        "keyup event has fired... The browser called updateCharacterLimit..."
    );
}

textarea.addEventListener("keyup", updateCharacterLimit);
