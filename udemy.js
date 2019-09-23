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
    numbers.forEach(function (number) {
        console.log(number);
        console.log('!!!!!!!!!!!!!!!!!!!!!!!!')
    });

    console.log('Sums of the Number:');
    numbers.forEach(function (firstNumber) {
        console.log('This is the 1st: ' + firstNumber); // loops through numbers and grabs the first index of the array
        numbers.forEach(function (secondNumber) {
            console.log('This is the 2nd: ' + secondNumber); // then loops through the whole array starting at first index
            console.log('Sum of 1st + 2nd: ' + (firstNumber + secondNumber))
            console.log('------------------------------------------------')
        })
    })
}
printNumbersThenPairSums([1, 2, 3, 4, 5]);

// ------------------------------------------------------------------------------------
// 9/22/2019
// Given 2 arrays, create a function that let's a user know (t/f)
// whether these contain any common items

// For Example: 
const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y', 'i'];
// should return false
//--------------------
// const array1 = ['a', 'b', 'c', 'x'];
// const array2 = ['z', 'y', 'x'];
// should return true

// Using cheat sheet to solve problem.

// Step One key points: 2 parameters for function, return true or false.
// Step Two double check inputs/ outputs: arrays
// Step Three: No size limit for array

// Step 5 Use brute force method to solve problem
function commonItems(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) { // loop through array1
        for (let j = 0; j < arr2.length; j++) { // loop through array2
            if (arr1[i] === arr2[j]) { // check if there are any common items
                return console.log('commonItems = ' + true);
            }
        }
    }
    return console.log('commonItems = ' + false)
}

commonItems(array1, array2);

// Step 6: O(a * b), not efficient bc nested loops
        // O(1) space complextiy bc we are not creating any variables just using the arrays.
// Step 8:
// Step 9:
/*
if  array1 is made into an object with indexs set to true,
can compare both arrays more efficiently
array2[index] === obj.properties
*/

// Step 10:
function containsCommonItems(arr1, arr2) {
    // loop through first array & create object where properties === items in the array
    let map = {};
    for (let i = 0; i < arr1.length; i = i + 1) {
        if(!map[arr1[i]]) { // if map of current index doesn't exist
        const item = arr1[i];
        map[item] = true; // map[arr[i]] : true
    }
}
// console.log(map)  //used console log to check for loop above

// loop through 2nd array & check if item in 2nd exists on created object.
    for (let j = 0; j< arr2.length; j = j +1) {
        if (map[arr2[j]]) {
            return console.log('containsCommonItems = ' + true);
        }
    }
    return console.group('containsCommonItems = ' + false)
}
// 2 for loops not nested
// O(a + b) Time Complexity - this is faster than the other one
// O(a) Space Complexity - this is more heavy for space because it creates an object

containsCommonItems(array1, array2);

function containsCommonItems2(arr1, arr2) {
    return console.log('containsCommonItems2 = ' + arr1.some(item => arr2.includes(item)))
}
containsCommonItems2(array1, array2)
//------------------------

// 9/23/2019
// Andrei's code in JS for the Google Interview Video. Video had c++
// Naive
function hasPairWithSum(arr, sum){
    var len = arr.length;
    for(var i =0; i<len-1; i++){
      console.log(arr[i])
      console.log('--------')
       for(var j = i+1;j<len; j++){
         console.log(arr[j])
          if (arr[i] + arr[j] === sum)
              return true;
       }
    }
  
    return false;
  }
  
  // Better
  function hasPairWithSum2(arr, sum){
    const mySet = new Set();
    const len = arr.length;
    for (let i = 0; i < len; i++){
      if (mySet.has(arr[i])) {
        return true;
      }
      mySet.add(sum - arr[i]);
      // console.log(arr[i])
    }
    return false;
  }
  
  
  // hasPairWithSum([6,4,3,2,1,7], 9)
  hasPairWithSum2([6,4,3,2,1,7], 14)
