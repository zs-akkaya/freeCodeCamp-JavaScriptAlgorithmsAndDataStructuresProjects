const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const result = document.getElementById("results-div");
let isValidNumber = false;

checkBtn.addEventListener("click", () => {
  isValidNumber = false;

  if (userInput.value === "") {
    alert("Please provide a phone number");
    return;
  }

  isValidNumber = userInput.value.match(
    /^1?\s*(\d{3}|\(\d{3}\))[\s-]?\d{3}[\s-]?\d{4}$/
  )
    ? true
    : false;

  result.innerText = isValidNumber
    ? `Valid US number: ${userInput.value}`
    : `Invalid US number: ${userInput.value}`;
});

clearBtn.addEventListener("click", () => {
  userInput.value = "";
  result.innerText = "";
});
