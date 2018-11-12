/* How data is categorized into sub categories : 
 * Two types of datatypes: 
 * Simple and Complex
 * 
 *
 * Simple/Basic/Primitive : atomic (used as building blocks for bigger structure/framework) and 
 * immutable (cannot be changed) - they only hold one type of data type at a time
 * Example: 
 */
        var example = "two"; // string
        var example = 2; // number 
/* Cannot be → var example = “two”, 2; 
 * Cannot be collection of different datatypes (or more than one of a singular datatype
 * Operation on simple datatypes return new datatype values; original value is not altered
 * Typically stored in about 8 bytes of memory → each variable is stored using up to 8 bytes 
 * ( for example: booleans only use 1 byte whereas numbers may use 8 bytes )
 * Primitive data types are copied by values 
 * Example: 
 */     var pizzaCrust = "thin"; 
        var crustType = pizzaCrust; // value stored in pizzaCrust is copied into crustType
        crustType = "pan"; // changing what is stored at crustType doesn’t affect what is stored at pizzaCrust
        console.log(pizzaCrust); // prints → “thin”


/* 
 * Complex : collection of datatypes, may include more than one type of datatype; includes objects, 
 * arrays, and functions; 
 * Cannot be stored in 8 bytes of memory → can be any size/have an indefinite size; 
 * Complex data types of copied by reference 
 * Example: 
 */     var cat = {
        Name: "Kodi", 
        Species: "cat", 
        Hobbies: ["coding", "art", "traveling"]
        }

        var myCat = cat; 
/* value in myCat is a reference to value stored in cat
 * changing any values to myCat will also change it to cat 
 */
    myCat.Name = "Kodii"; // changing value of myCat at Name changes it on all references
    console.log(myCat["Name"]); // prints → “Kodii”

/*
 * 
 * Primitive values are passed to a function BY COPY, meaning an exact copy of the value
 * is created and each value is assigned to their indiviaual variable. 
 * Complex values are BY REFERENCE, which means the values point to the origina location
 * for the input value.  
 * Simple data types of simple because they only take up to 8 bytes of memory. 
 * Complex data types take on more, so they reference back to the original input for stored
 * value. 
 * 
 * Example: 
 */     var catName = 'Kodii';
        var catFriend = catName;
        console.log(catName); // prints → 'Kodii'
        console.log(catFriend); // prints → 'Kodii'
        catName = "Porkchop"; 
        console.log(catFriend); // prints → 'Kodii'because catFriend was already assigned 
 //             the string 'Kodii' prior to catName reassignment
 
        var animalFarm = {
            farmer: 'Thor', 
            pig: 'Porkchop', 
            cow: 'Charlie'
        }
        var farmNames = animalFarm;
        farmNames.pig = 'Moozy'; // the name is changed in the object animalFarm that 
 //             farmNames is referencing to
        console.log(animalFarm.pig); // prints → Moozy, the new assignment to the orginal
/*              whatever name changes are made, it will only be changed at the orignal 
 *              location and all others that were set equal to that variable reference 
 *              back to the original for the values. 
 *
 */
        
        
/*
 * 
 * Number : numeral/numeric values - can be integers or decimals
 * They are not enclosed in quotes when written. 
 * They allow for mathematical calculations. When working with numbers as strings, 
 * (numberic value in quotes), Javascript converts the types to complete the mathematic
 * equation. However, if a strict comparison is being used, no conversion is made
 * Example: 
 */     var one = 1;            // written without quotes, typically
        var two = '2'           // written inside quotes
        if (two > one) {
            return true;        // returns true due to conversion of datatypes
        }
 
 
/*
 *
 * String: any collection of characters enclosed between quotes
 * They may be manipulated to build up or break down by concacting strings together
 * or using methods to split them up into arrays to name a couple. 
 * Example: 
 */     var cookieType = 'chocolate chunk'; // string of characters, with space
        var brownieType = 'fudge'; // string of characters
        var amountOfDessert = 'I had 3 desserts!'; // string of characters and number


