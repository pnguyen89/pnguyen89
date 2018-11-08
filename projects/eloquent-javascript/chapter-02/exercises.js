
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function triangles(num) {
  var hold = '#';
  for (let i = 0; i < num; i++) {
    if (i === 0) {
      console.log(hold);
    } else if (i < num) {
      hold += '#';
    	console.log(hold);
    }
  }
}
////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function fizzBuzz(start, end) {
  for (let i = start; i <= end; i++) {
    if (i % 5 === 0) {
        if (i % 3 === 0) {
            console.log('fizzbuzz');
        } else {
            console.log('buzz');
        }
    } else if (i % 3 === 0) {
        console.log('fizz');
    } else {
        console.log(i);
    }
}
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function drawChessboard(length) {
  let width = length; 
  // old code allowed for length and width arguments
  // function is only asking for one input .. 
  
  var holdEven = ''; 
  for (let i = 0; i < width; i++) {
    if (i % 2 === 0) {
      holdEven += ' '; 
    } else {
      holdEven += '#';
    }
  }

  var holdOdd = '';
  for (let j = 0; j < width; j++) {
    if (j % 2 === 0) {
      holdOdd += '#';
    } else {
      holdOdd += ' ';
    }
  }
    
var finalPrint = '';
for (let l = 0; l < length; l++) {
  // if (l === length - 1) {
  //   if (l % 2 === 0) {
  //     finalPrint += holdEven;
  //   } else {
  //     finalPrint += holdOdd;
  //   }
 // } else 
 
 // code is commented out to pass tests
 // return code back if you don't want to have an empty line at the end 
 
  if (l % 2 === 0) {
    finalPrint += holdEven + '\n';
  } else {
    finalPrint += holdOdd + '\n';
  }
}
console.log(finalPrint); 
};



// How can I do this in only two loops? 
// outer loop hands lines
// inner loop hands the character in a line 
// You were able to do it! (tehe)
// Re-try it. Consider using Math.floor and only looping through half of the width
// remember, they didn't ask not to return a new line at the end (easier!)


////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
