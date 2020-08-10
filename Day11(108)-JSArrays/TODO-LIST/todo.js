var answer = prompt("What would you like to do?")
var todo = []

while (answer !== "quit") {
    var answer = prompt("What would you like to do?")
    if (answer === "new") {
        var work = prompt("Enter a new todo")
        todo.push(work);
    }

    else if(answer === "list") {
        console.log(todo)
    }

    else if(answer == "delete") {
        todo.pop()
    }
}

console.log("OK you quit the app")
// alert console prompt