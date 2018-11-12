////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// range function
// two arguments, start and end, 
// returns an array containing all the numbers from start up to (and including) end.
// returns empty array when start === end
// return array with integrated 'step' (1, 5, 2) // 1, 3, 5
// return array with integrated 'step' with negative integer (1, 5, -1) // []


function range(start, end, skip) {
  let arrayRange = [];
  if (start === end) {
    return arrayRange;
  } else if (skip > start) {
    for (let i = start; i <= end; i += skip) {
      arrayRange.push(i);
    }
  } else if (skip < 0) {
    for (let i = start; i >= end; i += skip){
      arrayRange.push(i)
    }
    } else {
      for (let i = start; i <= end; i++) {
      arrayRange.push(i);
    } 
  } return arrayRange;

}

////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// sum function 
// takes an array of numbers 
// returns the sum of these numbers

function sum(arr) {
  let holdSum = 0; 
  if (arr.length === 1) {
    holdSum = arr;
  } 
  else if (arr.length > 0) {
    for (let i = 0; i < arr.length; i++) {
    holdSum += arr[i]; 
    }
  } return holdSum;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// takes an array as argument 
// produces a new array that has the same elements in the inverse order

function reverseArray(array) {
  let holdArray = [];
  for (let i = array.length-1; i >= 0; i--) {
    holdArray.push(array[i]);
  } return holdArray; 
}

////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// find a way to reverse an array in place
// switch values in their spot from outside in
// stopping at middle (so half of array length)
// if array is odd, need to round down (leaves middle value in place)
// This problem - needed HINT on EJS (Math.floor)
// use Math.floor (floor is bottom, ceil is top)
// use a variable to hold values for swapping 




function reverseArrayInPlace(array) {
  
  for (let i = 0; i < Math.floor(array.length / 2); i++) {
    let holdValue = array[i];
    array[i] = array[array.length-1-i];
    array[array.length-1-i] = holdValue;
  }
}

////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// function arrayToList(array) {
//   let hold = {};
// //   let hold2 = {}; see notes below 
//   for (let i = array.length-1; i >= 0; i--) {
//   	if (array[i] === array[array.length-1]) {
//       hold.value = array[i];
//       hold.rest = null;
//     } else {
//         hold = {
//           value: array[i], 
//           rest: hold
//         }
//       }
//   } return hold;
// }

// THIS IS SOO HARD TO GRASP AT FIRST
// You kept returning a 'Circular' in the rest location if you had more than 2 values in array
// in order to fix that, you do not need that second hold2 variable to hold your object
// everything on the right will complete before reassignment. 
// you must first create your loop to go through your array (A WHILE LOOP May BE USED too)
// working from the last index, inward
// Set condition to null for the most nested rest value
// focus on building your object next! 
// return at the end 



function arrayToList(array) {
let arrCount = array.length-1;
let list = {};
while (arrCount >=0) {
  if (arrCount === array.length-1) {
    list.value = array[arrCount];
    list.rest = null;
  } else {
    list = {
      value: array[arrCount],
      rest: list
    }
  } arrCount--;
} return list;
}


////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// write a listToArray function that produces an array from a list
// if the outside object is the first element and 
// the most nested object value is the last element of the array
// loop and return 
// make a variable to hold your array 
// choose a loop that will do the job, iteration
// make a variable to hold position? 

function listToArray(list) {
  let holdArray = [];
  if (list.value) {
    holdArray.push(list.value);
  }
  
  let nextPos = list.rest;
  // let nextNextPos = nextPos['rest'];
  // let 
  // nextPos += ['rest'];

  while (nextPos) {
    holdArray.push(nextPos.value);
    if (nextPos.rest) {
      nextPos = nextPos.rest;
      // nextPos.rest.rest.rest
    } else {
      break;
    } 
  }
  //holdArray.push(nextPos.value);
  // Don't need last push value because it pushed before stopping in the while loop
  return holdArray;
}


////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// // add a helper function prepend, 
// which takes an element and a list and 
// creates a new list that adds the element to the front of the input list
// list is function (arrayToList), hold at variable for use

function prepend(element, list) {

  let obj = {
    value: element, 
    rest: list
  }
 return obj;
}

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// takes a list and a number 
// returns the element at the given position in the list 
// with zero referring to the first element 
// or undefined when there is no such element.

function nth(list, element) {
  let count = 0;
  let nextPos = list;
  while (element >= 0) {
     if (element > count) {
      count++;
      nextPos = nextPos.rest;
    } else if (element === count) {
      return nextPos.value;
    }
  }
}

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

//

// function deepEqual(value1, value2) {
//   if (typeof value1 == 'object' && value1 != null) {
//     if (value1 === value2) {
//       return true;
//     } else {
//       return false;
//     }
//   } else if (value1 === value2) {
//     return true; 
//   } else {
//     return false;
//   }
// }

function deepEqual (obj1, obj2) {
  let hold = false;
  // let key1 = (Object.keys(obj1)); 
  // let key2 = (Object.keys(obj2)); 
  // if (typeof obj1 != 'object' || typeof obj2 != 'object' || obj1 == null || obj2 == null) {
  //    return hold; 
  if (typeof obj1 == 'object' && typeof obj2 == 'object' && Object.keys(obj1).length === 0 && Object.keys(obj2).length === 0) {
    return true; 
  }
  for (let key in obj1) {
       if (obj1[key] == obj2[key]) {
         hold = true;
       } else if (typeof obj1[key] == 'object'){
         // console.log('hello'); 
         hold = deepEqual (obj1[key], obj2[key]); 
       } 
       else {
         hold = obj1 === obj2;
       }
     }
  
 return hold; 
};


////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};
