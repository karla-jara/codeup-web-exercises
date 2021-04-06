"use strict";
// var pies = [
//     "apple",
//     "cherry",
//     "key lime",
//     "huckleberry",
//     "rhubarb"
// ];

// TODO: given the above array how do we log each element to the console?

/**
 * ===== Concepts to cover:
 *
 * Methods to add/remove elements...
 * .push()
 * .pop()
 * .shift()
 * .unshift()
 *
 * Methods to search an array...
 * .indexOf()
 * .lastIndexOf()
 *
 * Method to return a copied segment of an array...
 * .slice()
 *
 * Method to reverse the order of the array...
 * .reverse()
 *
 *
 * Method to sort the array...
 * .sort()
 *
 * Methods to convert a string to an array and vice versa...
 * .split()
 * .join()
 *
 */

// TODO: throughout the lecture today, note which of the above methods mutate (change) an array and which ones do not.

// ============================= Adding and Removing Elements

/*
    someArray.shift()   = removes first element
    someArray.unshift() = adds new first element
    someArray.pop()     = removes last element
    someArray.push()    = adds new last element
 */

// var pies = [
//     "apple",
//     "cherry",
//     "key lime",
//     "huckleberry",
//     "rhubarb"
// ];

// add element to beginning

// pies.unshift('blueberry'); // returns the new total number of items in the array
// console.log(pies);

// add element to end

// pies.push('chocolate'); // again returns the new total number of items in the array

// remove element from the front of an array

// pies.shift();

// remove an element from the end of an array

// pies.pop();

// ============================= Searching

// var pies = [
//     "apple",
//     "cherry",
//     "key lime",
//     "huckleberry",
//     "rhubarb",
//     "key lime"
// ];

// find index of first matching result in array

// pies.indexOf('key lime');

// returns -1 if no matching result

// pies.indexOf('chocolate');

// find the index of the last occurrence of a matching element in the array

// pies.lastIndexOf("key lime");

// ============================= Slicing

// RETURNS A COPIED SEGMENT OF THE ORIGINAL

/* SYNTAX
   someArray.slice(startingIndex, startingOfIndexNotIncluded);
   // one argument only will return a copy from the starting index to the end of the array
 */

// var pies = [
//     "apple",
//     "cherry",
//     "key lime",
//     "huckleberry",
//     "rhubarb",
//     "key lime"
// ];

// TODO GROUP: find various combinations of output

// TODO EXERCISE: create a function that takes in an array of pies baked and return the 3 most recently baked pies

// ============================= Reversing

// var pies = [
//     "apple",
//     "cherry",
//     "key lime",
//     "huckleberry",
//     "rhubarb",
//     "key lime"
// ];
//
// pies.reverse();

// ============================= Sorting

// sort an array in alphabetical order

// pies.sort();

// sort in chronological order

// var numbers = [1, 2, 11, 3, 4];
// numbers.sort();
// console.log(numbers); // wat?

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

// ============================= Split / Join

// splitting string into and array

// var names = "Bob Sally Mary";
//
// var namesArr = names.split(" ");
//
// var namesString = namesArr.join("");
//
// console.log(namesString);

// splitting on an empty string

// var everyCharacter = bondsString.split("");

// joining array into a string

// var bondsArray = ["Connery", "Lazenby", "Moore", "Dalton", "Brosnan", "Craig"];
// var bondsString = bondsArray.join("_");

// TODO DEMONSTRATION: Create a function that will take in a formatted string of numbers
//  and return an array of phone numbers without any symbols. Log the output of the returned array.

/* EXAMPLE...
    var phoneNumbers = '210-555-2020\n230-555-2020\n512-555-3030';
    cleanPhoneNumbers(phoneNumbers);
    the above code should output the following...
       2105552020
       2305552020
       5125553030
*/

// var phoneNumbers = '210-555-2020\n230-555-2020\n512-555-3030';
//
// function cleanPhoneNumbers(phoneNums) {
//
// }
//
// var cleanNumsArr = cleanPhoneNumbers(phoneNumbers);
//
// for (var i = 0; i < cleanNumsArr.length; i += 1) {
//     console.log(cleanNumsArr[i]);
// }

