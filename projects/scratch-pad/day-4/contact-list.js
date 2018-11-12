// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following API:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 * 
 * BONUS : add a printAllContactNames() Function to your makeContactList() factory, so that the 
 *         contact-list returned has an all() API. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Your Mom
 *          
 *          WARNING: To pass the bonus test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {
return {
    'id': id, 
    'nameFirst': nameFirst, 
    'nameLast': nameLast
}
}; 


function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
    var contacts = []; // means this is an array because of contacts.length;
    
    return {
        // we implemented the length api for you //
        length: function() {
            return contacts.length;
        }, 
        addContact: function (contact) {
            contacts.push(contact);
        }, 
        findContact: function(fullName) {
            var splitFullName = fullName.split(' ');
            for (let i = 0; i < contacts.length; i++) {
                if (contacts[i]['nameFirst'] === splitFullName[0] && contacts[i]['nameLast'] === splitFullName[1]) {
                    return contacts[i];
                }
            } return undefined;
        }, 
        removeContact: function(contact) {
            contacts.splice(contact, 1);
             //console.log(contact);
            // see notes below for for loop to splice
        }, 
        printAllContactNames: function() {
            var holdNameList = [];
             for (let i = 0; i < contacts.length; i++) {
                if (i < contacts.length - 1) {
                    holdNameList += contacts[i].nameFirst + " " + contacts[i].nameLast + '\n';
                } else {
                    holdNameList += contacts[i].nameFirst + " " + contacts[i].nameLast
            }
        }
        return holdNameList;
        }
        
}




// YOUR CODE GOES ABOVE HERE //
}

/*
 * ////// NOTES //////
 * 
 * to simplify findContact, you don't need to split the fullName. 
 * Simply concact nameFirst and nameLast (with space) and set = to fullName
 *
 *
 * For removeContact
 * a loop could have been used to go through the array of objects to delete the whole object
 * for (let i = 0; i < contacts.length; i++) { 
 *
 *
 * When trying to push for extra credit, you cannot concact inside the same line
 * changing to += helped the function work with + '\n'
 */

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
