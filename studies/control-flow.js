/*
 * Code is executed/read line by line, from top to bottom, after variables and functions
 * are hoisted. 
 * When statements/conditions are made, a conscious effort should be put into the placement
 * of each condition. Once a condition is met, a return statement or break is used to 
 * 'stop' the code from evaluating the following conditions and exits. Without a return 
 * or break, the computer continues to evalate the conditions following until it is given
 * a point to stop. 
 * There are times when conditions won't be met with the ones we wish to evaluate, so a
 * default condition may be placed in, so a return occurs. 
 * 
 * 
 * // If // 
 * If statements are used when we want to evaluate something to true or false, boolean. 
 * Example: 
 */     var a = 10; 
        var b = 25;
        if (a === b) {
             //execute this code block here if a is strictly equal to be
             // in this case, the code would not execute because 10 does not strictly equal 25
        }
/* You can be compare or evaluate anything between the parenthesis that will give you an 
 * answer of true/false. 
 * 
 * In order to have multiple conditions, an 'else- if' may be used, or a default condition
 * may be used with 'else'. 
 *
 * Example: 
 */     else if (a > b) {
            // if a is not strictly equal to b and a is greater than b execute this, instead
            // this block of code would not execute because 10 is not greater than 25
        } else {
            // if neither of the conditions above are true, execute this code here
            // none of the conditions were met with those values, so this code will execute
        }
/* In if statements, you can chain as may 'else-if' statements as needed. 
 * The placement of code to be executed would be placed inside the curly braces {}. 
 * The code inside the curly braces are refered to a code block. 
 * 
 * If, else-fi, else statements can get lengthy if there are many conditions to be tested. 
 * A way to reduce the code is to use switch statements. 
 * Switch statements compare a value/expression to 'cases' to see if they match. 
 * These statements are formated to execute the 'instructions' associated with that
 * case, but you must follow each case and execution statement with a 'break' in order
 * for the statement to be returned. If no 'break' statement is used, the code will 
 * continue to the next line. 
 * With both if, else-if, else and switch statements, the order of the conditon/case
 * is important for evaluation. A condition may be met in multiple areas, but the 
 * program will execute the first code block that is true. 
 * 
 * 
 * Example of Switch statement: 
 */     var disneyVillain = 'Ursula';
        switch (disneyVillain) {
            case 'Cruella':         // input in disneyVillain does not match this case
                console.log('Where are my pups?');
                break;
            case 'Scar':            // it does not match here either, it skips to the next
                console.log('I am king!');
                break;
            case 'Ursula':          // this is a match, the string is sent to the console
                console.log('Call me Queen of the Sea!');
                break;              // this statement allows us to exit the statement
            default:                // if no input matched the above cases, execute this
                console.log('I\'m bad to the bone');
                break;
        }
/* 
 * If no 'break' statement was used after case 'Ursula' and it's string to be logged, 
 * the string "Call me Queen of the Sea" and 'I'm bad to the bone' would both be sent to
 * the console. 
 * Break statements need to be placed at the end of each case statement. 
 * 
 */