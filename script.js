// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//randomized list function
function randomInt(min, max) {
  if (!max) {
    max = min
    min = 0
  }

  var rand = Math.random()
  return Math.floor(min*(1 - rand) + rand*max)
}

function getRandomItem(list) {
  return list[randomInt(list.length)]
}

// generate password function
function generatePassword() {

  var userInput = window.prompt("How many characters would you like your password to be?")

  var passwordLength = parseInt(userInput)

  //password length and input prompts
  if (isNaN(passwordLength)) {
    window.alert("Please input a number!")
    return;
  }

  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Password length must be between 8 and 128 characters")
    return;
  }

  // password criteria prompts
  var lowercase = window.confirm("Click OK to include lowercase letters in your password")
  var uppercase = window.confirm("Click OK to include uppercase letters in your password")
  var number = window.confirm("Click OK to include numbers in your password")
  var symbol = window.confirm("Click OK to include special characters in your password")

  //password character options
  var lowercaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  var uppercaseList = []
  var numberList = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
  var symbolList = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"]

  var characterOptions = []

  //change lowercase to uppercase characters
  for (var i = 0; i < lowercaseList.length; i++) {
    uppercaseList[i] = lowercaseList[i].toUpperCase()
  }

  //character option choices for user
  if (lowercase === true) {
    characterOptions.push(lowercaseList)
  }

  if (uppercase === true) {
    characterOptions.push(uppercaseList)
  }

  if (number === true) {
    characterOptions.push(numberList)
  }

  if (symbol === true) {
    characterOptions.push(symbolList)
  }

  //alert to make sure at least one character option chosen
  if (characterOptions.length === 0) {
    window.alert("Please select at least one character option!")
    return;
  }

  //generate random password with user selected criteria
  var password = ""

  for (var i = 0; i < passwordLength; i++) {
    var randomList = getRandomItem(characterOptions)
    var randomChar = getRandomItem(randomList)
    password += randomChar
  }
  
  return password
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password; // password displayed on screen

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);  // when user clicks button, will call write password function