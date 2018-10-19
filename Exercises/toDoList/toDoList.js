var toDoList = [];
var userEnter = prompt("What you want me to do?");


while (userEnter !== "quit") 
{
	if (userEnter === "list") 
	{
		listToDo();
	} 
	else if(userEnter === "new") 
	{
		addToDo();
	}
	else if(userEnter === "delete")
	{
		deleteToDo();
	}
	
	userEnter = prompt("What you want me to do?");
}

console.log("You have quited the app");