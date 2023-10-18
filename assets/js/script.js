// Assignment Code
var generateBtn = document.querySelector("#generate");

// Variables
    var passwordText = "";
    var password = "";
    var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lowercase = "asbcdefghijklmnopqrstuvwxyz";
    var numbers = "0123456789";
    var symbols = "!£$%^&*#";
    var keyLength = "";
    var multiSelect = "";
    var randomKey = "";
    var upperABC = "";
    var lowerABC = "";
    var numb = "";
    var symb = "";

    function getPassword() {
    keyLength = prompt("How long would you like the password to be?", "Enter a number between 8 to 128.");
          
    if (keyLength < 8 || keyLength > 128 || isNaN(keyLength)) {
      prompt("The password must be between 8 and 128 characters in length. Enter another number.");
    return;

  } else {
  upperABC = confirm("The password will contain uppercase letters.");
  lowerABC = confirm("The password will contain lowercase letters.");
  numb = confirm("The password will contain numbers.");
  symb = confirm("The password will contain symbols.");
  }

  if (upperABC) {multiSelect += uppercase;}
  if (lowerABC) {multiSelect += lowercase;}
  if (numb) {multiSelect += numbers;}
  if (symb) {multiSelect += symbols;}
 
  for (i = 0; i < keyLength; i++) {

      randomKey += multiSelect[Math.floor(Math.random() * multiSelect.length)]
  }
  return(randomKey);
}

// Write password to the #password input. The text box area where the newly generated password will appear.
  passwordText = document.querySelector("#password");
  function writePassword(randomKey) {
  if (password.length === 0) {
      return;
  }
  passwordText.valueOf = randomKey;
}

  generateBtn.addEventListener("click", function () { writePassword(getPassword()) });

  