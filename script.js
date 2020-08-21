// What we want:
// Generate a password, using random values based off user choice.
// User should choose length between 8 - 128 characters
// user must include at least one of the following:
// lower chars
// upper chars
// numeric chars
// special chars
// paswoord should be displayed on the screen

var lowerCharArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCharArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numCharArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var specCharArr = ["+", "-", "&&", "||", "!", "(", ")", "{", "}", "[", "]", "^",
  "~", "*", "?", ":"];

// add Event, so when the generate button is clicked, it triggers a series of events as defined above


// prompt user to input length
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
}

// confirm character inclusion
function charConfirm() {
    //ask to confirm lower char
    var includeLowerChar = confirm(
        "Click OK to include lowercase letters in your password."
    );

    //ask to confirm upper char
    var includeUpperChar = confirm(
        "Click OK to include uppercase letters in your password."
    );

    //ask to confirm numeric char
    var includeNumChar = confirm(
        "Click OK to include numeric characters in your password."
    );

    //ask to confirm special char
    var includeSpecChar = confirm(
        "Click OK to include special characters in your password."
    );

    // check user included at least one character type
    if (
        includeLowerChar === false && includeUpperChar === false && includeNumChar === false && includeSpecChar === false
    ) {
        //alert "needs contain..."
        alert(
            "Your password must contain at least one lowercase letter, uppercase letter, numeric character, or special character."
        );
        // have user make selections again
        charConfirm();
    } else {
        generatePassword();
    }
}


// object to store user character choices
var passwordOptions = {
    pwLength: pwLength,
    includeLowerChar: includeLowerChar,
    includeUpperChar: includeUpperChar,
    includeSpecChar: includeSpecChar,
};

// function to get random character from an array
function getRandom(arr) {
    var randIndex = Math.floor(Math.random() * randomArr.length);
    var randChar = arr[randIndex];
    return randChar;
  }

// define function to generate password with user choices 
function generatePassword() {
    var options = getPasswordOptions();
        //var to store pw as it's being made
        var result = [];

        //array to store types of char to inclue in pw
        var possibleChar = [];

        //array to hold one of each type of chosen char to make sure it is included in the pw
        var guaranteedChar = [];

    // if user chose to add lower char, add lowerCharArr to array of possible char
    if(options.includeLowerChar) {
        possibleChar = possibleChar.concat(lowerCharArr);
        //pick a random value from the lowerCharArr, and add it to the guaranteedChar array
        guaranteedChar.push(getRandom(lowerCharArr));
    }
    // if user chose to add upper char, add upperCharArr to array of possible char
    if(options.includeUpperChar) {
        possibleChar = possibleChar.concat(upperCharArr);
        //pick a random value from the upperCharArr, and add it to the guaranteedChar array
        guaranteedChar.push(getRandom(upperCharArr));
    }

    // if user chose to add numeric char, add numCharArr to array of possible char
    if(options.includeNumChar) {
        possibleChar = possibleChar.concat(numCharArr);
        //pick a random value from the numCharArr, and add it to the guaranteedChar array
        guaranteedChar.push(getRandom(numCharArr));
    }

    // if user chose to add special char, add specCharArr to array of possible char
    if(options.includeSpecChar) {
        possibleChar = possibleChar.concat(specCharArr);
        //pick a random value from the specCharArr, and add it to the guaranteedChar array
        guaranteedChar.push(getRandom(specCharArr));
    }

    // for loop to iterate over the passord length from the options object, selecting random indices
    for ( var i = 0; i < passwordOptions.length; j++) {
        var possibleChars = getRandom(possibleChars);
        result.push(possibleChars);
    }

    //mix in at least one of each guaranteed character in result
    for (var i = 0; i < guaranteedChar.length; i++) {
        result[i] = guaranteedChars[i];
    }

    //turn result into a string and pass intwo writePassword
    return result.join('');
}

//reference generate element by id
var generateBtn = document.querySelector('#generate');

// write password to the #password input
function writePassword () {
    var password = generatePassword();
    var passwordText = document.querySelector('#password');
    passwordText.value = password;
}

lengthChoice();
