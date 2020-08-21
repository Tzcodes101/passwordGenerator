// What we want:
// RANDOMLY generate a pw with certain criteria

// // define arrays and vars
var lowerCharArr = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ];
var upperCharArr = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ];
var numCharArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]; 
var specCharArr = [ "+", "-", "&&", "||", "!", "(", ")", "{", "}", "[", "]", "^",
"~", "*", "?", ":"];
var lowerChar;
var upperChar;
var numChar;
var specChar;
var lengthChoice;
var randomArr = [];
var randomPw = "";
var charSelectionArr = [lowerChar, upperChar, numChar, specChar]

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


  //check to see pw is greater than 8 char long and less than 128 char long, prompts again if answer evaluates to false
  if (pwLength < 8 || pwLength > 128) {
    alert("Please input a password length between 8 and 128 numbers long.")
    // have user input length again
    lengthChoice(); 
  };
  //call character selection function
  charConfirm();
}

//define character selection function
function charConfirm(){

//Ask user to confirm lowercase char inclusion
lowerChar = confirm(
  "Click OK to include lowercase letters in your password."
  );

// if loweChar evaluates to true, then add the lowerCharArr values to randomArr
if (lowerChar){
  Array.prototype.push.apply(randomArr, lowerCharArr)
}
// check to see if lowerCharArr added to randomArr
console.log(randomArr);

//Ask user to confirm uppercase char inclusion
 upperChar = confirm(
  "Click OK to include uppercase letters in your password."
  );

// if upperChar evaluates to true, then add the upperCharArr values to randomArr
if (upperChar){
  Array.prototype.push.apply(randomArr, upperCharArr)
}
// check to see if upperrCharArr added to randomArr
console.log(randomArr);3

//Ask user to confirm numeric char inclusion
 numChar = confirm(
  "Click OK to include numeric characters in your password."
  );

// if numChar evaluates to true, then add the numCharArr values to randomArr
if (numChar){
  Array.prototype.push.apply(randomArr, numCharArr)
}
// check to see if numCharArr added to randomArr
console.log(randomArr);

//Ask user to confirm special char inclusion
 specChar = confirm(
  "Click OK to include special characters in your password."
  );

// if specChar evaluates to true, then add the specCharArr values to randomArr
if (specChar){
  Array.prototype.push.apply(randomArr, specCharArr)
}
// check to see if specCharArr added to randomArr
console.log(randomArr);

// check to see if has at least one of: lowercase, uppercase, numeric, or special char
if (
  lowerChar === false && upperChar === false && numChar === false && specChar === false
) {
  //alert "needs contain..."
  alert(
    "Your password must contain at least one lowercase letter, uppercase letter, numeric character, or special character."
  ); 
}
  // have user make selections again
  // charConfirm();
}

//Math.floor(Math.random()) to get random characters from randomArr
//Then add to randomPw
//randomPw += ......

//display pw as an alert or writtern to page/


lengthChoice(); 