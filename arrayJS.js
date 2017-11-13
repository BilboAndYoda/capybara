var run = true;
var todoList = [];
var action = "";
var item = "";

while(action !== 'quit'){
	action = prompt("What would you like to do?");
	if(action === 'new'){
		item = prompt("Please enter you item:");
		todoList.push(item);
	}
	else if(action === 'list'){
		console.log(todoList);
	}
	else if(action === 'quit'){
		run = false;
	}
	else{
		console.log("Sorry, that was not an available action.");
	}
}
