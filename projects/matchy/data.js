/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

var animal = {};
animal.species = 'dog';
animal['name'] = 'Dug';
animal.noises = [];
// console.log(animal);


//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

var noises = [];
noises[0] = 'woof';
noises.push('ruff');
noises.unshift('arf');
noises[noises.length] = 'bark';

// console.log(noises.length);
// console.log(noises[noises.length-1]);
// console.log(noises);

//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

animal['noises'] = noises;
// console.log(animal[noises]);
animal['noises'].push('meow');
// console.log(animal);

/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *
 * They can be accessed with square bracket notation or dot notation 
 *
 * 2. What are the different ways of accessing elements on arrays?
 *
 * They can only be accessed with square bracket notation.
 *
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////

var animals = [];
animals.push(animal);
// console.log(animals);
var duck = {
    species: 'duck', 
    name: 'Jerome', 
    noises: ['quack', 'honk', 'sneeze', 'whoosh']
};
animals.push(duck);
// console.log(animals);
var bear = {
    species: 'bear', 
    name: 'Mr. Bear',
    noises: ['rawr', 'snooze']
};
var dino = {
    species: 'dinosaur', 
    name: 'Pedro', 
    noises: ['rawr', 'meet meet']
};
animals.push(bear);
animals.push(dino);
// console.log(animals);

//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// I am choosing an array to hold the list of friends because they do not need a 
// property to hold their value. It is a list of friends that may be easily 
// rearranged into alphabetical order. 

var friends = [];
// function named getRandom
// function uses animals array
// returns the index of a random element (use Math.random)
function getRandom(animals) {
    return Math.floor(Math.random() * animals.length);
   

    // this returns a number to use as index in the array
    // Math.random gives a random number 0-1, covers min value
    // multiply by animals.length (max value), covers max value
    // Math.floor rounds the number
}; 
friends.push(animals[getRandom(animals)].name);
// console.log(friends);
dino['friends'] = friends;
console.log(dino);


/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}
