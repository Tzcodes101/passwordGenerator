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
//object to store user input
var userPwChoices = {}

lengthChoice();
charConfirm();
var array = availablePwChar();
generatePassword();
writePassword();
//function to prompt user to input length between 8 and 128 characters, ensuring answer is parsed as an integer, not a string
function lengthChoice() {
  pwLength = parseInt(
    prompt("Input desired password length:")
  );
  console.log(pwLength);

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
}

//define character selection function
function charConfirm() {

  //Ask user to confirm lowercase char inclusion
  includeLowerChar = confirm(
    "Click OK to include lowercase letters in your password."
  );

  //Ask user to confirm uppercase char inclusion
  includeUpperChar = confirm(
    "Click OK to include uppercase letters in your password."
  );

  //Ask user to confirm numeric char inclusion
  includeNumChar = confirm(
    "Click OK to include numeric characters in your password."
  );

  //Ask user to confirm special char inclusion
  includeSpecChar = confirm(
    "Click OK to include special characters in your password."
  );

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
  //object to store user input
  userPwChoices = {
    lowerChar: includeLowerChar,
    upperChar: includeUpperChar,
    numChar: includeNumChar,
    specChar: includeSpecChar,
  }
  console.log(userPwChoices)
}

//function to create array of characters available for use in pw
function availablePwChar () {
// if loweChar evaluates to true, then add the lowerCharArr values to randomArr
if (includeLowerChar) {
  pwOptionsArr = pwOptionsArr.concat(lowerCharArr);
}
// check to see if lowerCharArr added to randomArr
console.log(pwOptionsArr);

// if upperChar evaluates to true, then add the upperCharArr values to randomArr
if (includeUpperChar) {
  pwOptionsArr = pwOptionsArr.concat(upperCharArr);
}
// check to see if upperrCharArr added to randomArr
console.log(pwOptionsArr);

// if numChar evaluates to true, then add the numCharArr values to randomArr
if (includeNumChar) {
  pwOptionsArr = pwOptionsArr.concat(numCharArr);
}
// check to see if numCharArr added to randomArr
console.log(pwOptionsArr);

// if specChar evaluates to true, then add the specCharArr values to randomArr
if (includeSpecChar) {
  pwOptionsArr = pwOptionsArr.concat(specCharArr);
}
// check to see if specCharArr added to randomArr
return pwOptionsArr
}

// function to get random character from an array
function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randChar = arr[randIndex];
  console.log(randChar)
  return randChar;
}
// I need a way to add characters to randomPw from the pwOptionsArr the number of times that the user input for pwLength
//generate password function

function generatePassword() {
  console.log("new array", array);
  // for loop to iterate over the passord length from the options object, selecting random indices
  for (var i = 0; i < pwLength; i++) {
    var pwOptionsArr = getRandom(array);
    
  }
  // return randomPw.join("");
}

// display pw as an alert or written to page 
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');
  passwordText.value = password;
}

//call functions in logical order

