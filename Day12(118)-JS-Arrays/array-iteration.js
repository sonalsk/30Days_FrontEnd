colors = ["red", "yellow", "orange", "green"]
// for loop
for (var i = 0; i < colors.length; i += 1) {
    console.log(colors[i]);
}

// for each
// arr.forEach(some function)
colors.forEach(function(color){
    // color is variable for the items in the array
    console.log(color);
});


// normal function
function printColor(color) {
    console.log("***************")
    console.log(color)
    console.log("***************")
}

// for each
colors.forEach(printColor);