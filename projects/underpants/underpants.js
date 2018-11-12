// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

var _ = {};


/**
* START OF OUR LIBRARY!
* Implement each function below it's instructions
*/

/** _.identity()
* Arguments:
*   1) Anything
* Objectives:
*   1) Returns <anything> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/
_.identity = function(anything) {
    return anything;
};

/** _.typeOf()
* Arguments:
*   1) Anything
* Objectives:
*   1) Return the type of <anything> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/
_.typeOf = function (anything) {
    if (Array.isArray(anything)) {
        return 'array';
    } else if (anything === null) {
        return 'null';
    }
    return typeof anything;
};

/** _.first()
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Gotchas:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/

_.first = function (array, number) {
    let holdArr = [];
    if (!Array.isArray(array)) {
        return holdArr;
    } else if (number === undefined || typeof number !== 'number') {
        return array[0];
    } else if (number > array.length) {
        return array; 
    } else if (array.length > number) {
        for (let i = 0; i < array.length-1; i++) {
            if (i < number) {
                // console.log(array[i]);
                holdArr.push(array[i]);
            }
        } return holdArr;
    } else if (number < 0) {
        return holdArr;
    }return array[number];
};

/** _.last()
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Gotchas:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/
_.last = function (array, number) {
    let hold = [];
    if (!Array.isArray(array) || number < 0) {
        return hold; 
    } else if (number === undefined || (typeof number !== 'number')) {
        return array[array.length - 1];
    } else if (array.length > number && number >= 0) {
        for (let i = array.length - 1; i >= 0; i--) {
            let value = array.length - number; 
            if (i >= value) {
                hold.unshift(array[i]);
            }
        } return hold;
    } else if (number > array.length) {
        return array;
    }
}

// slice(-number) --> slices off what is at the end in that array in that number value 
// make sure to have (-) sign before!
// [a, b, c, d] if number 2, slices off c, d and returns 

/** _.each()
* Arguments:
*   1) A collection - obj
*   2) A function - test
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/
_.each = function (obj, test) {
    if (Array.isArray(obj)) {
        for (let i = 0; i < obj.length; i++) {
            test(obj[i], i, obj);
        }
    } else {
        for (var key in obj) {
            test(obj[key], [key], obj);
        }
    }
}

/** _.indexOf()
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
* INDEX is returned of where the value occurs 
*   2) Return -1 if <value> is not in <array>
* NOT PRESENT 
*   3) Do not use [].indexOf()!
* Gotchas:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/
_.indexOf= function (array, value) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === value) {
            return i; 
        } 
    } return -1;
}

// takes in an array and a value
//returns the INDEX of the value at it's first occurance 
// returns -1 if not in array

/** _.filter()
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Gotchas:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/
_.filter = function(arr, test) {
    let result = [];
    _.each(arr, function(element, index, arr) {
        if (test(element, index, arr)) {
            result.push(element);
        }
    }); return result;
};



/** _.reject()
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter(), you must use _.filter() in your implementation
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/
_.reject = function (array, test) {
    let result = [];
    _.filter(array, function(e, i, a) {
        if (test(e, i, a) === false) {
            result.push(e);
        }
    })
    return result; 
};

/** _.partition()
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Gotchas:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/
_.partition = function (arr, test) {
    let result = [[], []]; 
    if (_.filter(arr, function(e, i, a) {
        if (test(e, i, a)) {
            result[0].push(e);
        } else {
            result[1].push(e);
        }
    })) 
        return result; 
    }


/** _.unique()
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/
// one argument, arr
// returns NEW array of elements from arr
// duplicates are removed
// used .indexOf (returns index if value is found, or -1 if not within array)
// indexOf 
// takes in an array and a value
//returns the INDEX of the value at it's first occurance 
// returns -1 if not in array
// so loop through array, compare it to the previous location
_.unique = function(arr) {
    let result = [];
    _.each(arr, function(e, i, arr) {
        if (_.indexOf(result, e) === -1) {
            result.push(e);
        }
    });
        return result; 
    };

/** _.map()
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/

// two aruments: collection, function (test)
// call function for each element in <collection> 
// if array, element, index, <collection> 
// if object, value, key, <collection> 
// so you can use each to loop through
// your test function return will be pushed into the result array
// return result array


_.map = function (collection, test) {
    let result = [];
    _.each(collection, function (e, i, a) {
            result.push(test(e, i, a));
    })
            return result; 
}; 

      



/** _.pluck()
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/

// takes an array OF OBJECTS and a property
// return an array
// loop through every object property returning the valuue at that <property>
// use .map takes a collection, object or array, loops through, and returns 
// if it passes the test that is input 


// _.pluck = function (arr, property) {
//   return _.map(arr, function(e, i, a) {
//          return arr[i][property];
//     }) 
// };

_.pluck = function (obj, property) {
    let result = [];
    _.map(obj, function(e, i, a) {
        if(obj[i][property]) {
            result.push(obj[i][property]);
        }
    }) 
    return result; 
};

// if you're not using all of the arguments, in the function, you can take them out
// since you won't be using them -> only worried about is element 
// also, yu can remove your result array, don't need to push. 
// push map function, and inside, return i[prop];

/** _.contains()
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Gotchas:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/

// takes an array and a value
// return true IF array contains value
// returns false if array doesn't contain value
// USE ternary operator 
// what if there are no value given? 

// ternary (condition) ? (if true, return this) : (else, return this)
// need another return statement before our ternary condition because
// we need it to exit and return out of this function

_.contains = function (array, value) {
   return _.indexOf(array, value) === -1 ? false : true;
}

/** 
 * every : designed to take in a collection (array or object) and a function. It
 * returns true if all the values within the collection running through the 
 * incoming function are true, else if one value returns false, false is returned. 
 * An empty array is created to push values into for comparison. The length of that
 * new array must equal to the length of the collection in order to return true. 
 * 
 * @param {Array or Object} a collection to loop through and use each value in the
 * test function. 
 * @param {function} a test/action performed on each element in the collection to
 * test if the value is true or false
 * 
 * @return {boolean} a true or false based on whether all elements in the collection
 * passed the test or not.
 * 
 */

