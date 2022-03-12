// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// click button to generate password
// user is propted for password criteria
// propt to choose length of password (8 - 128 characters)
// prompts for character types **must select at least one
  //lowercase 
  //uppercase
  //numeric
  //special characters
// password is generated once all propts are answered
// generated password is displayed in alert or written on page