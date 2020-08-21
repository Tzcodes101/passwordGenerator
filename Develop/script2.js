// What we want:
// RANDOMLY generate a pw with certain criteria

// // define arrays and vars
var lowerCharArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCharArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numCharArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var specCharArr = ["+", "-", "&&", "||", "!", "(", ")", "{", "}", "[", "]", "^",
  "~", "*", "?", ":"];
// vars to store which characters user would like to include in pw 
var includelowerChar;
var includeupperChar;
var includenumChar;
var includespecChar;
//var to store pw as it's being made
var randomPw = "";
//var to store types of characters for pw selection as it's being made
var randomArr = [];
// var to store users desired pw length
var pwLength;
// var to store object of user choices for pw 
var charChoices;
// chars guaranteed to be in pw
var guaranteedChar = [];
var options;
var password;

//function to prompt user to input length between 8 and 128 characters, ensuring answer is parsed as an integer, not a string
function lengthChoice() {
  var pwLength = parseInt(
    prompt("Input desired password length:")
  );

  //check to see if input is a number
  if (isNaN(pwLength) === true) {
    alert("Please input a number value for password length.");
    // have user input length again
    lengthChoice();
  }
}


//check to see pw is greater than 8 char long and less than 128 char long, prompts again if answer evaluates to false
if (pwLength < 8 || pwLength > 128) {
  alert("Please input a password length between 8 and 128 numbers long.")
  // have user input length again
  lengthChoice();
} else {
  //call character selection function
  charConfirm();
}


//define character selection function
function charConfirm() {

  //Ask user to confirm lowercase char inclusion
  includelowerChar = confirm(
    "Click OK to include lowercase letters in your password."
  );

  // if loweChar evaluates to true, then add the lowerCharArr values to randomArr
  if (includelowerChar) {
    Array.prototype.push.apply(randomArr, lowerCharArr)
  }
  // check to see if lowerCharArr added to randomArr
  console.log(randomArr);

  //Ask user to confirm uppercase char inclusion
  includeupperChar = confirm(
    "Click OK to include uppercase letters in your password."
  );

  // if upperChar evaluates to true, then add the upperCharArr values to randomArr
  if (includeupperChar) {
    Array.prototype.push.apply(randomArr, upperCharArr)
  }
  // check to see if upperrCharArr added to randomArr
  console.log(randomArr); 3

  //Ask user to confirm numeric char inclusion
  includenumChar = confirm(
    "Click OK to include numeric characters in your password."
  );

  // if numChar evaluates to true, then add the numCharArr values to randomArr
  if (includenumChar) {
    Array.prototype.push.apply(randomArr, numCharArr)
  }
  // check to see if numCharArr added to randomArr
  console.log(randomArr);

  //Ask user to confirm special char inclusion
  includespecChar = confirm(
    "Click OK to include special characters in your password."
  );

  // if specChar evaluates to true, then add the specCharArr values to randomArr
  if (includespecChar) {
    Array.prototype.push.apply(randomArr, specCharArr)
  }
  // check to see if specCharArr added to randomArr
  console.log(randomArr);

  // check to see if has at least one of: lowercase, uppercase, numeric, or special char
  if (
    includelowerChar === false && includeupperChar === false && includenumChar === false && includespecChar === false
  ) {
    //alert "needs contain..."
    alert(
      "Your password must contain at least one lowercase letter, uppercase letter, numeric character, or special character."
    );
    // have user make selections again
    charConfirm();
  }
}

// else {
//   //turn pwLength into a string, then an array to use in for loop
//   pwLength = num.toString().split('');
//   // if all pw conditions met, generate a password, that is the user specified length of pwLength
//   for (var i = 0; i < pwLength.length; i++) {
//     // and randomly chooses characters from the randomArr
//     randomPw = randomArr[Math.floor(Math.random() * randomArr.length)];
//     return randomPw;
//   }
// }
// }

// create an object to store user character selections
charChoices = {
  pwlength: pwLength,
  includelowerChar: includelowerChar,
  includeupperChar: includeupperChar,
  includenumChar: includenumChar,
  includespecChar: includespecChar,

};

// define function to select random character from randomArr
function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * randomArr.length);
  var randChar = arr[randIndex];
  return randChar;
}

// define function to generate password with user choices
function generatePassword() {

  var options = getPasswordOptions();

  randomPw;
  randomArr;
  guaranteedChar;

  // push random char from lowerCharArr to guaranteed chars
  if (options.includelowerChar) {
    guaranteedChars.push(getRandom(lowerCharArr));
  }

  // push random char from upperCharArr to guaranteed chars
  if (options.includeupperChar) {
    guaranteedChars.push(getRandom(upperCharArr));
  }

  // push random char from numCharArr to guaranteed chars
  if (options.includenumChar) {
    guaranteedChars.push(getRandom(numCharArr));
  }

  // push random char from specCharArr to guaranteed chars
  if (options.includespecChar) {
    guaranteedChars.push(getRandom(specCharArr));
  }

  // for loop to generate a pw of users input length
  for (var i = 0; i < options.length; i++) {
    var randomArr = getRandom(randomArr);
    result.push(randomArr);
  }

  // mix in at least one of each guaranteed char 
  for (var i = 0; i < guaranteedChar.length; i++) {
    result[i] = guaranteedChar[i];
    // turn result into a string and pass into write password
    return result.join("");
  }
}

console.log(password)

//reference generate button element by id
var generateBtn = document.querySelector('#generate');
return generateBtn;

//write password to the password input
function writePassword () {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');
}

lengthChoice();


//randomPw += ......

//display pw as an alert or writtern to page