// ============================= (EXTRA INFO) Splicing Elements

/*
    someArray.splice(param1, param2, param3...);
    param1 = which index to start from
    param2 = how many elements to remove
    param3 = from this parameter and onward, arguments passed in will be added as new elements at the end of the array
 */

//
// // create new test array
//     var bonds = ["Craig", "Brosnan", "Dalton", "Moore", "Connery"];
//
//
// // removing elements splice
//     var missingBonds = bonds.splice(bonds.indexOf("Moore"), 2);
//     console.log(bonds);
//     console.log(missingBonds);
//
//
// // adding elements with splice
//     bonds.splice(1, 0, "Lazenby");
//     console.log(bonds);
//
//
// // replace elements
//     bonds.splice(bonds.indexOf("Craig"), 1, "Elba");
//     console.log(bonds);
var fruitsSalad = ["apple", "pear", "grapes"];

function fruitSalad(arr) {
    return alert(arr.flatMap(f => [f.slice(0, f.length / 2), f.slice(f.length / 2)]).sort().join(""));
}

console.log(fruitsSalad);

//Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.

function minMax(arr) {
    return [Math.min(...arr), Math.max(...arr)];
}

//Create a function that returns true if the first array can be nested inside the second.
//
// arr1 can be nested inside arr2 if:
//
// arr1's min is greater than arr2's min.
// arr1's max is less than arr2's max.

function canNest(arr1, arr2) {
    if ((Math.min(...arr1) > Math.min(...arr2)) && (Math.max(...arr1) < Math.max(...arr2))){
        return true;
    } else
        return false;
}

// a = 100
// b = 200
// a, b = swap(a, b)
// print(a, b) // Should print out "200, 100", but the function prints out "100, 100"

var swap = (a, b) => [b, a];

//Given two arguments, return an array which contains these two arguments.
//
// Examples
// makePair(1, 2) ➞ [1, 2]
//
// makePair(51, 21) ➞ [51, 21]
//
// makePair(512124, 215) ➞ [512124, 215]

function makePair(num1, num2) {
    return [num1, num2];
}

//Write a function that converts an object into an array, where each element represents a key-value pair in the form of an array.
//
// Examples
// toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]
//
// toArray({ shrimp: 15, tots: 12 }) ➞ [["shrimp", 15], ["tots", 12]]
//
// toArray({}) ➞ []

function toArray(obj) {
    return Object.entries(obj);
}

//Create a function that concatenates n input arrays, where n is variable.
//
// Examples
// concat([1, 2, 3], [4, 5], [6, 7]) ➞ [1, 2, 3, 4, 5, 6, 7]
//
// concat([1], [2], [3], [4], [5], [6], [7]) ➞ [1, 2, 3, 4, 5, 6, 7]
//
// concat([1, 2], [3, 4]) ➞ [1, 2, 3, 4]
//
// concat([4, 4, 4, 4, 4]) ➞ [4, 4, 4, 4, 4]

function concat(...args) {
    return [].concat(...args)
}

//Create a function that takes an array of numbers arr, a string str and return an array of numbers as per the following rules:
//
// "Asc" returns a sorted array in ascending order.
// "Des" returns a sorted array in descending order.
// "None" returns an array without any modification.

function ascDesNone(arr, str) {
    if (str === 'Asc'){
        return arr.sort(function(a,b){
            return a-b
        })
    } else if (str === 'Des'){
        return arr.sort(function(a,b){
            return b-a
        })
    } else return arr;
}

//Create a function that returns an array of strings sorted by length in ascending order.
//
// Examples
// sortByLength(["a", "ccc", "dddd", "bb"]) ➞ ["a", "bb", "ccc", "dddd"]
//
// sortByLength(["apple", "pie", "shortcake"]) ➞ ["pie", "apple", "shortcake"]
//
// sortByLength(["may", "april", "september", "august"]) ➞ ["may", "april", "august", "september"]
//
// sortByLength([]) ➞ []

function sortByLength(arr) {
    return arr.sort(function (a,b){return a.length-b.length});
}

