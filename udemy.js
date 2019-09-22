// const nemo = ['nemo'];
// const largeArray = new Array(10000).fill('nemo');

// function findNemo(array) {
//     var t0 = performance.now();

//     for (let index =  0; index < array.length; index++) {
//         if (array[index] === 'nemo') {
//             console.log('Found Nemo');
//         }
//     }
//     var t1 = performance.now();
//     console.log('This loop of the array took ' + (t1 - t0) +
//     ' milliseconds ');
// }

// findNemo(largeArray);

// --------------------------------------------------------------------------------
function printNumbersThenPairSums(numbers) {
    console.log('Numbers in array:');
        numbers.forEach(function(number) {
            console.log(number);
            console.log('!!!!!!!!!!!!!!!!!!!!!!!!')
        });

        console.log('Sums of the Number:');
        numbers.forEach(function(firstNumber) {
            console.log('This is the 1st: ' + firstNumber); // loops through numbers and grabs the first index of the array
            numbers.forEach(function(secondNumber) {
                console.log('This is the 2nd: ' + secondNumber); // then loops through the whole array starting at first index
                console.log('Sum of 1st + 2nd: ' + (firstNumber + secondNumber))
                console.log('------------------------------------------------')
            })
        })
}
printNumbersThenPairSums([1,2,3,4,5]);

// ------------------------------------------------------------------------------------
// 9/22/2019
// Given 2 arrays, create a function that let's a user know (t/f)
// whether these contain any common items

// For Example: 
// const array1 = ['a', 'b', 'c', 'x'];
// const array2 = ['z', 'y', 'i'];
// should return false
//--------------------
const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y', 'x'];
// should return true

// Using cheat sheet to solve problem.

// Step One key points: 2 parameters for function, return true or false.
// Step Two double check inputs/ outputs: arrays
// Step Three: No size limit for array

// brute force method to solve problem, O(n^2)
function commonItems (arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) { // loop through array1
        for (let j = 0; j < arr2.length; j++) { // loop through array2
            if(arr1[i] === arr2[j]) { // check if there are any common items
                return console.log('commonItems = ' + true);
            }
        }
    }
    return console.log('commonItems = ' + false)
}

commonItems(array1, array2);