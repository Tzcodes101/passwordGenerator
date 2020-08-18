// Assignment Code
var generateBtn = document.querySelector("#generate");

// define passwordPrompts
function passwordPrompts() {

  // vars definition
  var lenth;
  var lowercase = false;
  var uppercase = false;
  var numeric = false;
  var specialCharacters = false;

  // prompt for length

  // if length is NOT greaterThan 8 and lessThan 128
      //alert (must have password between 8 and 128 chars)


  //confirm: lowercase 
  //confirm: uppercase
  //confirm: numeric
  //confirm: special characters

  // check if at lease one is chosen by the user (true)


    // generate passord
    
    
    // alert password:
    // return password:
}

// define generatePassword
function generatePassword() {

}

// Write password to the #password input
function writePassword() {
  
  // call generatePassword
  var password = passwordPrompts ();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
