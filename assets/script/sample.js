// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
//   var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);






// var password = generatePassword(15, [
//     {chars: "abcdefghijklmnopqrstuvwxyz", min: 4},  // As least 4 lowercase letters
//     {chars: "ABCDEFGHIJKLMNOPQRSTUVWXYZ", min: 1},  // At least 1 uppercase letters
//     {chars: "0123456789", min: 3},                  // At least 3 digits
//     {chars: "!@#$&*?|%+-_./:;=()[]{}", min: 2}      // At least 2 special chars
//   ]);





// function userInputs()
//   {
//     var password;
//     var length = window.prompt("Please choose a length of 8-128 charaters for a Password");
//     var lower = window.confirm("would you like to choose lowercase character");
//     var upper = window.confirm("would you like to choose uppercase character");
//     var numeric = window.confirm("would you like to choose numeric character");
//     var special = window.confirm("would you like to choose special character");
//     var userInputs = [length, lower,upper,numeric,special];
//     return userInputs;

//   }





// //function generatePassword(lower, upper, number, symbol, length)
// function generatePassword() {
//   var password;
//     // return  Array(5)
//     // .fill('0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz~!@-#$')
//     // .map(x => x[Math.floor(crypto.getRandomValues(new Uint32Array(1))[0] / (0xffffffff + 1) * x.length)])
//     // .join('');
//     var alphabet_length=8;
//    var  alphabet= '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz~!@-#$';
//     for (var i = 0; i < 8; i++) {
//         var random_number = Math.floor(Math.random() * alphabet_length) + 1;
//         password += alphabet[random_number];
//         }
//         return password;
// }


// generatePassword(){
// }


  function generatePassword(length, rules) {
    if (!length || length == undefined) {
        length = 8;
    }

    if (!rules || rules == undefined) {
        rules = [
            {chars: "abcdefghijklmnopqrstuvwxyz", min: 3},  // As least 3 lowercase letters
            {chars: "ABCDEFGHIJKLMNOPQRSTUVWXYZ", min: 2},  // At least 2 uppercase letters
            {chars: "0123456789", min: 2},                  // At least 2 digits
            {chars: "!@#$&*?|%+-_./:;=()[]{}", min: 1}      // At least 1 special char
        ];
    }

    var allChars = "", allMin = 0;
    rules.forEach(function(rule) {
        allChars += rule.chars;
        allMin += rule.min;
    });
    if (length < allMin) {
        length = allMin;
    }
    rules.push({chars: allChars, min: length - allMin});
    
    var pswd = "";
    rules.forEach(function(rule) {
        if (rule.min > 0) {
            pswd += shuffleString(rule.chars, rule.min);
        }
    });
    
    return shuffleString(pswd);
}

function shuffleString(str, maxlength) {
    var shuffledString = str.split('').sort(function(){return 0.5-Math.random()}).join('');
    if (maxlength > 0) {
        shuffledString = shuffledString.substr(0, maxlength);
    }
    return shuffledString;
}

// var pswd = generatePassword(15, [
//   {chars: "abcdefghijklmnopqrstuvwxyz", min: 4},  // As least 4 lowercase letters
//   {chars: "ABCDEFGHIJKLMNOPQRSTUVWXYZ", min: 1},  // At least 1 uppercase letters
//   {chars: "0123456789", min: 3},                  // At least 3 digits
//   {chars: "!@#$&*?|%+-_./:;=()[]{}", min: 2}      // At least 2 special chars
// ]);

// console.log(pswd, pswd.length);
// Sha
