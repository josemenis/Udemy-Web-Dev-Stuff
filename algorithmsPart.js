//This is a Question that Diana was given at an interview. Falisse gave answer below.
// !!! Pay close attention to the requirements
// * Words are valid english (must have at least 1 vowel)
// * Words are >= 5 characters
// * Key letter is the character at index 0 of the puzzle
// * Words Must contain key letter
// * Cannot contain letters outside of the 7 letters
// * Letters can be re-used
// * Both wordlist and puzzle is all caps
// * All puzzles are exactly 7 characters in length
// * All 7 characters are unique
// Start brute force coding
const spellingBee = (wordlist, puzzle) => {	
  const result = []
  // loop thorugh each puzzle
  for (let i = 0; i < puzzle.length; i++) {
//    console.log('current puzzle', puzzle[i])
    // set our key letter which each word is required to have
    let keyLetter = puzzle[i][0]
    // console.log('keyLetter', keyLetter)
    // store the number of words that match the puzzle
    let count = 0

    // loop through the wordList
    for (let j = 0; j < wordlist.length; j++) {
    //   console.log('current wordlist: ', wordlist[j], '| current puzzle: ', puzzle[i])
      
    // store whether the word matches
      let matched = false
      // if keyLetter is not found in word immediately go to next word
      if (wordlist[j].indexOf(keyLetter) < 0) continue
      
      // loop through each character in the word
      for (let k = 0; k < wordlist[j].length; k++) {
        // console.log('current puzzle: ', puzzle[i],'| keyLetter: ', keyLetter, '| current wordlist: ', wordlist[j],'| current char: ', wordlist[j][k])

        // if this character is not in the current puzzle set matched to false and skip to the next word
        if (puzzle[i].indexOf(wordlist[j][k]) < 0) {
          matched = false
        //   console.log('current puzzle: ', puzzle[i],'| keyLetter: ', keyLetter, '| current wordlist: ', wordlist[j],'| current char: ', wordlist[j][k], '| matched: ', matched)
            // console.log('---------------------------------------------------------------')
          break
        }
        // else set matched to true
        matched = true
        // console.log('current puzzle: ', puzzle[i],'| keyLetter: ', keyLetter, '| current wordlist: ', wordlist[j],'| current char: ', wordlist[j][k], '| matched: ', matched)
      }
      // if matched is true then increase the count by 1
      if (matched) {
        count += 1
      }
    }
    // before we start on the next puzzle in the loop
    // update result to include the count of words that matched
    result.push(count)
  }
  // return result
  return result
}
// TEST CASE
console.log(spellingBee(['APPLE', 'PLEAS', 'PLEASE'], ['AELWXYZ', 'AELPXYZ', 'AELPSXY', 'SAELPXY', 'XAELPSY']))
// This is NOT an efficient solution!! It something like O(puzzle * wordList) or O(nm). It's brute force. However, start with a brute force solution (solve for the simplest case) and then
//   if you have time refactor it. If you run out of time, explain to the interviewer how you would make the solution faster.

//----------- 'https://medium.com/leetcode-patterns/leetcode-pattern-2-sliding-windows-for-strings-e19af105316b' ---------------------------------

/* Given an array of integers of size ‘n’.
Our aim is to calculate the maximum sum possible for ‘k’ consecutive elements in the array.

Input  : arr[] = {100, 200, 300, 400}
         k = 2
Output : 700
*/

// BRUTE FORCE : iterate through all windows of size k
for (let i = 0; i < n - k +1; i++) {
    let currentSum = 0;

    for (let j = 0; j < k; j++) {
        currentSum = currentSum + arr[i+j];
    }
    maxSum = max // TRIED TO FOLLOW ALONG BUT HE USED ANOTHER LANGUAGE
}