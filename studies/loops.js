/*
 * 
 * // While loops //
 * While loops continue to execute 'while' a condition is being met, until it is no longer met
 * Example: 
 */     var countToTen = 1;
        while (countToTen < 11) {
            console.log(countToTen);
            countToTen++;
        }
/*  the numbers 1, 2, 3, 4, 5, 6, 7, 8, 9, and 10 will print to the console. 
 * The number 1 is less than 11, this meets the condition, so the console will print 1,
 * then adds 1 to countToTen, then continues to loop until the condition is no longer 
 * true, which is when countToTen equals 11, so the loop stops.
 * 
 * Example: 
 */     var goBackwards = 10;
        while (goBackwards > 0) {
            console.log(goBackwards);
            goBackwards--;
        }
/* The loop will start at 10 and each number that meets the condition will be logged.
 * This will print 10, 9, 8, 7, 6, 5, 4, 3, 2, and 1. It stops at 1 because 1 is the last
 * value that meets the condition before it stops. Zero is not greater than zero. 
 * To include zero, the condition in the parenthesis can be >=0 or > -1.
 *
 * For any loops, be careful of the conditions set because an infinite loop will cause 
 * the program to crash. 
 */ 
 
 
 /*
  * // for Loops // 
  * For loops are bested used for looping through arrays. 
  * There are 3 things that need to be stated to use a for loop: 
  *     1. a starting point (initializer)
  *     2. a stopping point (condition)
  *     3. an operation to increment up or decrement down
  * These 3 must be separated by a semi-colon
  * Example: 
  */    var arrayOfNumbers = [1, 2, 3, 4, 5];
        for (let i = 0; i < arrayOfNumbers.length; i++) {
            console.log(arrayOfNumbers[i]);
        }
/* This would print 1, 2, 3, 4, 5. This happens because the condition is set at 0, which 
 * is where 1 is located, then the variable increases by 1, which is 2. Since 2 is less than
 * the length of the array, it continues to loop until the condition is no longer true.
 *
 * If we want to loop backwards, starting at 5 and ending at 1, we simply change the starting
 * point, condition, and decrement
 */     for (let i = arrayOfNumbers.length-1; i > -1; i--) {
            console.log(arrayOfNumbers[i]);
        }
/* This prints 5, 4, 3, 2, 1 because the condition is set at the index 4 (the end of this array),
 * from there, the value subtracts 1, giving the next index and value until the condition is met.
 */ 
 
 
/*
 * 
 * // for in Loops// 
 * For in loops are used on objects. The loop returns every key/property in the object. 
 * You also have the ability to return the value at the key as well. 
 * Example: 
 */     var fruitClassExamples = {
            berries: 'strawberries', 
            citrus: 'lemon', 
            tree: 'apple', 
            vine: 'grapes',
            tropical: 'mango'
        };
        for (var key in fruitClassExamples) {
            console.log(key); // this prints all the keys: 'berries', 'citrus', 'tree', 
 //         'vine', 'tropical'
            console.log(fruitClassExamples[key]); // this prints all the values at the
 //         key: 'strawberries', 'lemon', 'apple', 'grapes', 'mango'
        } 
