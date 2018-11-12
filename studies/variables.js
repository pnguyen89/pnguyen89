/*
* VARIABLES:
*
* 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
* are named identifiers that can point to values of a particular type, like a Number, String,
* Boolean, Array, Object or another data-type.  Variables are called so because once created, we
* can CHANGE the value (and type of value) to which they point.
*
* 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
* variable.
*
* 2. There are 2 phases of using variables: declaration and initialization (or assignment).
*/

// 1. declaration //
var myName;

/*
* At the declaration phase, the variable myName is undefined because we have NOT initialized
* it to anything
*/
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";


/*
 * // var, let, const // 
 * 
 * Variables may be create using three different types of keywords: var, let, and const
 * Variables have scope, meaning where the values can be used and reassign, if the variable
 * type allows it. Global scope may be used inside and outside of a code block. Local scope
 * only allows the variable to be used within the scope of code that it is placed. It cannot
 * be pulled to another block of code. See example below in let and const.
 * 
 * var : 
 *  This is a global scope keyword that can be reassigned a different value. 
 * Example: 
 */     var sayHello = "Hello!";
        sayHello = "Bonjour!";
        sayHello = "Hola!";
/* In this example, the var keyword lets us assign/give a new value to the variable sayHello. 
 * 
 * let : 
 *  This keyword has local scope, but may be reassigned a different value 
 * Example: 
 */     let sayGoodbye = 'Adios';
        if (sayGoodbye === '') {
            let sayGoodbye = 'Au revoir';
            console.log(sayGoodbye); // nothing is printed because condition is not met
        } else if (sayGoodbye === 'Adios') {
            let sayGoodbye = 'Sayonara'; // 'Sayonara' is printed, but only within the
//              scope of the if statement
            console.log(sayGoodbye);
        } else {
            let noGoodbye = 'Hello, again.'
            console.log(noGoodbye);
        }
        console.log(sayGoodbye); // prints → 'Adios' because sayGoodbye was declared 
/*      globally. It can not be changed within the if statement (local scope)  because it
 *      does not have access. Inside of the if statement, 'Sayonara' was printed because 
 *      the local scope has access to the global scope varaible
 *      **IF the variable sayGoodbye was only declared and not intialized, the return would
 *      be undefined and the log of noGoodbye would be show in the console was 'Hello, again'.
 *
 *      IF the code was rewritten to eliminate the let keywords inside of the if statement: 
 */     let sayGoodbyeAgain = 'Adios';
        if (sayGoodbyeAgain === '') {
            sayGoodbyeAgain = 'Au revoir';
            console.log(sayGoodbyeAgain); 
        } else if (sayGoodbyeAgain === 'Adios') {
            sayGoodbyeAgain = 'Sayonara'; 
            console.log(sayGoodbyeAgain);
        } else {
            let noGoodbye = 'Hello, again.'
            console.log(noGoodbye);
        }
/*      The variable inside of the if statement, sayGoodbye, now becomes a global variable
 *      There is access to the variable inside of the if statement which allows for the return
 */     console.log(sayGoodbye); // prints → 'Sayonara'
 
/* 
 * const: 
 *  This is a local scope keyword. Values MUST be intialized to the declared const variable
 *  when it is created. They cannot be changed or altered in any way. Be aware of objects 
 *  and arrays. Const keywords may still allow manipulation to the object/array because the
 *  object/array does not change as a datatype.
 *  Examples: 
 */     const dinoName = 'Pedro';
//          Pedro is the assigned string value to variable dinoName. 
//      dinoName = 'Hansel'; // prints → TypeError: Assignment to constant variable. This 
/*          means that it cannot be reassigned. 
 *
 * Const local scope also works like let local scope
 * Both const and let are NOT hoisted to their code block, meaning they are accessed only where
 * they are declared and intialized. 
 * The var keyword is global and is hoisted, so it can be used anytime, anywhere. 
 * 
 */
 

/* 
 *
 * // Hoisting // 
 * When code is run, it is run two times. The first time it runs, it pulls all the names of
 * var keywords to the top AND functions with their definitions. 
 *
 * This allows the program to recognize all the variable names that are accessible throughout
 * the code. 
 * Example: 
 */ //  console.log(name); // prints → name is not defined
        console.log(myHero); // prints → undefined because the variable below is brought
 //         to the top (hoisted), but only the name, not the value it is assigned
        var myHero = 'Farmer Thor';
        console.log(myHero); // prints → 'Farmer Thor'
/* However, if we use the keyword const: 
        console.log(greenGoodness); // prints → greenGoodness is NOT defined because the
          variable is not hoisted to the top. 
        const greenGoodness = 'avocado'; 
*/