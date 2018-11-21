const todos = [
    {
      text: 'Feed the baby',
      completed: true
}, 
    {
      text:'Learn JavaScript',
      completed: false
}, 
    {
      text:'Go to college',
      completed: false
}, 
    {
      text:'Kiss wife',
      completed: false
}, 
    {
      text:'Make todo App',
      completed: true
}]

const deleteTodo = function (todos, todoText) {
    const index = todos.findIndex(function (todo) {
        return todo.text.toLowerCase() === todoText.toLowerCase()
    })
    if (index > -1) {
        return todos.splice(index, 1)
    }  
}

const getThingsTodo = function (todos) {
    return todos.filter(function (todo) {
        return !todo.completed
    })
}

const sortTodos = function (todos) {
    todos.sort(function (a, b) {
        if (a.completed < b.completed) {
            return -1
        } else if (a.completed > b.completed) {
            return 1
        } else {
            return 0
        }
    })
}

sortTodos(todos)
console.log(todos)


//console.log(getThingsTodo(todos))

// deleteTodo(todos, 'Go to college')
// console.log(todos)
