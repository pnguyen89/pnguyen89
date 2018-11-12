// /////////////////////////////////////////////////////////////////////////////
// flatten /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////


function flatten (array) {
  return array.reduce(function(seed, element) {
    return seed = seed.concat(element); 
  }, []); 
}

// /////////////////////////////////////////////////////////////////////////////
// loop ////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////



//Write a higher-order function loop 
//that provides something like a for loop statement. 
// ARGUMENTS : a value, a test function, an update function, and a body function. 
// Each iteration, it first runs the test function on the current loop value and 
// stops IF that returns false. Then it calls the body function, giving it the c
// urrent value. Finally, it calls the update function to create a new value and starts from the beginning.

// When defining the function, you can use a regular loop to do the actual looping.

function loop(value, test, update, body) {
  if (!test(value)) {
    return false; 
  }
  body(value); 
  loop(update(value), test, update, body);
}
// /////////////////////////////////////////////////////////////////////////////
// every ///////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////


function every(array, test) {
  let hold = [];
  for (let i = 0; i < array.length; i++) {
    if (test(array[i])){
      hold.push(i);
    }
  }
   if (hold.length === array.length) {
     return true;
   } else {
     return false;
}};

// this is long!! Do it the shorter way.. test for !test, return false, else true

// /////////////////////////////////////////////////////////////////////////////
// dominantDirection ///////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function dominantDirection(string) {
  //debugger;
  // SPLIT STRING INTO ARRAY
  // let charArr = string.split('');
  // loop through array
  // charArr.forEach((char) => {
    // console.log(char); // test to see if it works, test at each change
    // works, consoles each letter
    // console.log(characterScript(char)); // null returns - why? 
    // look at scripts.js
    // ranges is numbers, not letters
    // ascii
    // charCodeAt()
    // can use this to get back a character code
    // bc function is comparing numbers, we put in a string for the console. therefor null
    // console.log(characterScript(char.codePointAt(0))); // 0 because single string
    // converted string character to actual code number to return value in number 
    // some nulls are do to line space and punctuation (they don't work)
    // gives back an object 
    // characterScript(char.codePointAt(0));
    // countBy take an items array, returns an array
    // give tally of how many scripts? 
    // now use countBy.. 
    // console. countBy(characterScript(char.codePointAt(0))); // returns but still null inside 
    // so change 
    // LOOP ALL CHARACTERS OF ARRAY
    
    //let scripts = charArr.map((char) => { 
      
      // RETURN SCRIPT THAT CHAR BELONGS TO 
      
      // return characterScript(char.codePointAt(0));
  // we have a scripts array now 
  // console.log(countBy(scripts, characterScript()) // doesn't work 
  // looping through scripts, neeed to use text 
  // again have to count characters 
  // take out return (don't want return array)
      // console.log(textScripts(char)); // gives 100% latin, etc
      
    //});
    // console.log(textScripts(string)); // splits text into percentage of what language it is
    // textScripts just returns a string, may or may not be useeful
    // pattern is everythign that is not characters (replace below)
    // regex (mdn)
    //console.log(textScripts(string).replace(/\W/, '').split(' ')); // works gives an array of the characters
    
   
    // textScripts(string).replace(/\W/g\, '').split(' ');
    
    // let charArr = string.split(''); DIDN'T NEED
    let scripts = countBy(string, char => { 
      // console.log(char); // gives back all the single characters
      let script = characterScript(char.codePointAt(0));
      return script ? script.direction : 'none';
    });
      // console.log(scripts); // works 
      // reduce would work here!
      // do it the long way now 
      // figure out which one has the highest count now
      // we could sort this or filter
      scripts.sort((a, b) => {
    //console.log(scripts);
       return a.count - b.count;
      });
      console.log(scripts);
    return scripts[scripts.length-1].name;
}

// if b.count - a.count -> return scripts[0].name; 

// Used for each before, but want new array of actual scripts they belong to
// change to map
// map gives back array
// manipulates character, gives access to each individual character
// passed each character to characterscript at their asking code
// returned at the end 

// given an entire library of functions 


// countBy - does something specific - instead of just looping through characters 
//for access, they get sorted to their own object properties
// groupName is a function that we're sorting it by 
// the function sindie countBy - if there was a script value that isn't null, returned 
// direciton, else none


// /////////////////////////////////////////////////////////////////////////////
//  //////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    flatten,
    loop,
    every,
    dominantDirection,
  };
};
