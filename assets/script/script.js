// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword()
{
  var userip = userInputs();
  console.log("userip[0]" + userip[0]);
  var rules = generateRules(userip);
  var length = userip[0];
   //var password = generateSecurePassword(length, rules);
   var password = generateSecurePassword(length, rules);
}
function userInputs()
  {
    var password;
    console.log("userInputs()");
    var length = window.prompt("Please choose a length of 8-128 charaters for a Password");
    var lower = window.confirm("would you like to choose lowercase character");
    var upper = window.confirm("would you like to choose uppercase character");
    var numeric = window.confirm("would you like to choose numeric character");
    var special = window.confirm("would you like to choose special character");
    // window.alert("length : "+length "|"+ "lower"+lower +"upper"+upper +"number"+ number );\
    console.log("length " + length);
    console.log("lower " + lower);
    console.log("upper " + upper);
    console.log("number " + numeric);
    console.log("special " + special);

    var userInputs = [length, lower,upper,numeric,special];
    return userInputs;

  }

  function generateRules(userInputs)
  {
    var lower = userInputs[1];
    var upper = userInputs[2];
    var numeric=userInputs[3];
    var special = userInputs[4];
    console.log("lower " + lower);
    console.log("upper " + upper);
    console.log("number " + numeric);
    console.log("special " + special);

    if(lower) {
      var lowerChar = 'abcdefghijklmnopqrstuvwxyz';
      console.log("lower alphabet   : ==> " + alphabet);
    }
    if(upper) {
      var upperChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      console.log("upper alphabet   : ==> " + alphabet);
    }
    if(numeric) {
      var numericChar = '1234567890';
      console.log("number alphabet   : ==> " + alphabet);
    } //else if(input == 'alpha-numeric-caps') {
    // alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
    // } 
    if(special) {
      specialChar = '~!@#$%^&*()_+-=';

      console.log("upper alphabet   : ==> " + alphabet);
    } 
      console.log("Chars alphabet   : ==> " + alphabet);
      console.log("Chars alphabet_length   : ==> " + alphabet_length);

      
  }


function generateSecurePassword(length, rules) {
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