/** _.every()
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Gotchas:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/

// takes two arguments (collection, test) 
// call test for every element --> use each
// return true IF function call on every element is true 
// return false if any element is false 
// so checking if all elements ar there 
// each loops through every value to check 
// if one is false, return false
// all values must be present 

_.every = function (collection, test) {
    
    let result = [];
    if (!test) {
        _.each(collection, function (e, i, a) {
            if (e) {
                result.push(e);
            }
        }); 
    } else {
        _.each(collection, function (e, i, a) {
            if (test(e, i, a)) {
                result.push(e);
            }
        });
    } 
   return (result.length === collection.length || result.length === Object.keys(collection).length) ? true : false;
    // must write return for last ternary statement 
};

/** _.some()
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Gotchas:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/

// two arguments, collection and test
// loop through collection
// perform test on collection
// if one value returns true in test, return true
// if test is false; all must be false to return false; 
// make a variable to hold empty array and push true and false values onto 
_.some = function (collection, test) {
    let hold = [];

    if (!test) {
        _.each(collection, function (e, i, a) {
            if (!e) {
                hold.push(e);
        }});
    } else {
        _.each(collection, function(e, i, a) {
            if (!test(e, i, a)) {
                hold.push(e);
        }});
        
    }
    return (hold.length === collection.length || hold.length === Object.keys(collection).length) ? false : true;
}


/** _.reduce()
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed>
*   5) After the last iteration, return the return value of the final <function> call
* Gotchas:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/

// two arguments: array, test, seed (previous result)
// looping through collection, arguments in each would be seed, element, index
// when i = 0; 
// need a hold variable to hold value of seed to be used in next iteration and so on

_.reduce = function (array, test, seed) {
    _.each(array, (ele, index, arr) => {
        if (seed === undefined) {
            seed = array[0];
        } else {
            seed = test(seed, ele, index);
        }
    }); 
    return seed;
//   if (!seed) {
//       seed = array[0];
//     //   array = array.slice(1, array.length);
//     //   console.log(array);
//   } else {
//         _.each(array, (e, i, a) => {
//         seed = test(seed, e, i);
//     });
//   }

//     return seed;
};




/** _.extend()
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/
// takes an objects
// returns object 1 with other key/value pairs in object 1
// so I have to add key/value pairs of Object2 to to the end of Object1

_.extend = function(object1, object2,...moreObj) {
    // take key/value pairs from object to, add to object1
    // overwrites existing properties
    // so if property already exists in both objects, replace object1 with 
    // if object1.prop === object2.prop --> I don't need because the assign object
    // will do the work for me!!! 
    // let holdObj; // I don't need a hold variable either, just allow for reassignment and return;\
    // using the rest parameter, you can encompass multiple parameters
    // inside of the parameters of assign, you must input the same parameters 
    // inside the function for it to work 
    
    return Object.assign(object1,object2, ...moreObj);
}


//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}
