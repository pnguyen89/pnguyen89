// file to save my lodown notes before transferring
// still needs examples
// transferred and completed in another file! 


/** 
 * Identity : designed to return the input value as itself, unchanged. 
 * 
 * @param {any data type} a singular parameter
 * 
 * @return {any data type} returned, without manipuation 
 * 
 * Usage: 
 *      let me = {
 *          name: 'Phuoc', 
 *          occupation: 'Awesome Sauce'
 *      };
 *      let who = identity(me);
 *      console.log(who); // prints the whole object of me again 
 *      { name: 'Phuoc', occupation: 'Awesome Sauce' }
 * 
 */


 
 
/**
 * typeOf : designed to take in any datatype and return the type of data it 
 * is in a string. This is to help us determine what type of data is being used
 * and may be used to compare with other values. This differs from typeof because
 * arrays and null values will return as a string of themselves, instead of 
 * returning as an 'object' string.
 * 
 * @param {input} a singular parameter of any datatype
 * 
 * @return [string] a string of the type of data was input
 * Those datatypes include: 
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
 * 
 * 
 */
  
  
/**
 * First : designed to take the first elements of an array and return them, based
 * on how many elements (the number that is given to return from the array)
 * were asked for. If no array was input or the value is a negative number, then an 
 * empty array would be returned. If the value given isn't a number or not provided, 
 * only the first element of the array is returned. If the value given is greater 
 * than the array length, the whole array is returned. Otherwise, the number input 
 * as a parameter will yield how many elements will be returned from the array.
 * In order to return the correct amount of elements, a loop is created for the array
 * to push values into an empty array that is returned at the end. A condition is set
 * to make sure that the loop stops and only the correct number of elements are pushed.
 * 
 * @param {array} a collection to extract elements from
 * @param {value} a numerical value that dictacts how many elements will be extracted
 * from the array (input).
 * 
 * @return {array} a new ollection of the elements returned if more than one, or a singular 
 * or value if only one is being returned. 
 * 
 */

/**
 * Last : designed to do the same thing as first, but take the values from the end of 
 * the array. There are also two inputs, an array and a number. The elements must be 
 * returned in the order they appear in the original array, just taken from the end. 
 * In order to do so, a loop created to start at the end was made to remove each element 
 * one at a time, as needed, and placed into an empty array for return. To place the 
 * elements in the correct order, the unshift method was used to place each incoming 
 * element into the front of the array. If no array was given or the number was negative, 
 * an empty array is returned. If no number was given or the argument is not a number 
 * datatype, the last element is returned. 
 * 
 * @param {array} a collection to extract elements from 
 * @param {value} a numerical value that dictacts how many elements will be extracted
 * from the end of the array. 
 * 
 * @return {array} or {string} {number} a new collection of elements returned if value was greater
 * than 1 but less than the length of the input array. A singular number would be returned 
 * if only one element is needed. 
 * 
 */
 
 
/**
 * Each : designed to decipher if the input collection is an array or object first, 
 * then creates a loop that loops through the whole array or object from the beginning. 
 * 
 * @param {Array or Object} a collection to loop through 
 * @param {Function} an action or test that is applied to each element in the array
 * or object. 
 * 
 * @return There are no returns with the function each. It's purpose is to loop through
 * an array or object. The function/test it takes in is used on each element, but it
 * has no exit unless assigned to a variable for return. 
 * 
 */
 
 
/**
 * indexOf : designed to return the position of an element or -1 if it is not present
 * inside of the array. The process is possible by looping through the array from the 
 * beginning. 
 * 
 * @param {array} a collection of us to loop through and find the requested element
 * @param {value} a value we're seeking in the array. 
 * 
 * @return {number} a numerical value that represents the index location of the input
 * argument (value);
 * 
 */
 
 
/**
 * Filter : designed to loop through an array and take in a function to test each 
 * element of the array to see if it passes. The elements that are 'true' to the 
 * conditions of the function are then returned as an array. Those that are false are
 * not pushed into the new array. 
 * 
 * @param {array} collection to loop through to see what values meet our test
 * @param {function} a test/action on the array that yields a true or false value
 * 
 * @return {array} those values that were true are pushed into an array and returned 
 * once the loop completes 
 * 
 */ 
 

/**
 * Reject : designed to loop through an array and takes in a function/test that 
 * checks each element if it is true or false. All the false values will be pushed 
 * into an array that is returned once the loop completes its cycle. This is the 
 * opposite/inverse of filter. The filter function is used in this function and set to 
 * strictly equal false before it is pushed into an array for return. 
 * 
 * @param {array} a collection used to loop through and find values that don't meet our test
 * @param {function} a test/action performed to see what values meet the false criteria
 * 
 * @return {array} an array returns with those values that are false 
 * 
 */
 
 
/**
 * Partition : designed to split an array into subarrays according to those values that
 * passed the function, and those that do not. The first subarray at the zero index 
 * holds the values that are "truthy", and the second subarray at the 1st index holds
 * the values that are "falsy"
 * 
 * @param {array} a collection that holds the values that will be subdivided by a function
 * @param {function} a test/action that will be performed to separate the values that pass
 * into the first subarray, and the values that don't pass into the second subarray
 * 
 * @return {array} an array returned with two subarrays, the first (zero indexed) will 
 * hold all values that passed the function/test ('truthy' values) and the second (index 1)
 * will hold all values that did not pass the funciton/test ('falsy' values)
 *  
 */
 
 
/**
 * Unique : designed to take in an array and uses the each function to loop through the
 * array to return every value in the array, minus any duplicates. Because the each 
 * function does not return anything, we create a variable and set it equal to an 
 * array to return any values that may pass the test function (parameter in each). This
 * array then gets returned at the end. Within the each function, the next function 
 * used it indexOf. This allows us to check the empty array for the value that we
 * encounter in the collections array. If it is not there, we will push the element
 * into the array. 
 * 
 * @param {array} 



