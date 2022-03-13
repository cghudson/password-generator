// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  
// prompt user for password criteria
//    choose password length (8-128)
//    define characters: lowercase, uppercase, numbers, special characters
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var number = "1234567890";
var specialChar = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

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