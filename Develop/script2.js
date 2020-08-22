// What we want:
// RANDOMLY generate a pw with certain criteria

// // define arrays and vars
var lowerCharArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCharArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numCharArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var specCharArr = ["+", "-", "&&", "||", "!", "(", ")", "{", "}", "[", "]", "^",
  "~", "*", "?", ":"];
// vars to store which characters user would like to include in pw 
var includeLowerChar;
var includeUpperChar;
var includeNumChar;
var includeSpecChar;
//var to store pw as it's being made
var randomPw = "";
//var to store types of characters for pw selection as it's being made
var pwOptionsArr = [];
var pwLength;

lengthChoice();
//function to prompt user to input length between 8 and 128 characters, ensuring answer is parsed as an integer, not a string
function lengthChoice() {
  var pwLength = parseInt(
    prompt("Input desired password length:")
  );

  //check to see if input is a number
  if (isNaN(pwLength) === true) {
    alert("Please input a number value for password length.");
    lengthChoice();
  }

  //check to see pw is greater than 8 char long and less than 128 char long, prompts again if answer evaluates to false
  if (pwLength < 8 || pwLength > 128) {
    alert("Please input a password length between 8 and 128 numbers long.")
    // have user input length again
    lengthChoice();
  }
  //call character selection function
  charConfirm();
}

//define character selection function
function charConfirm() {

  //Ask user to confirm lowercase char inclusion
  includeLowerChar = confirm(
    "Click OK to include lowercase letters in your password."
  );

  // if loweChar evaluates to true, then add the lowerCharArr values to randomArr
  if (includeLowerChar) {
    Array.prototype.push.apply(pwOptionsArr, lowerCharArr)
  }
  // check to see if lowerCharArr added to randomArr
  console.log(pwOptionsArr);

  //Ask user to confirm uppercase char inclusion
  includeUpperChar = confirm(
    "Click OK to include uppercase letters in your password."
  );

  // if upperChar evaluates to true, then add the upperCharArr values to randomArr
  if (includeUpperChar) {
    Array.prototype.push.apply(pwOptionsArr, upperCharArr)
  }
  // check to see if upperrCharArr added to randomArr
  console.log(pwOptionsArr); 3

  //Ask user to confirm numeric char inclusion
  includeNumChar = confirm(
    "Click OK to include numeric characters in your password."
  );

  // if numChar evaluates to true, then add the numCharArr values to randomArr
  if (includeNumChar) {
    Array.prototype.push.apply(pwOptionsArr, numCharArr)
  }
  // check to see if numCharArr added to randomArr
  console.log(pwOptionsArr);

  //Ask user to confirm special char inclusion
  includeSpecChar = confirm(
    "Click OK to include special characters in your password."
  );

  // if specChar evaluates to true, then add the specCharArr values to randomArr
  if (includeSpecChar) {
    Array.prototype.push.apply(pwOptionsArr, specCharArr)
  }
  // check to see if specCharArr added to randomArr
  console.log(pwOptionsArr);

  // check to see if has at least one of: lowercase, uppercase, numeric, or special char
  if (
    includeLowerChar === false && includeUpperChar === false && includeNumChar === false && includeSpecChar === false
  ) {
    //alert "needs contain..."
    alert(
      "Your password must contain at least one lowercase letter, uppercase letter, numeric character, or special character."
    );
    // have user make selections again
    charConfirm();
  }
}

//object to store user input
var userPwChoices = {
  includeLowerChar: includeLowerChar,
  includeUpperChar: includeUpperChar,
  includeNumChar: includeNumChar,
  includeSpecChar: includeSpecChar,

}

// function to get random character from an array
function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * randomArr.length);
  var randChar = arr[randIndex];
  return randChar;
}
// I need a way to add characters to randomPw from the pwOptionsArr the number of times that the user input for pwLength
//generate password function

generatePassword();
function generatePassword() {

  // for loop to iterate over the passord length from the options object, selecting random indices
  for (var i = 0; i < pwLength; i++) {
    var pwOptionsArr = getRandom(pwOptionsArr);
    randomPw.push(pwOptionsArr);
  }
  return randomPw.join("");
}

//display pw as an alert or writtern to page

