/*
 * The two phases to using functions: 
 * First we must define or declare the function. This is what the function will do, 
 *      it's actions. We create parameters (placeholders) to 'hold' the spot for value
 *      input. 
 * Next we can execute/invoke/call a function by using it's name followed by parenthesis
 *      Inside of these parenthesis, the parameters now hold your arguments. The arguments
 *      are the actual input values to be used to execute the function.
 * 
 * Remember: 
 *      [p]arameters are [p]laceholders and are used when the function is being declared
 *          or defined so that values may be input later for evalatuion
 *      [a]rguments are [a]ctual values placed inside the function parethesis for 
 *          evaluation. 
 * 
 * 
 * Example: 
 */ function addString(string1, string2) {       // the function is delcared
        return string1 + ' ' + string2;          // within these
    }                                            // 3 lines of code
    var str1 = 'Greetings,';
    var str2 = 'earthling!';
    addString(str1, str2); // here the function is being called with arguments
/* 
 * In the code example above the function is named addString and takes in two arguments
 * (or has two parameters).
 * Those arguments would take the place of the parameters, string1 and string2.
 * Inside the code block, the code being executed when this function is called is to
 * concact the incoming strings, with a space in between. It should print: 
 * 'Greetings, earthling!'
 * 
 * The number of arguments and number or paramenters should match!
 * This is the syntax for a named function using the above as example: 
 *      1. use keyword function → function
 *      2. name of the function → addString
 *      3. parenthesis with parameters → (string1, string2)
 *      4. code block enclosed in curly braces → { return ... }
 * 
 * 
 * To assign a function to a variable, simple use the keyword plus a name, set equal to
 * the function. 
 * 
 * var stringSentence = function addingString() { code here }
 *
 * Functions that are assigned to a variable may be nameless because the function is 
 * called by the variable name. 
 * Functions can OPTIONALLY take inputs, and OPTIONALLY return a single value. 
 * In order to do so, you may set the values accordingly, so that they input values 
 * may be set to a specified variable that has be initialized. 
 * To return a specific output, the code block must hold the distinct instructions on 
 * what you what to specifically return.
 * 
 *
 * Scope: Functions can see and modify variables in parent or global scopes. The inverse
 * is NOT true.
 * 
 * Closures: Functions form closures around the data they house. If an object returned 
 * from the Function and is held in memory somewhere (referenced), that closure stays 
 * ALIVE, and data can continue to exist in these closures! (See: our meeting-room app 
 * for an example!) (ALSO, see: Understanding JavaScript Closures with Ease)
 *
 */