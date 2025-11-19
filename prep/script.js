const textarea = document.querySelector("textarea");
const remainingCharacters = textarea.maxLength - textarea.value.length;
console.log(remainingCharacters);
