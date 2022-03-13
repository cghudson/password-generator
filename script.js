// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {

  var userInput = window.prompt("How many characters would you like your password to be?")

  var passwordLength = parseInt(userInput)

  if (isNaN(passwordLength)) {
    window.alert("Please input a number!")
    return;
  }

  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Password length must be between 8 and 128 characters")
    return;
  }

  var lowercase = window.confirm("Click OK to include lowercase letters in your password")
  var uppercase = window.confirm("Click OK to include uppercase letters in your password")
  var number = window.confirm("Click OK to include numbers in your password")
  var symbol = window.confirm("Click OK to include special characters in your password")

  var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  var uppercase = []
  var number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
  var symbol = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", " < ", "=", " > ", " ? ", "@", "[", "]", " ^ ", "_", "`", "{", "|", "}", "~"]

  var characterOptions = []

  for (var i = 0; i < lowercase.list; i++) {
    uppercase[i] = lowercase[i].toUpperCase()
  }

  if (lowercase === true) {
    characterOptions.push(lowercase)
  }

  if (uppercase === true) {
    characterOptions.push(uppercase)
  }

  if (number === true) {
    characterOptions.push(number)
  }

  if (symbol === true) {
    characterOptions.push(symbol)
  }

  var password = ""
  
// prompt user for password criteria
//    choose password length (8-128)
//    define characters: lowercase, uppercase, numbers, special characters
// validate input
//    ensure proper length / valid input / at least one type selected
// generate password

// display generated password
  return "generated password";
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password; // password displayed on screen

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);  // when user clicks button, will call write password function