//A word is on the loose and now has tried to hide amongst a crowd of tall letters! Help write a function to detect what the word is, knowing the following rules:
//
// The wanted word is in lowercase.
// The crowd of letters is all in uppercase.
// Note that the word will be spread out amongst the random letters, but their letters remain in the same order.
// Examples
// detectWord("UcUNFYGaFYFYGtNUH") ➞ "cat"
//
// detectWord("bEEFGBuFBRrHgUHlNFYaYr") ➞ "burglar"
//
// detectWord("YFemHUFBbezFBYzFBYLleGBYEFGBMENTment") ➞ "embezzlement"



//Create a method in the Person class which returns how another person's age compares. Given the instances p1, p2 and p3, which will be initialised with the attributes name and age, return a sentence in the following format:
//
// {other person name} is {older than / younger than / the same age as} me.
//
// Examples
// p1 = Person("Samuel", 24)
// p2 = Person("Joel", 36)
// p3 = Person("Lily", 24)
// p1.compareAge(p2) ➞ "Joel is older than me."
//
// p2.compareAge(p1) ➞ "Samuel is younger than me."
//
// p1.compareAge(p3) ➞ "Lily is the same age as me."

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    compareAge(other) {
        // Write code here!

    }
}

//Create a function that takes an array and returns the types of values (data types) in a new array.
//
// Examples
// arrayValuesTypes([1, 2, "null", []])
// ➞ ["number", "number", "string", "object"]
//
// arrayValuesTypes(["214", true, false, 2, 2.15, [], null])
// ➞ ["string", "boolean", "boolean", "number", "number", "object", "object"]
//
// arrayValuesTypes([21.1, "float", "array", ["I am array"], null, true, 214])
// ➞ ["number", "string", "string", "object", "object", "boolean", "number"]

function arrayValuesTypes(arr) {
    return arr.map(x => (typeof x));

}

//Create a function that takes as a parameter an array of "stringified" numbers and returns an array of numbers.
//
// Example:
//
// ["1", "3", "3.6"] ➞ [1, 3, 3.6]
// Examples
// toNumberArray(["9.4", "4.2"]) ➞ [9.4, 4.2]
//
// toNumberArray(["91", "44"]) ➞ [91, 44]
//
// toNumberArray(["9.5", "8.8"]) ➞ [9.5, 8.8]

function toNumberArray(arr) {
    return arr.map(Number)
}

//Given an array of integers, determine whether the sum of its elements is even or odd.
//
// The output should be a string ("odd" or "even").
//
// If the input array is empty, consider it as an array with a zero ([0]).
//
// Examples
// evenOrOdd([0]) ➞ "even"
//
// evenOrOdd([1]) ➞ "odd"
//
// evenOrOdd([]) ➞ "even"
//
// evenOrOdd([0, 1, 5]) ➞ "even"

function evenOrOdd(arr) {
    var sum=0
    for(i=0;i<arr.length;i++){
        sum+=arr[i]
    }
    if(sum%2==0){
        return 'even'
    }else{
        return 'odd'
    }
}

//According to the lodash documentation, _.drop creates a slice of an array with n elements dropped from the beginning.
//
// Your challenge is to write your own version using vanilla JavaScript.
//
// Examples
// drop([1, 2, 3], 1) ➞ [2, 3]
//
// drop([1, 2, 3], 2) ➞ [3]
//
// drop([1, 2, 3], 5) ➞ []
//
// drop([1, 2, 3], 0) ➞ [1, 2, 3]

function drop(arr, val = 1) {
    return arr.slice(val);
}

//Write a function to reverse an array.
//
// Examples
// reverse([1, 2, 3, 4]) ➞ [4, 3, 2, 1]
//
// reverse([9, 9, 2, 3, 4]) ➞ [4, 3, 2, 9, 9]
//
// reverse([]) ➞ []

function reverse(arr) {
    return arr.reverse();
}

