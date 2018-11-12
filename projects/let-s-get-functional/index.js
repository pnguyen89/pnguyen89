// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('lodown-pnguyen89');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./projects/let-s-get-functional
 */
 
 
// ANY PARAMETERS THAT ARE e, i, a are element, index, array 

 
 
// Objective: Find the number of male customers
// Input: Array
// Output: Number
// Constraints: use filter

var maleCount = function(array) {
    // return _.filter(array, (customer) => {return customer.gender == 'male';}).length;
    return _.filter(array, function(customer){
        return customer.gender === 'male';
        
    }).length;
};

// Objective: Find the number of female customers
// Input: Array
// Output: Number
// Constraints: use reduce

var femaleCount = function (array) {
    return _.reduce (array, function (seed, ele, indx) {
        if (ele.gender === 'female') {
        seed++;
        } return seed;
    }, 0)
    
};



// Objective: Find the oldest customer's name
// Input: Array
// Output: String
// Constraints:
var oldestCustomer = function(array) {
//     return _.reduce (array, function (seed, element, index, array) {
//         if (seed.age < element.age) {
//             seed = element;
//             console.log(seed);
//         } return seed.name;
//     })
    
// };
    let hold = 0; 
    return _.reduce(array, function (seed, element, index) {

        if (element.age > hold) {
            seed = element.name;
            hold = element.age;
            // console.log(element.age, 'hello');
            // console.log(seed, 'YOOOO')
        } //console.log(seed, 'hello')
        return seed; 
    }, "")
};
    
    // let ageHighest = 0; 
    // let name; 
    // for (let i = 0; i < customers.length; i++) {
    //     if (customers[i].age > ageHighest) {
    //         ageHighest = customers[i].age
    //         name = customers[i].name;
    //     }
    // } return name; 
// };


// Objective: Find the youngest customer's name
// Input: Array
// Output: String
// Constraints:
var youngestCustomer = function (array) {
//         let ageLowest = 100; 
//     let name; 
//     for (let i = 0; i < customers.length; i++) {
//         if (customers[i].age < ageLowest) {
//             ageLowest = customers[i].age
//             name = customers[i].name;
//         }
//     } return name; 
// };

    let hold = 100; 
    let name; 
    _.each(array, function (ele, ind, arr) {
        if (ele.age < hold) {
            hold = ele.age;
            name = ele.name;
        } 
    })
    return name;
}


// Objective: Find the average balance of all customers
// Input: Array
// Output: Number
// Constraints:

// jsonparse
// Number(#); changes to number instead of string
// there's a way to take off decimals and replace after adition
// take out all of the signs ($ and ,)

var averageBalance = function (array) {
//     let money = _.map(customers, function(customer, i, a) { console.log(customer.balance)}
// );
// // console.log(money);
// // return parseFloat(customer.balance.split('').slice(1).join(''))
// let total = 0; 
// _.each(money, function(ele, i, a) {
//   total = total + ele;
// })

// return total / array.length;
// };
    let money = _.map(customers, function(customer, i, a) { 
        return parseInt(customer.balance.replace(/\W/g, ''))});
    let hold = 0; 
    let total = _.each(money, function(ele) {
      hold = hold + ele; 
    }); 
    
    let decim = (hold/100).toFixed(2); 
    let divi = decim/array.length; 
    return divi; 
};


// USING REDUCE WILL BE FASTER :) 


// Objective: Find how many customer's names begin with a given letter
// Input: Array, Letter
// Output: Number
// Constraints:

var firstLetterCount = function (array, letter) {
     return (_.filter(array, function(customer) {
        return customer.name[0].toLowerCase() === letter.toLowerCase();
    })).length; 
};
    // let count = 0;
    // if (_.contains(array.name[0], letter)) {
    //         count++;
    //     }
    // return count;
    // }
    // Contains loops until it finds the value, and exits! 
    // In order to continue looping through the whole array, use each first! 
    // then set your conditional if contains.. 
    // condition should return true or false and add to a counter, 
    // returning the counter at the end to get a number! 



// Objective: Find how many friends of a given customer have names that start with a given letter
// Input: Array, Customer, Letter
// Output: Number
// Constraints:
// loop through array for correct object that matches the customer, then 
// push that customer's friends to an empty array. (reassigned) 
// use filter like above to find matching letters 

var friendFirstLetterCount = function (array, customer, letter) {
  let friendsOf; 
  _.each(array, function (element, index, array) {
      if (element.name === customer) {
          friendsOf = element.friends;
      }
  })
  //console.log(friendsOf);
  return (_.filter(friendsOf, function(ele, index, array) {
      // console.log(ele)
    return ele.name[0].toLowerCase() === letter.toLowerCase();
  })).length; 

};

