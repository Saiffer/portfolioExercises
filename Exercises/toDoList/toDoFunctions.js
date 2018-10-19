function addToDo() {
	var newDuty = prompt("Enter new duty");
	toDoList.push(newDuty);
	console.log("You've added duty");
}

function deleteToDo(){
	var deleteElement = prompt("Enter the index of deleting duty");
	toDoList.splice(deleteElement,1);
	console.log("You have deleted duty");
}

function listToDo(){
	toDoList.forEach(function(duty, index)
	{
	console.log(index + ": " + duty);
	});
}