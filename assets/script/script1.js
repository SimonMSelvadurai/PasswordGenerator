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


  function generatePassword() {
  window.alert("generatePassword()");
     var userInput= userInputs();
     var length = userInput[0];
     var lower = userInput[1];
     var upper = userInput[2];
     var numeric=userInput[3];
     var special = userInput[4];
     console.log("userInput    ==> "  + userInput);
     console.log("userInput    ==> length " + length);
     console.log("userInput    ==>  lower " + lower);
     console.log("userInput    ==> upper " + upper);
     console.log("userInput    ==> number " + numeric);
     console.log("userInput    ==> special " + special);


     var password = randomPassword(length,lower,upper,numeric,special);
    // var password = userInputs();
    console.log("generatePassword() ==> password   : " + password);
    // var length = 8,
    //     charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
    //     retVal = "";
    // for (var i = 0, n = charset.length; i < length; ++i) {
    //     retVal += charset.charAt(Math.floor(Math.random() * n));
    
    return password;
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

  function randomPassword(alphabet_length,lower,upper,numeric,special) {
    //window.alert("randomPassword()");
    console.log("randomPassword()");
    // var alphabet_length, lower, upper,numeric,special;
    // var alphabet_length = userInputs.length;
    // var lower = userInputs.lower;lower
    // var upper = userInputs.upper;
    // var numeric = userInputs.number;
    // var special = userInputs.special;
    //this.alphabet_length=alphabet_length;

    console.log("randomPassword() >>> length " + alphabet_length);
    console.log("randomPassword() >>> lower " + lower);
    console.log("randomPassword() >>> upper " + upper);
    console.log("randomPassword() >>> number " + numeric);
    console.log("randomPassword() >>> special " + special);



    // function randomPassword(length=8,input='alpha-numeric') {
  //var alphabet = 'abcdefghijklmnopqrstuvwxyz';
  var alphabet = false;
  var password = false;
  var haslower=false;
  if(lower) {
    alphabet = 'abcdefghijklmnopqrstuvwxyz';
    console.log("lower alphabet   : ==> " + alphabet);
  }
  if(upper) {
    alphabet = alphabet + 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    console.log("upper alphabet   : ==> " + alphabet);
  }
  if(numeric) {
    alphabet = alphabet + '1234567890';
    console.log("number alphabet   : ==> " + alphabet);
  } //else if(input == 'alpha-numeric-caps') {
  // alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
  // } 
  if(special) {
    alphabet = alphabet + '~!@#$%^&*()_+-=';
    console.log("upper alphabet   : ==> " + alphabet);
  } 
    console.log("Chars alphabet   : ==> " + alphabet);
    console.log("Chars alphabet_length   : ==> " + alphabet_length);

  // Math.floor(Math.random() * 8)
  // return  Array(20)
  // .fill(alphabet)
  // .map(x => x[Math.floor(crypto.getRandomValues(new Uint32Array(1))[0] / (0xffffffff + 1) * x.length)])
  // .join('');

  for (var i = 0; i < alphabet_length; i++) {
    var random_number = Math.floor(Math.random() * alphabet_length) + 1;
    password += alphabet[random_number];
    }


  //else if(input == 'alpha-numeric-caps-symbols') {
  // alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890~!@#$%^&*()_+-=';
  // }
 // var alphabet_length = alphabet.length - 1;
  // for (var i = 0; i < alphabet_length; i++) {
  // var random_number = Math.floor(Math.random() * alphabet_length) + 1;
  // password += alphabet[random_number];
  // }


  // var randPasswordArray = Array(alphabet_length);
  // randPasswordArray[0] = numberChars;
  // randPasswordArray[1] = upperChars;
  // randPasswordArray[2] = lowerChars;
  // randPasswordArray = randPasswordArray.fill(allChars, 3);
  // return shuffleArray(randPasswordArray.map(function(x) { return x[Math.floor(Math.random() * x.length)] })).join('');
}




  

  // function shuffleArray(array) {
  //   for (var i = array.length - 1; i > 0; i--) {
  //     var j = Math.floor(Math.random() * (i + 1));
  //     var temp = array[i];
  //     array[i] = array[j];
  //     array[j] = temp;
  //   }
  //   return array;
  // }

  // function passwordInp (length, lower, upper,number,special) {
  //   this.length = length;
  //   this.lower = lower;
  //   this.upper = upper;
  //   this.number = number;
  //   this.special = special;
  // }





  //length of at least 8 characters and no more than 128 characters 
  //choose lowercase, uppercase, numeric, and/or special characters

  // //Logic to generate password
  // function generatePassword1 () {
  // var userInput;
  // var length = window.prompt("Please choose a length of 8-128 charaters for a Password");

  // if( 8<=length && length<=128)
  // {
  //   validateForLowerCase();
  // }else{
  //   window.prompt("Please choose a length of 8-128 charaters for a Password");
  // }

  // function validateForLowerCase(){
  //     var validator =/^[a-z]+$/g;
  //     var lower = window.prompt("Please prompt any lowercase character");
  //     if(validator.test(lower))
  //     {
  //       validateForUpperCase();
  //     }
  //     else{
  //       window.alert("errror");
  //       window.prompt("Please prompt any lowercase character");
  //     }
  //   }
  //   function validateForUpperCase(){
  //     var validator =/^[A-Z]+$/g;
  //     var upper = window.prompt("Please prompt any uppercase character");
  //     if(validator.test(upper)){
  //       validateForNumeric();
  //     }
  //     else{
  //       window.alert("errror");
  //       window.prompt("Please prompt any uppercase character");
  //     }
  //   }

  //   function validateForNumeric(){
  //     var validator =/^[0-9]+$/g;
  //     var nums = window.prompt("Please prompt any Numeric Number");
  //     if(validator.test(nums)){
  //       specialChars();
  //     }
  //   }
  //   function specialChars(){
  //     var validator = /!@#\$%\^\&*\)\(+=._-/g;
  //       var specialChars = window.prompt("Please prompt any Special Character");
  //       if(validator.test(specialChars)){
  //         passwordGenerator();
  //       }
  //   }
  // }


  //   //   let password = [];
  //   //   let lastChar;
  //   //   for (let i = 0; i < length; i++) {
  //   //     let char = newChar(lowercase, uppercase, numbers, specialChars);
  //   //   }
  //   //   function passwordGenerator(){
  //   //     userInputforLength
  //   //     userInputforLC
  //   //     userInputforUC
  //   //     userInputforNum
  //   //     function newChar(lower, upper, nums, specials) {
  //   //       let set = [lower, upper, nums, specials];
  //   //       let pick = set[Math.floor(Math.random() * set.length)];
  //   //       return pick[Math.floor(Math.random() * pick.length)]
  //   //     }

    














  // var password ="";// 
  // //
  // var isValidPassword = validatePassword();



  // return isValidPassword;
  // }



  // function validatePassword(){
  //   //null or empty
  //   //input ipPWD check for length
  //   // character Type
  //   var len;
  //   var userInput = window.prompt("Please enter the password");
  //   var len =userInput.length;

  // if(8<=len && len<=128) {
  //   returnCode = isValidCharType (userInput);
  // } else  {
  //   window.alert("Please enter a Password whose length is at least 8 characters and not more than 128 characters");
  // }

  // isValidCharType(userInput){
  //   var inputArray = Array.from(userInput);
  //   inputArray.forEach(validate)
  // }
  //   //userInput.
  //   userInput.toString()
  // }

  //   //return isValidLength() && isValidCharType();


