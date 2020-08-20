// What we want:
  // RANDOMLY generate a pw with certain criteria

    // define variables 

    // define arrays

    //Generates prompts for pw criteria when click button ("Onclick event")

    //Prompt user to input length between 8 and 128 characters
      //check to see if input is a number
      //check to see pw is greater than 8 char long
      //check to see if pw is less than 128 char long
      //if user does not put in length between 8 and 128 characters
        //alert that pw needs to be between that length
        //prompt again
      //if user does put in length between 8 and 128 characters
        //store inputLength as a var

      //Ask user to confirm lowercase char inclusion, store answer as var

      //Ask user to confirm uppercase char inclusion, store answer as var

]     //Ask user to confirm numeric char inclusion, store answer as var

      //Ask user to confirm special char inclusion, store answer as var

      // check to see if has at least one of: lowercase, uppercase, numeric, or special char
        //if not, alert "needs contain..."

      //randomly generate pw using user input length and criteria
        //only include lowercase, uppercase, special, or numeric that was confirmed as true 

      //display pw as an alert or writtern to page 


// eveyrthing below this needs to be edites 
       




// Assignment Code
var generateBtn = document.querySelector("#generate");

// define passwordPrompts
function passwordPrompts() {

  // vars definition
  var passwordLength;
  var lowercase = false;
  var uppercase = false;
  var numeric = false;
  var specialCharacters = false;

  // arrays
  var upperCaseArray = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ];
  var lowerCaseArray = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ];
  var numericArray = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]; 
  var specialCaseArray = [ "+", "-", "&&", "||", "!", "(", ")", "{", "}", "[", "]", "^",
  "~", "*", "?", ":"];
  var charFiller; 
  var userOptionsArray; 
  var password = ""



  // prompt for length

  // if length is NOT greaterThan 8 and lessThan 128
      //alert (must have password between 8 and 128 chars)


  //confirm: lowercase 
  //confirm: uppercase
  //confirm: numeric
  //confirm: special characters

  // check if at lease one is chosen by the user (true)


    // generate passord
    
    // if (uppercase)
      // add first char from (random upper)
      charFiller = upperCaseArray;

    // if (numeric)
      // add second char from (random)
      charFiller = numericArray;

    //if (special)
      // add third char from (random upper)
      charFiller = specialCaseArray;

    // if (lowercase)
      // for each missing letter, add a letter from the lowercase 
      // for (var i = password.length; i < passwordLength; i++ ) {
        // add char from lowercase
      }
      while(password.length < passwordLength) {
        // add char from filler
      }

    
    //alert (Please choose longer than...) or (shorter length)


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
