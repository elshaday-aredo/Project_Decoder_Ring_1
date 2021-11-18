// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

/*create two alphabets for encoding and decoding
// I want to return false if users substitution alphabet length is not equal to 26 
when encoding I want toLowerCase input and turn the input into an array, go through every index and change each character into 
a different character using the encode object.
*/ 


const substitutionModule = (function () {
  // you can add any code you want within this function scope

  const alpha = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

  function substitution(input, alphabet, encode = true) {
    input = input.toLowerCase()
    if(!alphabet || alphabet.length !== 26) {return false}
    if((new Set(alphabet)).size !== alphabet.length) {return false}
      input = input.split("")  
      alphabet = alphabet.split("")
    if(!encode){
     const decoding = input.map((character) => {
       if(character == " ") {return " "}
     const indexNumber = alphabet.indexOf(character)
     return alpha[indexNumber]
      })
      return decoding.join("")
    } else if(encode) {
      const encoding = input.map((character) => {
        if(character == " ") {return " "}
        const indexNumber = alpha.indexOf(character)
        return alphabet[indexNumber]
      })
      return encoding.join("")
    }
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
