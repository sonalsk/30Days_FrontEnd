// object definition
// no built in order
// like dictionaries
var person = {
    name: "sonal",
    age: 20,
    city: "delhi"
};

var newWay = {}
newWay.name = "sonal";
newWay.age = 20;
newWay.place = "delhi";

var newnew = new Object();

// to access
person["name"];
person.name;
// cannot use dot if value starts with number or contains a space

// update
person.name = "sonzi"

// this will store {red: "pink"}
var favColor = "red"
person[favColor] = "pink"