/*
 * 
 * Boolean: handles logic - true or false values
 * when conditions are set to only give two values, the return is boolean or the 
 * value or input may be boolean 
 * Example: 
 */     var twoPlusTwo = 4;
        twoPlusTwo === 4; // prints → true
        twoPlusTwo === 5; // prints → false


/*
 *
 * Array: collections of values/elements in a list, enclosed in [ ]. 
 * These are complex data types. They are zero indexed, so the first value starts at
 * zero and goes up. Arrays can store any type of data inside of them. 
 * In order to access items in an array, you must use bracket notation. 
 * Example: 
 */     var porkchopPig = [1, 'pink', 'soft'];
        porkchopPig[0]; // prints → 1 because this is in the first position
        porkchopPig[1]; // prints → 'pink'
        porkchopPig[2]; // prints → 'soft'

        
/*
 *
 * Object: collection of key-value pairs, enclosed in { }.
 * Objects are complex data types. They are not ordered like arrays and to access the 
 * values, you can use either square brackets or dot notation. 
 * Example: 
 */     var porkchopThePig = {
            age: 1, 
            color: 'pink', 
            squishiness: 'soft'
        };
        porkchopThePig['age']; // prints → 1, keys are strings, so you need quotations
        porkchopThePig.age; // prints → 1 as well. 
 // Using this method, you can also alter the value at these properties. 
        porkchopThePig['color'] = 'blue'; 
        porkchopThePig.color = 'blue'; 
 // With bracket notation or dot notation, the property color in the object porkchopThePig
 // is no longer pink, but changed to blue. 
        
 
/*
 *
 * Function: perform actions on data and returns it
 * They can be used as many times as needed, without rewriting a whole block of code. 
 * Once the function is defined, it can be invoked for use, replacing parameters with 
 * the arguments a needed. 
 * Example: 
 */     function compareTwoNumbers (a, b) {
            if (a > b) {
                return a + ' is bigger';
            }
            else if (a < b) {
                return b + ' is bigger';
            } else {
                return a + ' and ' + b + ' are equal';
            }
        }
        compareTwoNumbers(2, 5); // prints → '5 is bigger'
        compareTwoNumbers(5, 5); // prints → '5 and 5 are equal'
 // This function was called again with new arguments. 
 
 
/*
 *
 * Undefined: undefined value 
 * Values may be undefined if the are declared and not initialized. 
 * The value is not set, or there is not value present for the variable
 * Example: 
 */     var beast; 
        console.log(beast); // prints → undefined because it has not been intialized, 
//          so it's value is set to undefined.
        beast = 'prince';
        console.log(beast); // prints → 'prince' since the value is set to beast
        typeof undefined // prints 'undefined'
        
        
/*
 *
 * Null: none or absence of value
 * Null is a form of undefined value, but is not undefined
 * Directs to an object that does not exist
 * Example: 
 */     null == undefined // prints → true
        null === undefined // prints → false
        !null // prints → true
        typeof null // prints → object
        
        
/*
 *
 * NaN: numeral type that stands for Not a Number but is categorized as a “number” 
 * We can use isNaN() to check to see if it is a number
 * NaN is the return when trying to compute things together that include numbers, 
 * but will not return a number. 
 * Example: 
 */ 'octopus' - 8 // prints → NaN
    'octopus' + 8 // prints → 'octopus8' because the add sign concacts and turn the 
 //     the number 8, to a string
 
 
/*
 * 
 * Infinity and -Infinity 
 * Infinity is an infinite numbers, towards the positives and -Infinity is an infinite
 * number towards the negative direction. 
 * To create an infinite positive infinity, use Number.POSITIVE_INFINITY
 * To create an infinite negative infinity, use Number.NEGATIVE_INFINITY
 *
 * The intiial values of infinity and -infinity are respective of the properties above.
 * See MDN for example for use.
 *
 */