//Given an object containing counts of both upvotes and downvotes, return what vote count should be displayed. This is calculated by subtracting the number of downvotes from upvotes.
//
// Examples
// getVoteCount({ upvotes: 13, downvotes: 0 }) ➞ 13
//
// getVoteCount({ upvotes: 2, downvotes: 33 }) ➞ -31
//
// getVoteCount({ upvotes: 132, downvotes: 132 }) ➞ 0

function getVoteCount(votes) {
    return votes.upvotes - votes.downvotes;
}

//Given a number, return an array containing the two halves of the number. If the number is odd, make the rightmost number higher.
//
// Examples
// numberSplit(4) ➞ [2, 2]
//
// numberSplit(10) ➞ [5, 5]
//
// numberSplit(11) ➞ [5, 6]
//
// numberSplit(-9) ➞ [-5, -4]

function numberSplit(n) {
    return [Math.floor(n/2), Math.ceil(n/2)]
}

//Create a function that takes a string of name and checks how much good is the given name. A preloaded dictionary of alphabet scores is available in the Code tab. Add up the letters of your name to get the total score.
//
const scores = {"A": 100, "B": 14, "C": 9, "D": 28, "E": 145, "F": 12, "G": 3,
"H": 10, "I": 200, "J": 100, "K": 114, "L": 100, "M": 25,
"N": 450, "O": 80, "P": 2, "Q": 12, "R": 400, "S": 113,
"T": 405, "U": 11, "V": 10, "W": 10, "X": 3, "Y": 210, "Z": 23}
// Return your result as per the following rules:
//
// score <= 60:   "NOT TOO GOOD"
//
// 61 <= score <= 300:  "PRETTY GOOD"
//
// 301 <= score <= 599:  "VERY GOOD"
//
// score >= 600:  "THE BEST"
// Examples
// nameScore("MUBASHIR") ➞ "THE BEST"
//
// nameScore("YOU") ➞ "VERY GOOD"
//
// nameScore("MATT") ➞ "THE BEST"
//
// nameScore("PUBG") ➞ "NOT TOO GOOD"

function nameScore(name) {
    let score = 0;
    for (let i = 0 ;i < name.length ;i++) {
        if (name[i] in scores) {
            score += scores[name[i]];
        }
    }
    if (score <= 60) {
        return "NOT TOO GOOD"
    } else if (score <= 300 && score >= 61) {
        return "PRETTY GOOD"
    } else if (score >= 301 && score <= 599) {
        return "VERY GOOD";
    } else {
        return "THE BEST"
    }
}

console.log(nameScore("karla"))



//Filter out Strings from an Array
// Create a function that takes an array of non-negative integers and strings and return a new array without the strings.
//
// Examples
// filterArray([1, 2, "a", "b"]) ➞ [1, 2]
//
// filterArray([1, "a", "b", 0, 15]) ➞ [1, 0, 15]
//
// filterArray([1, 2, "aasf", "1", "123", 123]) ➞ [1, 2, 123]

function filterArray(arr) {
    return arr.filter(n => typeof n === 'number');
}


//Create a function that splits a string into an array of identical clusters.
//
// Examples
// splitGroups("555") ➞ ["555"]
//
// splitGroups("5556667788") ➞ ["555", "666", "77", "88"]
//
// splitGroups("aaabbbaabbab") ➞ ["aaa", "bbb", "aa", "bb", "a", "b"]
//
// splitGroups("abbbcc88999&&!!!_") ➞ ["a", "bbb", "cc", "88", "999", "&&", "!!!", "_"]

function splitGroups(str) {
    let arr = [], s = str[0];
    for (var i = 1; i < str.length; i++) {
        if (str[i] !== str[i-1]) {
            arr.push(s)
            s = str[i];
        } else {
            s+= str[i]
        }
    }
    arr.push(s);
    return arr;
}

//Create a function which returns the number of true values there are in an array.
//
// Examples
// countTrue([true, false, false, true, false]) ➞ 2
//
// countTrue([false, false, false, false]) ➞ 0
//
// countTrue([]) ➞ 0

function countTrue(arr){
    var count = 0;
    for(var i = 0; i < arr.length; i++){
        if(arr[i] === true){
            count++;
        }
    }
    return count;
}

