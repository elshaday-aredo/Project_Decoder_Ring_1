// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope


  function caesar(input, shift, encode = true) {
    let alphabet = {
      a : 1,
      b : 2,
      c : 3,
      d : 4,
      e : 5,
      f : 6,
      g : 7,
      h : 8,
      i : 9,
      j : 10,
      k : 11,
      l : 12,
      m : 13,
      n : 14,
      o : 15,
      p : 16,
      q : 17,
      r : 18,
      s : 19,
      t : 20,
      u : 21,
      v : 22,
      w : 23,
      x : 24,
      y : 25,
      z : 26
    }
    let alphabet2 = {
      1 : "a",
      2 : "b",
      3 : "c",
      4 : "d",
      5 : "e",
      6 : "f",
      7 : "g",
      8 : "h",
      9 : "i",
      10 : "j",
      11 : "k",
      12 : "l",
      13 : "m",
      14 : "n",
      15 : "o",
      16 : "p",
      17 : "q",
      18 : "r",
      19 : "s",
      20 : "t",
      21 : "u",
      22 : "v",
      23 : "w",
      24 : "x",
      25 : "y",
      26 : "z"
    }
      input = input.toLowerCase()
      input = input.split("")
    if(shift === 0 || shift < -25 || shift > 25){ return false}
    let code = encode? 1 : -1
    let decoding = input.map((character) => {
      if(!alphabet[character]){return character}
     let alphabetNumber = alphabet[character] + shift * code
      if(alphabetNumber > 26){
        alphabetNumber -= 26
      }
      if(alphabetNumber < 1){
        alphabetNumber +=26
      }
      return alphabet2[alphabetNumber]
    }) 
     return decoding.join("")

  
    
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };

//take in the input and shift number
// create an alphabet array 
