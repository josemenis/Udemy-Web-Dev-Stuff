/*
Using the Shopping List files from the previous videos 
update the shopping list app to do the following:

1. If you click on the list item, it toggles the .done  
class on and off.

2. Add buttons next to each list item to delete the item 
when clicked on its corresponding delete button.

3. BONUS: When adding a new list item, it automatically 
adds the delete button next to it (hint: be sure to check 
	if new items are clickable too!)
*/

var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var newButton = document.createElement("button");
var li = document.querySelectorAll("li");
var oneLi = document.querySelector("li");
var deleteBtns = document.getElementsByClassName("delete");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var list = document.createElement("li");
	list.appendChild(document.createTextNode(input.value));
	ul.appendChild(list);
	input.value = "";
	// add a button to the new item created, but doesn't work
	// properly with multiple items added before deleting
	newButton.onclick = removeThis; // added onclick handler
	newButton.appendChild(document.createTextNode("REMOVE"));
	list.appendChild(newButton);
	list.addEventListener("click", toggle);
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

// 1. Select all li elements & loop through them. If one is clicked apply 
// toggle function.
function toggleEvent() {
	for (var i = 0; i < li.length; i++) {
		li[i].addEventListener("click", toggle);
	  };
}

function toggle() {
	this.classList.toggle("done");
}
// 2. Grab elements by class, loop through the list and add event removeThis
function removeCurrentItems() {
	for(var i = 0; i < deleteBtns.length; i++){
		deleteBtns[i].addEventListener("click", removeThis);
	}
};
// REMOVE FUNCTION
function removeThis() {
	this.parentNode.remove();
  }
  
button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
toggleEvent();
removeCurrentItems();
