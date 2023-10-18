// Button code
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", function () { writePassword(getPassword()) });

// A function to get the password
    function getPassword() {
    
// Password variables for allowable passwords characters
    var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var lower = "abcdefghijklmnopqrstuvwxyz"
    var numbers = "0123456789"
    var signs = "!£$%^&*#"
    var characters = "";
    var randomKey = "";

// First prompt to explain criteria
    var keyLength = prompt("The password must be between 8 to 128 characters long", "Please type the length");
    
// If user selects wrong criteria, this section will explain they need to try again.
    if (keyLength < 8 || keyLength > 128 || isNaN(keyLength)) {
        alert("The password must be between 8 and 128 characters in length. Try Again.");        
        return;

// Confirmation to user of values to be used in password.
    } else {
    var uppercase = confirm("The password will have uppercase letters.");
    if (uppercase) {characters += upper;}
    var lowercase = confirm("The password will have lowercase letters.");
    if (lowercase) {characters += lower;}
    var symbols = confirm("The password will have symbols.");
    if (symbols) {characters += signs;}
    var digits = confirm("The password will have numbers.");
    if (digits) {characters += numbers;}
    
    }

    for (i = 0; i < keyLength; i++) {

// Making the password from the criteria above
        randomKey += characters[Math.floor(Math.random() * characters.length)]
    }
    return(randomKey);
}

// Displaying password from the criteria above
    var passwordText = document.querySelector("#password");
    function writePassword(randomKey) {
    if (password.length === 0) {
        return;
    }
    passwordText.value = randomKey;
}


    