// Looping an each within an each and setting a counter would work! return counter for value!!


// Objective: Find the customers' names that have a given customer's name in their friends list
// Input: Array, Name
// Output: Array
// Constraints:

var friendsCount = function (array, name) {
  // loop through the array of objects to then loop through friends list for that name, 
  // ad customer's name to an array, RETURN when completed 
  // loop with each, that means you have to loop through each one until completion 
  // then filter through their friends contact list for name === ele.friends
  // make a variable to push ele.name if there 
  let weFranz = [];
  _.each(array, function(ele, ind, arr) {
      _.filter(ele.friends, function (eleF, indF, arrF) {
          if (eleF.name === name) {
              //console.log(eleF.name,'LIGHTNING')
              weFranz.push(ele.name);
          }
      }) 
  }) 
  return weFranz;
};



// Objective: Find the three most common tags among all customers' associated tags
// Input: Array
// Output: Array
// Constraints:

var topThreeTags = function (array) {
    // extract the tags from the array of objects  - allTags
    // make sure to set seed to an empty array - so that all the tags can be input
    // concat is a method used to add the arrays together (yay EJS!!!!!!!)
    let allTags = _.reduce(array, (function(seed, element) {
        if (element.hasOwnProperty('tags')) {
            return seed = seed.concat(element.tags);
        }
    }), []); 
    // make a variable to hold each tag, without duplicates
    let oneTagEach = _.unique(allTags); 
    // create an empty object to create new keys and push values when you count; 
    let tagObj = {}; 
    // push values into object with a loop
    // creating a property name as you go, setting to 0, making a counter
    _.each(oneTagEach, function (ele, ind, arr) {
        tagObj[ele] = 0;
    }); 
    
    // setting values correctly in the object with this following loop
    // loop within a loop to make sure you use both arrays
    // count increments
    // creating a recusive? function to use over and over until we get to the end
    let pushCount = _.each(oneTagEach, function (ele, ind, arr) {
        let count = 0; 
        _.each(allTags, function (eleA, indA, arrA) {
            if (oneTagEach[0] === eleA) {
                count++;
            } tagObj[ele] = count; 
        }); oneTagEach = oneTagEach.slice(1); // this takes off the first element
        // so that you can reuse this loop and start at the same index 
    }); 
    
    // now I created an array to push all the key/values into, that will then 
    // be sorted by value using SORT, least to greatest! 
    // I will get the last three elements using LAST
    // but not until after I pop off the number value, and concat it back together
    
    let wholeTagArray = [];
    _.each(tagObj, function (value, key, obj) {
        wholeTagArray.push([key, value]);
    });
    
    wholeTagArray.sort(function(a,b) {
        return a[1] - b[1];
    });
    
    let threeElements = _.last(wholeTagArray, 3);
    
    _.each(threeElements, function (ele, ind, arr) {
        if (ele) {
            ele.pop();
        }
    });
    
    return threeElements.reduce(function (seed, element) {
        return seed.concat(element);
    });
};



// Objective: Create a summary of genders, the output should be:
//  {
//     male: 3,
//     female: 4,
//     transgender: 1
//  }
// Input: Array
// Output: Object
// Constraints: Use reduce

// I need an object, with three key/value pairs
// Using a loop, I will access the object at that position to add 1
// return the object

var genderCount = function (array) {

    // let seed = {
    //     male: 0, 
    //     female: 0, 
    //     transgender: 0
    // };
    
    
    return _.reduce(array, function(seed, ele, ind) {
         // console.log(ele.gender, 'OKKKKK')
        if (ele.gender === 'male') {
            seed.male++;
        } else if (ele.gender === 'female') {
            seed.female++;
        } else if (ele.gender === 'transgender') {
            seed.transgender++; 
        } 
        console.log(seed);
        return seed;
    }, {
        male: 0, 
        female: 0, 
        transgender: 0
    })
};
    
    // let hold = _.reduce(array, function (seed, ele, ind, arr) {
    //     if (ele.hasOwnProperty('gender')) {
    //         console.log(ele.gender);
    //         // seed = seed.concat(ele.gender);
    //     }
        
    //   // console.log(ele.gender)
    // }, []); 
    //      console.log(hold);
    
    
    // using each works, bur we are supposed to use reduce
    // also, having a variable outside of the function did not work
    // YOU CAN SET THE SEED key/value PAIRS inside of the seed in the parameter
    
    
//     _.each(array, function (ele, ind, arr) {
//         if (ele.gender === 'male') {
//             orient.male = orient.male + 1;
//         } else if (ele.gender === 'female') {
//             orient.female = orient.female + 1; 
//         } else {
//             orient.transgender = orient.transgender + 1;
//         }
//     })
    
//     return orient; 
    
// };





//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
