// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

// if input is "words" like thinkful - i want to encode it to numbers in a string "4432423352125413"
// if input is "numbers" like "4432423352125413" - i want to decode it to letters in a string "thinkful"
// first I want to make sure the input is all lowercase.
// then I want to check if my input is numbers, if it is I want to check if the input.length is even, if not I want to return false.
// then I want to turn my input into an array 
// for encoding I want to loop through each index and change each letter into a number using the polyAlabet object I created
// i want to change the array back to a string and return that
// if I am decoding I want to  loop through each index and change each number into a letter using the polyAlpha2 object I created
// I want to change that array back into a string and return that

const polybiusModule = (function () {
  
  const encodingAlpha = {
      a : "11",
      b : "21",
      c : "31",
      d : "41",
      e : "51",
      f : "12",
      g : "22",
      h : "32",
      i : "42",
      j : "42",
      k : "52",
      l : "13",
      m : "23",
      n : "33",
      o : "43",
      p : "53",
      q : "14",
      r : "24",
      s : "34",
      t : "44",
      u : "54",
      v : "15",
      w : "25",
      x : "35",
      y : "45",
      z : "55"
  }
  const decodingAlpha = {
      11 : "a",
      21 : "b",
      31 : "c",
      41 : "d",
      51 : "e",
      12 : "f",
      22 : "g",
      32 : "h",
      42 : "(i/j)",
      52 : "k",
      13 : "l",
      23 : "m",
      33 : "n",
      43 : "o",
      53 : "p",
      14 : "q",
      24 : "r",
      34 : "s",
      44 : "t",
      54 :  "u",
      15 : "v",
      25 : "w",
      35 : "x",
      45 : "y",
      55 : "z"

  }
  function polybius(input, encode = true) {
    input = input.toLowerCase()
    if(!encode && input.split(" ").some((numbers) => numbers.length % 2 !== 0)) {
      return false
    }
    if(encode){
      let encoding = input.split("").map((character) => {
        if(!encodingAlpha[character]){return character}
        let letterToNumber = encodingAlpha[character]
        return letterToNumber 
      })
      return encoding.join("")

    } else {
        let decoding = input.match(/[0-9]{2}|\s/g).map((character) => {
          if(!decodingAlpha[character]){return " "}
          let numberToLetter = decodingAlpha[character]
          return numberToLetter
        }) 
          return decoding.join("")


    }
    
    

  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
