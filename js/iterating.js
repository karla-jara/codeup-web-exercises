(function() {
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */



    const names = ['gaby', 'gerardo', 'karla', 'andres'];

    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */

    console.log("Returning the number of elements in an array")

    console.log(names.length);

    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */

    console.log("Returned names in array using the element index");

    console.log(names[0]);
    console.log(names[1]);
    console.log(names[2]);
    console.log(names[3]);

    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */

    console.log("Return names in array using a for_loop");

    for (var i = 0; i < names.length; i++) {
        console.log(names[i]);
    }

    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */
    console.log("Return names in array using forEach");

    names.forEach(function (nombre) {
        console.log(nombre);
    });

    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */

    function first(arr) {  // first: returns the first item in the array
        return (arr[0]);
    }

    function second(arr) {  // returns the second item in the array
        return (arr[1]);
    }

    function last(arr) {  // returns the last item in the array
        return arr[arr.length -1];
    }
    console.log("Return first, second and last element in 'names' array")

    console.log(first(names));
    console.log(second(names));
    console.log(last(names));

})();

