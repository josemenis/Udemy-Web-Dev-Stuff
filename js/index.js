// using this array,
var array = ["Banana", "Apples", "Oranges", "Blueberries"];


// Array exercise 
// 1. Remove the Banana from the array.
array.shift();
console.log(array);
// 2. Sort the array in order.
array.sort();
console.log(array);
// 3. Put "Kiwi" at the end of the array.
array.push("Kiwi");
console.log(array);
// 4. Remove "Apples" from the array.
array.shift();
console.log(array);
// 5. Sort the array in reverse order. (Not alphabetical, but reverse
// the current Array i.e. ['a', 'c', 'b'] becomes ['b', 'c', 'a'])
array.reverse();
console.log(array);
//you should have at the end:
//["Kiwi", "Oranges", "Blueberries"]

// using this array,
var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
// access "Oranges".
console.log(array2[1][1]);

// Objects and arrays for Facebook App
// Create an object and an array which we will use in our facebook exercise. 

// 1. Create an object that has properties "username" and "password". Fill those values in with strings.
var object = {
    username: "Milo",
    password: "Linate"
};
var object2 = {
    username: "ThatOneGuy",
    password: "Yeah!"
};
var object3 = {
    username: "ThatOtherGurl",
    password: "Ya Know!"
};

// 2. Create an array which contains the object you have made above and name the array "database".
let database = [
    object, 
    object2, 
    object3];
// 3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".
let newsfeed = [
    {
        username: "Bob",
        timeline: "So tired from all this!"
    },
    {
        username: "Ally",
        timeline: "Js is fun!"
    },
    {
        username: "Art",
        timeline: "Coincidentally likes to draw!"
    }

];

let userNamePrompt = prompt("What's your username?");
let passWordPrompt = prompt("Please enter your password.");
function isUserValid(user, pass) {
    for(let i = 0; i<database.length; i++) {
        //console.log(database[i]);
        if (user === database[i].username &&
            pass === database[i].password) {
                return true;
        }
    }
    return false;
}

function signIn(user, pass) {
    // console.log("Function returned: ", isUserValid(user, pass));
    if(isUserValid(user, pass)) {
        console.log("Success!!!\n", newsfeed);
    } else {
        console.log("Incorrect Username or Password");
    }
}

signIn(userNamePrompt, passWordPrompt);

let todos = [
    "one", 
    "two", 
    "three", 
    "four", 
    "five"
];

let todoLength = todos.length;
for (let i=0; i < todoLength; i++){
    todos.pop();
};
console.log(todos);
////////////////////////////////////////////////////
// Nonsense Event Handler 
let navEvent = document.getElementById("eventTest");

navEvent.addEventListener("click", function(){
    console.log("About Was clicked!!");
})