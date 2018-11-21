//Create an array with 5 todos
//You have x todos
//Print the first and second to last items
//Delete the 3d item
//Add new item to the end
//Remove the first item

const todo = [
            {
                    todo: 'Go to college',
                isCompleted: true
            }, 
                {
                    todo: 'Wash dishes',
                isCompleted: false
            }, 
                {
                    todo: 'Go to walk around',
                isCompleted:false
            },
                {
                    todo: 'Feed the baby',
                isCompleted: true
            }, 
                {
                    todo: 'Study programming',
                isCompleted: false
            }
            ];

//1. Convert array of string to objects -> text and completed
//2. Create function to remove a todo by text value

const deleteTodo = function(todo, todoText) {
    const index = todo.findIndex(function(todo) {
        return todo.todo.toLowerCase() === todoText.toLowerCase();
    })
    if (index > -1) {
        todo.splice(index, 1);
    }
}

const filterTodo = function(todo) {
    return todo.filter(function(todo) {
        return !todo.isCompleted
    });
}


const sortTodo = function(todo) {
    todo.sort(function(a, b) {
        if (!a.isCompleted && b.isCompleted) {
            return -1
        } else if (!b.isCompleted && a.isCompleted) {
            return 1
        } else {
            return 0
        }
    })
}

sortTodo(todo);
console.log(todo);
//console.log(filterTodo(todo));


//deleteTodo(todo, 'Feed the baby');
//console.log(todo);
