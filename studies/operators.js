/* 
 * // Assignment operators// : 
 * Assigns the values on the right side of the operands to the left side. 
 * Any operations or evaluations would be made before assigning values to the left side.
 * Example: 
 */     var leagueChampion = 'Captain Teemo'; // string 'Captain Teemo' prints when 
 //             variable leagueChampion is called
        var numberOfKills = 10; // number 10 prints when numberOfKills is called 
/* Arithmetic operations can be paired with the assignment operator to assign the value
 * while completing an arithmetic calculation.
 * Example: 
 */     var startNumber = 10;
 //         Addition Assignment: 
        startNumber += 5; // prints → 15, it is the same as startNumber = 10 + 5, the 
/*              calculation is completed and reassigned to startNumber (now equals 15)
 *              Written out long ways, it would be 
 */     startNumber = startNumber + 5
/* The arithmetic operator with the equal signs eliminates the need to rewrite the whole 
 * variable again for the calculation to be completed. This applies to any arithmetic 
 * operator. 
 *      variable name (arithmetic operator with equal sign) value 
 *          Subtraction Assignment: 
 */     startNumber -= 4; // prints → 11, startNumber = 15 - 4, value 11 is assigned to startNumber
/*          Multiplication Assignment: 
 */     startNumber *= 2; // prints → 22, startNumber = 11 * 2
/*          Division Assignment: 
 */     startNumber /= 11; // prints → 2, startNumber = 22 / 11
/*          Remainder Assignment: 
 */     startNumber %= 1; // prints → 0, startNumber = 2 / 1, this equals to 2 remainder 0
/*          Exponential Assignment: 
 */ //  startNumber = 3;
    //  startNumber **= 3; // prints → 27, startNumber = 3 ^ 3, also, 3 x 3 x 3
 
 
 
/*
 * // Arithmetic operators // : 
 * Arithmetic operators perform basic mathematic calculation like, add (+), subtract (-), 
 * multiply (*), and divide (/). 
 * Examples: 
 */     10 + 2 // prints → 12
        10 - 2 // prints → 8
        10 * 2 // prints → 20
        10 / 2 // prints → 5
        
/* 
 * Other arithmetic operators include : 
 *  remainder (%)
 */     21 % 3 // prints → 0 because there is no remainder 
        21 % 2 // prints → 1 because 21 divide by 2 is 10 remainder 1
/*  increment (++)
 *      this stands for +1. If the signs are placed before the variable (++a), the return would 
 *      print the value + 1. If the signs are placed after (a++), the return would be the value, 
 *      before adding one.
 */     var moreIceCream = 1;
        moreIceCream++; // prints → 1
        ++moreIceCream; // prints → 2
/*  Think of it in terms as, if the symbols are after, print the value before math
 *  If symbols are before variable name, do math and return value. 
 *
 *  decrement (--)
 *      subtract one 
 */     var lessHomework = 10;
        lessHomework--; // prints → 10 because value printed before subtracting 1
        --lessHomework; // prints → 11 because subtraction completed and returned 
/* 
 *  exponential operator (**)
 *      performs math with exponents
 *      3 ** 4 // this means 3 to the power of 4, which is also 3 x 3 x 3 x 3 = 81
        2 ** 4 // prints → 16 ( 2 x 2 x 2 x 2)
 */
 
/*
 *
 * // Negation / Bang Operator (!) //
 * A logical operator
 * changes the "trutiness" of a value
 * If the value is true, it would be false and vice versa
 * Example: 
 */     1 == 1 // prints → true because one equals one
        1 != 1 // prints → false because bang operator translates operation into 
               // 1 is not equal to 1
        1 != 2 // prints → true, tranlsated into 1 is not equal to 2
/* It works to negate any boolean conditions/methods as well 
 * Example: 
 *      .hasOwnProperty : a method used on objects that returns true or false if the 
 *              object contains that property. 
 */         var objDisneyPrincesses = {
                Aladdin: 'Jasmin', 
                Brave: 'Merida', 
                Cinderella: 'Ella'
            }
            objDisneyPrincesses.hasOwnProperty('Aladdin'); // prints → true because
/*              the property Aladdin as a value in this object.
 */         !objDisneyPrincesses.hasOwnProperty('Aladdin'); // prints → false because there
/*              is a property for Aladdin. 
 *              This is an example of a unary operator using the ! bang operator.
 */


/*
 * 
 * // COMPARISON OPERATORS // 
 * Compares two values and evaluates to two possible outcomes, true or false (boolean). 
 * Even if the two values are not the same datatype, Javascript converts them for comparison,
 * typically converted to numeric value for comparison. However, Javascript does NOT convert
 * datatypes with strict comparison. If it is strict comparison, Javascript evaluates the 
 * value and datatype as is. 
 *
 * Comparison Operators: 
 *       Equality (==) : returns true if equivalent, false if not. Javascript with convert the 
 *           datatype to one type for comparison. 
 *           Example: 
 */          1 == 1 // prints → true
            '1' == 1 // prints → true, Javascript datatype conversion
             1 == 2 // prints → false
/*      Strict Equality (===) : returns true if equivalent, but Javascript does NOT 
 *           convert datatypes for STRICT comparison. 
 *           Example: 
*/           1 === 1 // prints → true
             1 === '1' // prints → false
/*      Not Equal (!=) : returns true if operands are not equal
 *           Example: 
 */          1 != 2 // prints → true
             1 != 1 // prints → false
             1 != '1' // prints → false because Javascript converts datatype
