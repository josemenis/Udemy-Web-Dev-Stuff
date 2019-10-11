// 9/23/2019 Section 4 How to solve coding problems
// Andrei's code in JS for the Google Interview Video. Video had c++
// Naive
function hasPairWithSum(arr, sum) {
    var len = arr.length;
    for (var i = 0; i < len - 1; i++) {
    //   console.log(`----${arr[i]}---`);
      for (var j = i + 1; j < len; j++) {
        if (arr[i] + arr[j] === sum)
          return console.log(`(${arr[i]},${arr[j]})`);
      }
    }
  
    return false;
  }
  
  // Better
  function hasPairWithSum2(arr, sum) {
    const mySet = new Set();
    const len = arr.length;
    for (let i = 0; i < len; i++) {
        // console.log(arr[i])
      if (mySet.has(arr[i])) {
        return true;
      }
      mySet.add(sum - arr[i]);
      console.log(sum - arr[i]);
    }
    return false;
  }
  console.log(`-------hasPairWithSum-------------`);
  hasPairWithSum([6, 4, 3, 2, 1, 7], 9);
  console.log(hasPairWithSum2([6, 4, 3, 2, 1, 7], 9));


// Solution from jakesully: https://leetcode.com/problems/two-sum/solution/
//THE QUESTION WANTED ARRAY INDEX LOCATIONS AS ANSWERS 
const twoSum = function(nums, target) {
    // create object to store
    const object = {};
    // loop once through nums array
    for(let i=0; i<nums.length; i++){
        // fill up empty array
        if(object[nums[i] ]>=0){
            // return 
            return [ object[nums[i] ] , i]
        }
        object[target-nums[i]] = i
        console.log(object)
    }
};

console.log(twoSum([2,7,11,15],17));