// const nemo = ['nemo'];
// const largeArray = new Array(100).fill('nemo');

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
    // console.log(number);
    // console.log('!!!!!!!!!!!!!!!!!!!!!!!!')
  });

  console.log('Sums of the Number:');
  numbers.forEach(function (firstNumber) {
    // console.log('This is the 1st: ' + firstNumber); // loops through numbers and grabs the first index of the array
    numbers.forEach(function (secondNumber) {
      // console.log('This is the 2nd: ' + secondNumber); // then loops through the whole array starting at first index
      console.log('Sum of 1st + 2nd: ' + (firstNumber + secondNumber))
      // console.log('------------------------------------------------')
    })
  })
}
console.log(`-------------printNumbersThenPairSums------------------`);
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
  return console.log('commonItems = ' + false);
}

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
    if (!map[arr1[i]]) { // if map of current index doesn't exist
      const item = arr1[i]; //item is created during loop until
      map[item] = true; // set items in map to true
    }
  }
  // console.log(map)  //used console log to check for loop above

  // loop through 2nd array & check if item in 2nd exists on created object.
  for (let j = 0; j < arr2.length; j = j + 1) {
    if (map[arr2[j]]) {
      return console.log('containsCommonItems = ' + true);
    }
  }
  return console.group('containsCommonItems = ' + false);
}
// 2 for loops not nested
// O(a + b) Time Complexity - this is faster than the other one
// O(a) Space Complexity - this is more heavy for space because it creates an object


function containsCommonItems2(arr1, arr2) {
  return console.log('containsCommonItems2 = ' + arr1.some(item => arr2.includes(item)));
}

console.log(`----------containsCommonItems-----nested & faster with built in JS methods----------`)
commonItems(array1, array2);
containsCommonItems(array1, array2);
containsCommonItems2(array1, array2);
//------------------------

// 9/23/2019 Section 4 How to solve coding problems
// Andrei's code in JS for the Google Interview Video. Video had c++
// Naive
function hasPairWithSum(arr, sum) {
  var len = arr.length;
  for (var i = 0; i < len - 1; i++) {
    console.log(`----${arr[i]}---`);
    for (var j = i + 1; j < len; j++) {
      console.log(arr[j]);
      if (arr[i] + arr[j] === sum)
        return true;
    }
  }

  return false;
}

// Better
function hasPairWithSum2(arr, sum) {
  const mySet = new Set();
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    if (mySet.has(arr[i])) {
      return true;
    }
    mySet.add(sum - arr[i]);
    // console.log(arr[i]);
  }
  return false;
}
console.log(`-------hasPairWithSum-------------`);
hasPairWithSum([6, 4, 3, 2, 1, 7], 9);
hasPairWithSum2([6, 4, 3, 2, 1, 7], 14);
//--------------------------------------------------------

// 9/24/19 section 6 Data Structures

class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  get(index) {
    return this.data[index];
    // console.log(this.data[index]);
  }
  push(item) {
    this.data[this.length] = item; //{0} = item;
    this.length++; // increments array length everytime .push is called.
    return item;
  }
  pop() { // remove item from the end
    const lastItem = this.data[this.length - 1]; // sets the last index in array to lastItem
    delete this.data[this.length - 1]; // uses delete method to delete last index
    this.length--; // decrease the length of the array
    return lastItem;
  }
  deleteAtIndex(index) {
    const item = this.data[index];
    this.shiftItems(index); // single responsibility principle to shift data
    return item;
  }
  shiftItems(index) { // this function doesn't return anything bc it's part of another method
    for (let i = index; i < this.length - 1; i++) { // i is set to index, index is set when function is called
      this.data[i] = this.data[i + 1]; //data is shifted left by 1 with this line of code.
    }
    delete this.data[this.length - 1]; // deletes the last index of array
    this.length--; //reduces length by 1 everytime this method is ran
  }
}

const myArray = new MyArray();

console.log(`-----------forArrays push,pop,delete,shift----------`)
myArray.push('test');
myArray.push('you');
myArray.push('?!');
// myArray.pop();
// myArray.pop(0);
myArray.deleteAtIndex(2);
myArray.push('are');
myArray.push('nice');
myArray.shiftItems(0);
console.log(myArray);

