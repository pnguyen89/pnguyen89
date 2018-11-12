// MINIMUM // 

function min (num1, num2) {
  if (num1 > num2) {
    return num2;
  }
  else {
    return num1;
  }
}

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10





// RECURSION // 


function isEven(num) {
  if (num === 0) {
    return true;
  } else if (num === 1) {
      return false;
  } else if (num > 1) {
    return isEven(num-2);
  }

}

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??




// BEAN COUNTING // 

// you don't need to split the string into an array because you can
// also loop thing the string by index (zero indexed) for comparison 

function countBs(str) {
  let splitStr = str.split('');
  let holdB = [];
  for (let i = 0; i < str.length; i++) {
    if (splitStr[i] === 'B') {
      holdB.push(splitStr[i]);
    }
  } return holdB.length; 
}

function countChar(str, letter) {
  let splitStr = str.split(''); 
  let holdLetter = [];
  for (let i = 0; i < str.length; i++) {
    if (splitStr[i] === letter) {
      holdLetter.push(splitStr[i]);
    }
  } return holdLetter.length;
}

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4

