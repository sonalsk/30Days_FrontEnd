var answer = prompt("What would you like to do?")
var todo = []

while (answer !== "quit") {
    var answer = prompt("What would you like to do?")
    
    if (answer === "new") {
        addTodo();
    }

    else if(answer === "list") {
        listTodo();
    }

    else if(answer == "delete") {
        deleteTodo();
    }
}

function addTodo() {
    var work = prompt("Enter a new todo")
    todo.push(work);
    console.log(work + "added to the list!")
}

function listTodo() {
    console.log("**********")
    // for loop
    for (var i = 0; i < todo.length; i++) {
        console.log(i + ": " + todo[i]);
    }

    // for each
    todo.forEach(function(todos, i) {
        console.log(i + ": " + todos);
    });
    console.log("**********")
}

function deleteTodo() {
    var index = prompt("Enter index of todo to delete")
    if (index !== -1) {
        odo.splice(index, 1);
    }
    console.log("Todo Removed")
}

console.log("OK you quit the app")
// alert console prompt