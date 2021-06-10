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
  // collecting the userinputs to generate password
  var userinputs = userInputs();
  // creating rules to generate the password
  var rules = generateRules(userinputs);
  // getting the length from the userinput.
  var length = userinputs[0];
  // generate the password passing the length and rules as parameter
  var password = generateSecurePassword(length, rules);
  return password;
}
/**
 * Get the user inputs like, length and character types
 * @ return user inputs
 */
function userInputs()
  {
    var password;
    var lengthInput=0;
    do {
        lengthInput = window.prompt("Please choose a length between 8-128 charaters for a Password");
    } while((lengthInput < 8) || (lengthInput >128));


    console.log((lengthInput < 8) && (lengthInput >128));

    var lower = window.confirm("Would you like to choose lowercase character");
    var upper = window.confirm("Would you like to choose uppercase character");
    var numeric = window.confirm("Would you like to choose numeric character");
    var special = window.confirm("Would you like to choose special character");
    return [lengthInput, lower,upper,numeric,special];
  }

/**
 * @param  array of userinputs 
 * @returns rules
 */

  function generateRules(userinputs)
  {
    var lower = userinputs[1];
    var upper = userinputs[2];
    var numeric=userinputs[3];
    var special = userinputs[4];
    var rules = [];
     
    if(lower) {
      var lowerChar = 'abcdefghijklmnopqrstuvwxyz';
      rules.push({chars: lowerChar, min : 3});
    }
    if(upper) {
      var upperChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      rules.push({chars: upperChar, min : 2});
    }
    if(numeric) {
      var numericChar = '1234567890';
      rules.push({chars: numericChar, min : 2});
    } 
    if(special) {
      var specialChar = '~!@#$%^&*()_+-=';
      rules.push({chars: specialChar, min : 1});
    } 
    for(let i = 0; i < rules.length; i++){
      console.log(rules[i]);
      
    }
      return rules;
  }

/*
 * @param length , Rules array
 * Returns the generated password passed on the user input 
 * Allocating minimum number of characters based on the criteria
 */

function generateSecurePassword(length, rules) {
  var allChars = "", allMin = 0;
  rules.forEach(function(rule) {
      allChars += rule.chars;
      allMin += rule.min;
  });
 
  
  var allCharsLen = allChars.length;
  var minLen = length - allMin;
  var j = 0;
  var k = 0;
  if(minLen <= allCharsLen)
  {
        rules.push({chars: allChars, min: minLen});
  }
  else{
    var reminder = minLen % allCharsLen;
    var quotient = (minLen - reminder) / allCharsLen;
    for (; k < quotient; k++) {
      rules.push({chars: allChars, min: allCharsLen});
    }
    
    if (reminder > 0) {
      rules.push({chars: allChars, min: reminder});
    }
    
  }

  // verify the rules applied to the generator
  printRules(rules);
  var pswd = "";
  rules.forEach(function(rule) {
      if (rule.min > 0) {
          pswd += shuffleString(rule.chars, rule.min);
      }
  });
  //return pswd after the shuffling operation
  return shuffleString(pswd, length);
}
// Print the charater type , rules as per input criteria -- Validation code.
function printRules(rules){
rules.forEach(function(rule) {
   console.log("  rule.chars : ==> " + rule.chars);
  console.log("  ruke.min : ==> " + rule.min);
});
}

/*
* @param rules strings, maximum length
* @ returns the strings shuffled
*/

function shuffleString(str, maxlength) {
  var shuffledString = str.split('').sort(function(){
    return 0.5-Math.random()}).join('');
  if (maxlength > 0) {
      shuffledString = shuffledString.substr(0, maxlength);
  }
  return shuffledString;
}