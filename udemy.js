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
        });

        console.log('Sums of the Number:');
        numbers.forEach(function(firstNumber) {
            console.log('This is the 1st: ' + firstNumber);
            numbers.forEach(function(secondNumber) {
                console.log('This is the 2nd: ' + secondNumber);
                console.log('Sum of both:' + (firstNumber + secondNumber))
            })
        })
}
printNumbersThenPairSums([1,2,3,4,5]);

// ------------------------------------------------------------------------------------

/* psuedo code
while (water gets to opening = true) {
    brace main
    then install labels
    check for leaks
}
*/