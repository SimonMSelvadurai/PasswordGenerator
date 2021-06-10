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
  console.log("generatePassword   >>>> userinputs" + userinputs);
  // creating rules to generate the password
  var rules = generateRules(userinputs);
  // getting the length from the userinput.
  var length = userinputs[0];
  // generate the password passing the length and rules as parameter
  var password = generateSecurePassword(length, rules);
  console.log("generatePassword   >>>> password    : " + password);
  return password;
}
/**
 * 
 * 
 */
function userInputs()
  {
    var password;
    var lengthInput=0;
    console.log("userInputs()");
    min=8;
    max=128;
    do {
        lengthInput = window.prompt("Please choose a lengthInput of 8-128 charaters for a Password");
        console.log("lengthInput " + lengthInput);
    } while((lengthInput < 8) || (lengthInput >128));


    console.log((lengthInput < 8) && (lengthInput >128));

    var lower = window.confirm("Would you like to choose lowercase character");
    var upper = window.confirm("Would you like to choose uppercase character");
    var numeric = window.confirm("Would you like to choose numeric character");
    var special = window.confirm("Would you like to choose special character");
 
    console.log("lengthInput " + lengthInput);
    console.log("lower " + lower);
    console.log("upper " + upper);
    console.log("number " + numeric);
    console.log("special " + special);

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
    console.log("lower " + lower);
    console.log("upper " + upper);
    console.log("number " + numeric);
    console.log("special " + special);
    var rules = [];
     
    if(lower) {
      var lowerChar = 'abcdefghijklmnopqrstuvwxyz';
      console.log("lower alphabet   : ==> " + lowerChar);
      rules.push({chars: lowerChar, min : 3});
    }
    if(upper) {
      var upperChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      console.log("upper alphabet   : ==> " + upperChar);
      rules.push({chars: upperChar, min : 2});
    }
    if(numeric) {
      var numericChar = '1234567890';
      console.log("number alphabet   : ==> " + numericChar);
      rules.push({chars: numericChar, min : 2});
    } 
    if(special) {
      var specialChar = '~!@#$%^&*()_+-=';

      console.log("upper alphabet   : ==> " + specialChar);
      rules.push({chars: specialChar, min : 1});
    } 
    console.log("rules   : ==> " + rules);
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
  console.log(" generateSecurePassword >>>> length   : ==> " + length);
  var allChars = "", allMin = 0;
  rules.forEach(function(rule) {
      allChars += rule.chars;
      console.log("generateSecurePassword  allChars : ==> " + allChars.length);
      allMin += rule.min;
      console.log("generateSecurePassword  allMin : ==> " + allMin);
  });
  
  // if (length < allMin) {
  //     length = allMin;
  // }
  
  var allCharsLen = allChars.length;
  var minLen = length - allMin;
  var j = 0;
  var k = 0;
  console.log("heloooooooooooooooooooo");
  if(minLen <= allCharsLen)
  {
    console.log("minLen <= allCharsLen   " + minLen <= allCharsLen);
    console.log("allCharsLen   :- " + allCharsLen + ",minLen   :-    "+minLen );
        rules.push({chars: allChars, min: minLen});
  }
  else{
    console.log(" else            : ");
    var reminder = minLen % allCharsLen;
    var quotient = (minLen - reminder) / allCharsLen;
    console.log("reminder   :- " + reminder + ",quotient   :-    "+quotient );
    for (; k < quotient; k++) {
      rules.push({chars: allChars, min: allCharsLen});
    }
    
    if (reminder > 0) {
      rules.push({chars: allChars, min: reminder});
    }
    // for( j=0; j<allCharsLen; j++)
    // {

    //   // k = k - allCharsLen;
    //   if(k == allCharsLen){
    //     rules.push({chars: allChars, min: allCharsLen});
    //     console.log("kooooooooooooo" + k );
    //     allCharsLen= minLen - allCharsLen;
    //     console.log("allCharsLen   :- " + allCharsLen + ",minLen   :-    "+minLen );
    //   }
    // }
  }

  
  printRules(rules);
  var pswd = "";
  rules.forEach(function(rule) {
      if (rule.min > 0) {
        console.log("generateSecurePassword  rule.min : ==> " + rule.min);
          pswd += shuffleString(rule.chars, rule.min);
          console.log("generateSecurePassword  rule.chars : ==> " +rule.chars);
          console.log("generateSecurePassword  pswd : ==> " + pswd);
      }
  });
  //return pswd;
  return shuffleString(pswd, length);
}

function printRules(rules){
rules.forEach(function(rule) {
   console.log("  rule.chars : ==> " + rule.chars);
  console.log("  ruke.min : ==> " + rule.min);
});
}

/*
*
*
*/

function shuffleString(str, maxlength) {
  console.log("shuffleString  maxlength : ==> " + maxlength);
  console.log("shuffleString  str : ==> " + str);
  var shuffledString = str.split('').sort(function(){
    return 0.5-Math.random()}).join('');
  if (maxlength > 0) {
      shuffledString = shuffledString.substr(0, maxlength);
  }
  console.log("shuffleString  shuffledString shuffledString shuffledString : ==> " + shuffledString);
  return shuffledString;
}