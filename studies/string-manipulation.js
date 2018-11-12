/*
 * String manipulation with operators
 * Strings can be added/concacted together. 
 * Example: 
 */ var sentencePartOne = 'I am ';
    var sentencePartTwo = 'a cool cat!';
    var wholeSentence = sentencePartOne + sentencePartTwo; 
    console.log(wholeSentence); // prints 'I am a cool cat!'
/* The strings can be added together to form one long string. 
 * When adding strings without a space between the words, make sure to add a space, 
 * like this example: 
 */ var sentencePartUno = 'That is';
    var nextSentence = sentencePartUno + " " + sentencePartTwo;
    console.log(nextSentence); // prints 'That is a cool cat!'
    
    
/*
 * String methods include: .length (gives you the length of the string), .slice() (removes
 * part of the string, taking two parameters, the first is starting point, the second is 
 * the end point), toUpperCase (changing cases to uppercase), toLowerCase (changing case 
 * to lowercase), split() (splits a string into an array, paramter is where the string 
 * is split, encased in quotes)
 * These are just a few of the methods that can be used on strings
 *  Example in use: 
 */     var stringGreeting = 'Hello';
        stringGreeting.length; // prints 5 because you cound each character
        var anotherGreeting = 'Good Day';
        anotherGreeting.length; // prints 8 because spaces are included 
        anotherGreeting.slice(5, 8); // prints 'Good' because ' Day' was removed 
        anotherGreeting.toLowerCase(); // would print 'good day' if no slice method used
        anotherGreeting.toUpperCase(); // would print 'GOOD DAY' if no slice method used
        anotherGreeting.split(''); // prints ['G', 'O', 'O', 'D', ' ', 'D', 'A', 'Y']
