//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// Should take an object and return its values in an array

function objectValues(object) {
    var hold = [];
    for (var key in object) {
        hold.push(object[key]);
    } 
    return hold; 
} 






// return Object.values(object);
// returns keys or values in a array (without using a loop)
// "built in" loop - Object method
// make sure .keys or .avalues (plural)


//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////


// takes an object
// returns keys as strings
// separated by space

function keysToString(object) {
    return Object.keys(object).join(' ');
}


// return Object.keys(object).join(' ');
// because it is already turned into an array, you can use join to return a string

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    let holdStr = [];
    for (var key in object) {
        if (typeof object[key] === 'string') {
            holdStr.push(object[key]);
        }
    } return holdStr.join(' ');
}

// don't need to pull keys out first! 
// USE for in loop
// then use condition if that key - value === string, then push 


//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    if (Array.isArray(collection) === true) {
        return 'array';
    } else {
        return 'object';
    }
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    return string[0].toUpperCase() + string.substr(1, (string.length - 1));
}

// .slice 
// string.slice(1, string.length)
// OR string.slice(1)

// str.substr(1)
// (1) is the index position for where it starts to join again 
// slice off first letter, and add to the rest of capitalization 

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    let strArray = string.split(' ');
    let newStrArr = [];
    for (let i = 0; i < strArray.length; i++) {
        newStrArr.push(strArray[i][0].toUpperCase() + strArray[i].slice(1));
    }
    return newStrArr.join(' ');
}
//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
    let nameCap = object.name[0].toUpperCase() + object.name.slice(1);
    return 'Welcome' + ' ' + nameCap + '!';
}

// can use FUNCTION 5 in this !!! also for function 8, use the function from function 5

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
    let nameCap = object.name[0].toUpperCase() + object.name.slice(1);
    let speciesCap = object.species[0].toUpperCase() + object.species.slice(1);
    return nameCap + ' is a ' + speciesCap;
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// takes in an object 
// if object has noises array, return as string 
// if no noises array, return there are no noises 


function maybeNoises(object) {
    if (object.noises === undefined) {
      return 'there are no noises';
      } else if (object.noises.length === 0) {
        return 'there are no noises';
    } else if (Array.isArray(object.noises) === true) {
        return object.noises.join(' ');
    // }  else {
    //     return 'there are no noises';
    // }
}
}

// don't need last else statement because preceeding catches 
// if no noises propr is there
// if empty array
// --> if not empty, there is an array, then return array of noises as string



// to shorten... code? 


// function maybeNoises(object) {
//     if (object.noises === undefined || object.noises[0] === undefined) {
//         return 'there are no noises';
//     } else {
//         return object.noises.join(' ');
//     }
// }



//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// takes two arguments, one string of words, and one word
// loop through the string of words to see if it matches the input word
// return true or false 

function hasWord(string, word) {
    let strArray = string.split(' ');
    for (let i = 0; i < strArray.length; i++) {
        if (word === strArray[i]) {
            return true;
        }
    } return false; 
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// takes two arguments 
// takes the name and adds it to the friends property in the object
// return the object 

function addFriend (name, object) {
    object.friends.push(name);
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// takes two arguments 
// return true if name is a name in object 

function isFriend(name, object) {
    if (object.friends === undefined) {
        return false;
    }
    for (let i = 0; i < object.friends.length; i++) {
        if (name === object.friends[i]) {
            return true; 
        }
    } return false; 
}

// object.friends.includes(name);
// .includes()
// checks an array for an element, returns true or false 

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// takes two arguments: name and array(of objects)
// each name needs to be looped through and compared to friends
// if they DON'T match, return them 
// returning the people who are NOT friends with this person 

// given a name
// check that name's friend's list. 
// if that friend's list doesn't equal to the rest of the names, 
// return the names that don't appear in the friends list

// previous function already goes through friends list and returns true or false if friends
// utilize the function in this function to return names that aren't present 

function nonFriends(name, array) {
    var namesArr = [];
    
    for (let i = 0; i < array.length; i++) {
        if (isFriend(name, array[i]) === false && name !== array[i].name) {
            namesArr.push(array[i].name);
        }
    }
    return namesArr;
    
// THIS WORKS!!!!
// fix brackets as needed 

//   let everyOne = [];
//   for (let i = 0; i < array.length; i++) {
//     if (array[i].name !== name){
//       everyOne.push(array[i].name);
//     }
//   }
// console.log(everyOne, "all the people, but me"); //prints possible friends
//  let friendsList;
//  for (let i = 0; i < array.length; i++) {
//   if (name === array[i].name) {
//     friendsList = array[i].friends;
//   }
//  }
//  console.log(friendsList, 'we franz');
// let notFriends = [];
// for (let i = 0; i < everyOne.length; i++) {
//   if (friendsList.indexOf(everyOne[i]) === -1) {
//     notFriends.push(everyOne[i]);
//     // console.log(notFriends, 'why not');
//   }
// }
// return notFriends;
// }
// // BELOW USES INCLUDE

// for (let i = 0; i < everyOne.length; i++) {
//   if (friendsList.includes(everyOne[i]) === false) {
//     notFriends.push(everyOne[i]);
//     // console.log(notFriends, 'why not');
//   }
// }

// return notFriends;


    
/// USE Flag variable to compare to array in 
// go back and try this 


    
    // for (let j = 0; j < array.length; j++){
    //     namesArr.push(array[j].name);
    //     console.log(namesArr);
    // }
    // let friendsList = [];
    // for (let i = 0; i < array.length; i++) {
    //     if (name === array[i].name) {
    //         friendsList.push(array[i].friends);
    //         console.log(friendsList);
    //     }
    // }
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// function takes an object, key, and a value
// update key and value 
// if key doesn't exist, create it 
// INSTRUCTIONS DO NOT TELL YOU TO RETURN OJBECT
// LOOK AT EXPECTED return :(

// function updateObject(object, key, value) {
//     if (!object.hasOwnProperty(key)) {
//         object[key] = value;
//         console.log(object);
//     // }
//     // if (object[key] === undefined) {
//     //     object[key] = value; 
//     //     console.log(object);
//     } else {
//         object[key] = value; 
//     } return object;
// }

function updateObject(object, key, value) {
    if (object[key] === undefined) {
        object[key] = value; 
        console.log(object);
    } else {
        object[key] = value;
    }
    return object;
}


//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

// takes an object and an array of strings
//should remove any properties on objects if listed in array
      var data = {a: "one", b: "two", "hokey": false};
      removeProperties(data, ["a","hokey"]);
      
function removeProperties(object, array) {
    for (var key in object) {
        for (let i = 0; i < array.length; i++) {
            if (key === array[i]) {
                delete object[key];
            }
        }
    }
    
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// takes an array
// returns array with duplicates removed 

function dedup(array) {
    let holdArray = [];
  for (let i = 0; i < array.length; i++) {
    if (holdArray.includes(array[i]) === false) {
      holdArray.push(array[i]);
    }
  } return holdArray;
}

// can also use .indexOf
// holdArray.indexOf(array[i]); 
// checks to see if holdArray has the array[i] value, it should return 1 if true
// returns -1 if false 

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}