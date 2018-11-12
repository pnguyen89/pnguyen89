//  LOOPING A TRIANGLE // 

// using .repeat to answer the question (in class example)
// works on strings
// string.repeat(count)

for (let i = 0; i < 7; i++) {
    console.log('#'.repeat(i+1));
}

// another code that would work 
var hold = '#';
for (let i = 0; i < 7; i++) {
  if (i === 0) {
    console.log(hold);
  } else if (i < 7) {
    hold += '#';
	console.log(hold);
}
}



//  fIZZbUZZ // 

for (let i = 1; i <= 100; i++) {
    if (i % 5 === 0) {
        if (i % 3 === 0) {
            console.log('FizzBuzz');
        } else {
            console.log('Buzz');
        }
    } else if (i % 3 === 0) {
        console.log('Fizz');
    } else {
        console.log(i);
    }
}



// CHESSBOARD // 

for (let i = 0; i < 8; i++) {
  if (i % 2 === 0) {
    console.log('# # # # ');
  } else {
    console.log(' # # # #');
  }
}

// Tring to use a function with input.. 

// get even lines
// get odd lines
// add lines in order or odd/even 
// add line break 
// don't add line break after last line
// console (return will not show up! return is information for the computer,
// return is what computer sees)
// below (length also means height)
// you can shorten your code... next time

function print(length, width) {
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
  if (l === length - 1) {
    if (l % 2 === 0) {
      finalPrint += holdEven;
    } else {
      finalPrint += holdOdd;
    }
  } else if (l % 2 === 0) {
    finalPrint += holdEven + '\n';
  } else {
    finalPrint += holdOdd + '\n';
  }
}
console.log(finalPrint); 
};

print(6,8);