//---------------------------------------
// REVERSE A STRING EXERCISE
function reverse(str) {
  var backwards = []; // create array to store reversed input
  var tArrLength = str.length - 1;

  for (let i = tArrLength; i >= 0; i--) {
    backwards.push(str[i]);
  }
  // console.log(backwards); // console log outside of for loop
  return console.log(backwards.join('')); //concatenates  backwards array
}

function reverse2(str) {
  return console.log(str.split('').reverse().join(''));
}
console.log(`----------------resverseString-----------------------`);
reverse('Almost figured this one out. Did not think about creating a array to store the reversed one.'); //string input when function is called
reverse2('Figured this one out. Did not think about creating a array to store the reversed one.'); //string input when function is called

//---------------------------------------------------
//Merge Sorted Arrays

function m(array1, array2) {
  const mergedArr = [];
  // set index 0 for both arrays to a variable
  let array1Item = array1[0];
  let twoItem = array2[0];
  let i = 0;
  let j = 0;

  // Check input with below
  if (array1.length === 0) {
    return array2;
  }
  if (array2.length === 0) {
    return mergedArr
  }


  while (array1Item || twoItem) {
    if (!twoItem || array1Item < twoItem) {
      console.log(array1Item, twoItem)
      mergedArr.push(array1Item);
      array1Item = array1[i];
      i++
    } else {
      mergedArr.push(twoItem);
      twoItem = array2[j];
      j++
    }
  }
  return console.log(mergedArr);
}
console.log(`---------mergedSortedArray--------`);
m([0, 3, 4, 31], [3, 4, 6, 30]);

//-----------------------------------------------------------
// 9/30/19- 10/1/19 Data Structure Hash Table

class HashTable {
  constructor(size) {
    this.data = new Array(size);
    // this.data = [];
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length
    }
    return hash;
  }

  set(key, value) {
    let address = this._hash(key); //address is set to hash function
    if (!this.data[address]) { // if the array is empty
      this.data[address] = []; // use this empty array
    }
    this.data[address].push([key, value]); // to push data into the array, using (key, value)
    return this.data;
  }

  get(key) { // gets data from the hashTable
    const address = this._hash(key); //address is set to hash function
    const currentBucket = this.data[address] // set a variable to the address of the array
    if (currentBucket) { // if array exists 
      for (let i = 0; i < currentBucket.length; i++) { // loop through it
        // console.log(currentBucket[i]);
        ; if (currentBucket[i][0] === key) { // if key equal array[i] @ index [0]
          return currentBucket[i][1]// return it [0] key or name, [1] value or number
        }
      }
    }
    return undefined; // else return undefined
  }
  // ABOVE
  // O(1) function
  // O(N) if push added to the same address

  keys() {
    const keysArray = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        // console.log(this.data[i][0][0]);
        keysArray.push(this.data[i][0][0]);
      }
    }
    return console.log(keysArray);
  }
} //O(N) bc it loops through 50 or how many items are in hashtable

const myHashTable = new HashTable(50);
console.log(`---------------myHashTable------------------`);
myHashTable.set('grapes', 10000);
myHashTable.set('apples', 9);
myHashTable.set('oranges', 2);
myHashTable.get('grapes');
myHashTable.get('apples');
myHashTable.keys()

function firstRecurringCharacter(input) {

  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < input.length; j++) {
      // console.log(input[i], input[j]);
      if (input[i] === input[j]) {
        return console.log(true);
      }
    }
    return console.log(false);
  }
}

console.log(`--------------firstRecurringCharacter---------`);
// firstRecurringCharacter ([2,5,1,2,3,5,1,2,4]);
firstRecurringCharacter([2, 5, 1]);

function firstRecurringCharacter2(input) {
  //create an empty object to store stuff, map represents the hash table
  let map = {};
  //loop through input
  for (let i = 0; i < input.length; i++) {

    // console.log(map[input[i]]); // since <if (map[input[i]])> logs undefined change logic to <if (map[input[i]] !== undefined)>
    
    if (map[input[i]] !== undefined) { // if map contains input,
      return console.log(input[i]);
    } else {
      map[input[i]] = i; // value can equal anything
    }
    console.log(map);
  }
  return undefined;
}

console.log(`-----------firstRecChar2----------------`);
firstRecurringCharacter2([2, 5, 1, 2, 3, 5, 1, 2, 4]);