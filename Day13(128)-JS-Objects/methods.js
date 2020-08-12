// method is a function that is a property inside an object
var obj = {
    name: "Chuck",
    age: 45,
    isCool: false,
    friends = ["bob", "tina"],

    add = function(x, y) {
        return x + y;
    }
}

// to access
obj.add(2, 3);