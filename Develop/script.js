// What we want:
  // RANDOMLY generate a pw with certain criteria

    // // define arrays
    // var upperCaseArray = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ];
    // var lowerCaseArray = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ];
    // var numericArray = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]; 
    // var specialCaseArray = [ "+", "-", "&&", "||", "!", "(", ")", "{", "}", "[", "]", "^",
    // "~", "*", "?", ":"];
    // var charFiller; 
    // var userOptionsArray; 

    //function to prompt user to input length between 8 and 128 characters, ensuring answer is parsed as an integer, not a string
    function lengthChoice() {
      var lengthChoice = parseInt(
        prompt("Input desired password length:")
      ); 

        //check to see if input is a number
      if (isNaN(lengthChoice) === true) {
        alert("Please input a number value for password length.");
      return;
    }

    //check to see pw is greater than 8 char long and less than 128 char long, prompts again if answer evaluates to false
    if (lengthChoice !== < 8 && > 128) {
      alert("Please input a password length between 8 and 128 numbers long.")
      return;
    }
  
  //Ask user to confirm lowercase char inclusion, store answer as var
  var lowerChar = confirm(
    "Click OK to include lowercase letters in your password."
  );

  //Ask user to confirm uppercase char inclusion, store answer as var
  var upperChar = confirm(
    "Click OK to include uppercase letters in your password."
  );

  //Ask user to confirm numeric char inclusion, store answer as var
  var numChar = confirm(
    "Click OK to include numeric characters in your password."
  );

//Ask user to confirm special char inclusion, store answer as var
var specChar = confirm(
  "Click OK to include special characters in your password."
);

// check to see if has at least one of: lowercase, uppercase, numeric, or special char
if (
  lowerChar === false && upperChar === false && numChar === false && specChar === false
) {
  //if not, alert "needs contain..."
  alert("Your password must contain at least one lowercase letters, uppercase letters, numeric characters, and special characters.");
  return;
}

//randomly generate pw using user input length and criteria
  //only include lowercase, uppercase, special, or numeric choices that were  confirmed as true, using the arrays as reference to generate random values.
    // add the value to the pw

//display pw as an alert or writtern to page/
  }