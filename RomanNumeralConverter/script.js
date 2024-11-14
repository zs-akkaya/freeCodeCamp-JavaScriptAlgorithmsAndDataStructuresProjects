const number = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

convertBtn.addEventListener("click", () => {
  if (isNaN(number.value) || !number.value) {
    output.innerText = "Please enter a valid number";
    return;
  } else if (parseInt(number.value) < 0) {
    output.innerText = "Please enter a number greater than or equal to 1";
    return;
  } else if (parseInt(number.value) > 3999) {
    output.innerText = "Please enter a number less than or equal to 3999";
    return;
  } else {
    let roman = "";
    let numberValue = parseInt(number.value);
    while (numberValue >= 1) {
      if (numberValue >= 1000) {
        roman += "M";
        numberValue -= 1000;
      } else if (numberValue >= 900) {
        roman += "CM";
        numberValue -= 900;
      } else if (numberValue >= 500) {
        roman += "D";
        numberValue -= 500;
      } else if (numberValue >= 400) {
        roman += "CD";
        numberValue -= 400;
      } else if (numberValue >= 100) {
        roman += "C";
        numberValue -= 100;
      } else if (numberValue >= 90) {
        roman += "XC";
        numberValue -= 90;
      } else if (numberValue >= 50) {
        roman += "L";
        numberValue -= 50;
      } else if (numberValue >= 40) {
        roman += "XL";
        numberValue -= 40;
      } else if (numberValue >= 10) {
        roman += "X";
        numberValue -= 10;
      } else if (numberValue >= 9) {
        roman += "IX";
        numberValue -= 9;
      } else if (numberValue >= 5) {
        roman += "V";
        numberValue -= 5;
      } else if (numberValue >= 4) {
        roman += "IV";
        numberValue -= 4;
      } else if (numberValue >= 1) {
        roman += "I";
        numberValue -= 1;
      }
    }
    output.innerText = roman;
  }
});
