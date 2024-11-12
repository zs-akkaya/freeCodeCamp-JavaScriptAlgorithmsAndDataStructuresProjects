const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");
let isPalindrome = false;

checkBtn.addEventListener("click", () => {
  isPalindrome = false;

  if (!textInput.value) {
    alert("Please input a value");
    return;
  }
  const textValue = textInput.value.replace(/[^A-Za-z0-9]/gi, "").toLowerCase();

  if (textValue.split("").reverse().join("") === textValue) {
    isPalindrome = true;
  }

  result.innerText = isPalindrome
    ? textInput.value + " is a palindrome"
    : textInput.value + " is not a palindrome";
});