/*      Strict Not Equal (!==) : returns true if operands are not equal and are not the 
 *           same type. Javascript does NOT convert datatype with strict comparison.
 *           Example: 
 */          1 !== 2 // prints → true
             1 !== '1' // prints → true
             1 !== 1 // prints → false
/*      Greater Than (>) : returns true if the left operand is bigger/higher than the 
 *           right operand.
 *           Example: 
 */          1 > 0 // prints → true
             '2' > 1 // prints → true 
             1 > 2 // prints → false
/*      Less Than (<) : returns true if the right operand is bigger/higher than the 
 *           left operand.
 *           Example: 
 */          1 < 2 // prints → true
             1 < '2' // prints → true 
             1 < 0 // prints → false
/*      Greater Than or Equal To (>=) : returns true if left operand is greater than or equal 
 *           to the left operand. 
 *           Example: 
 */          1 >= 1 // prints → true
             '3' >= 1 // prints → true b
             1 >= '3' // prints → false
/*      Less Than or Equal To (<=) : returns true if right operand is greater than 
 *           left operand.
 *           Example: 
 */          1 <= 2 // prints → true
             2 <= 1 // prints → false
             2 <= '5' // prints → true



/* COMPARISONS also work with strings/alpha characters
 *       Think of letters closer to a to be lower numbers than letters closer to z
 *       Examples: 
 */      'a' < 'z' // prints → true
         'apple' > 'alpha' // prints → true
         'Ann' < 'ann' // prints → true because uppercase letter values are "below" lowercase
/*      Comparison of capitalized strings may be thought of in a way of the alphabet written 
 *       as Aa, Bb, Cc, Dd ... and so on.
 *       Cap A is first, and as it progresses down the alphabet, the value of the letter increases.
 *       So, if alphabets had numeric value, it could be like uppercase A = 1 and 
 *       lowercase a = 1.1, hence lowercase a is bigger. 
 *       More examples: 
 */      'miso' < 'ramen' // prints → true because m comes before r in the alphabet
         'spicy' === 'spicy' // prints → true
         'Tuna' > 'tuna' // prints → false because lowercase t is bigger in value
         'sUshi' < 'sushi' // prints → true because the second letter for comparison in the
/*           string 'sushi' is evaluated since the initial letter, 's', is the same. 'u' is 
 *           taken in for evaluation. 
 */
 

/*
 * // Logical operators // 
 * Used when two conditions are being compared and return a boolean, true or false value.
 *      Logical And (&&): 
 *          Used when two conditions must be met as true to evaluate a specific block of code. 
 *      Logical Or (||): 
 *          Used when either condition must be met to evaluate a specific block of code. 
 *          One may be true and one may be false and the block of code will still execute.
 *      Logical NOT / Bang Operator (!): 
 *          Flips the trutiness of an expression. See above for more examples. 
 *      Examples: 
 */         var captainTeemo = 'cute';
            var teemoIs = 'ready for duty';
            console.log(captainTeemo === 'cute' && teemoIs === 'ready for duty') // prints → true
            console.log(captainTeemo === 'adorable' || teemoIs === 'ready for duty') // prints → true
            captainTeemo != 'cute'; // prints → false because captainTeemo evaluates to the
 //                 string 'cute'. 
            captainTeemo != 'troll'; // prints → true (captain teemo does not equal to troll)

 
/*
 *
 * // Unary operators (!, typeOf, -) // 
 * An operation completed on only one operand
 * An example is the bang operator is used in the logical operators and bang operator section above. 
 * - operator: 
 *      This operator makes numeric values negative 
 *      Example:
 */         -2 -5 // prints → -7
            -5 + 4 // prints → -1
/*
 * typeof operator: 
 *      This operator helps us identify the datatype of the value/operand we are using 
 *      It is used by typing typeof followed by the variable name of the operand you want
 *      to evaluate a datatype for. The datatype of the operand will return as a string.
 *      Example: 
 */         typeof captainTeemo; // prints → 'string'
            typeof startNumber; // prints → 'number'
            typeof objDisneyPrincesses; // prints → 'object'
/*      Be aware! There are some datatypes that will return as an object, because of their
 *      datatype. Those datatypes include: arrays, null, and Date
 *      In these instances, you must use other ways to test to check their value. 
 *      To test an array, use
 */         Array.isArray(); 
                Array.isArray([]); // prints → true because square brackets hold arrays
                Array.isArray({}); // prints → false because curly braces hold objects
/*      To test if it a null, use a condition, set the variable strictly equal to null
 *      and make a return accordingly. 
 *      
 *      To test the date, use
 *         instanceof 
 *      Type the value before instanceof and Date to follow instanceof. True returned would 
 *      mean that value is a Date and false if not. 
 */         value instanceof Date // prints true or false depending on what is placed at value
            var value = 10;
            value instanceof Date; // prints → false because value is a number and not a date
            var value = new Date;
            value instanceof Date; // prints → true because value now holds the currently date



/*
 *
 * // Ternary operator (a ? b : c) // 
 * This operator takes in three operands. 
 * This is a possible shorthand way to write an if statement with two possible outcomes. 
 * In the placement of (a ? b : c)
 *      a is the condition
 *      b is the true statement 
 *      c is the false statement 
 * Example: 
 */     var fallCoffeeFlavor = 'pumpkin spice';
        fallCoffeeFlavor === 'pumpkin spice' ? 'It is Fall!' :  'It is not Fall yet.'
//          this will print → 'It is Fall!' the condition evaluated to be true 
        fallCoffeeFlavor === undefined ? 'It is Fall!' : 'It is not Fall yet'
/*          this will print → 'It is not Fall yet' because fallCoffeeFlavor is 
 *          NOT undefined, so the condition is false
 *
 */


