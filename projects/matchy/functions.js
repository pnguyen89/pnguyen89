/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// to reduce user error in typing, match the cases of the names so that
// duplicates won't occur even if they are not typed in the same case
// so use toUpper or toLower + Case()


function search (animals, name) {
    for (let i = 0; i < animals.length; i++) {
        if (name.toUpperCase() === animals[i]['name'].toUpperCase()) {
            return animals[i]; 
        } 
    } return null;
}

//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function replace (animals, name, replacement) {
    for (let i = 0; i < animals.length; i++) {
        if (name.toUpperCase() === animals[i].name.toUpperCase()) {
            return animals[i] = replacement;
        }
    } 
}

//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// function called remove
// two parameters, animals (array) and name
// if animal exists in array, remove

function remove (animals, name) {
    for (let i = 0; i < animals.length; i++) {
        if (name.toUpperCase() === animals[i].name.toUpperCase()) {
            return animals.splice(i, 1);
        }
    } return null;
}

//////////////////////////////////////////////////////////////////////
// Step 4 - Create ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// function called add
// two parameters: array of animals and an object to be added (new)
// loop to check if object has name property with length > 0
// loop to check if object has species property with length  > 0
// object name does NOT match one already in the animals array
// ADD object if ALL conditions are met 

function add (animals, animal) {
    
// code WORKS! 
// break up code into conditions 
// this allows each case to exit if it does not fit the needed properties 

//     for (let i = 0; i < animals.length; i++) {
//         if (animals[i].name.toUpperCase() === animal.name.toUpperCase()) {
//             return null;
//         }
//     }
//     if (animal.name.length === 0 || animal.species.length === 0) {
//         return null;
//     }
//     return animals.push(animal);
// };
    
    
// code below MUST return to exit the loop, then returns with a push to animals array 
// if it doesn't return (to exit), that HAS caused the new animal to push multiple times
// as well as repeat the names of each animal that is already in the animals arrays
    
    for (let i = 0; i < animals.length; i++) {
        if (animals[i].name !== animal.name) {
                if (animal.name.length === 0 || animal.species.length === 0) {
                    return;
                }
            }
            return animals.push(animal);
        } 
    } 





/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
