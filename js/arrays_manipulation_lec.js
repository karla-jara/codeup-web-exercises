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