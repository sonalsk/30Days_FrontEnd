// push
// add to the end
colors = ["red", "green", "blue", "yellow"]
// also returns the length of the array
colors.push("indigo")

// pop
// removes last element
// return removed array
colors.pop()

// shift
// removes from front
// returns removed element
colors.shift()

// unshift
// returns size of array
colors.unshift("pink")

// find
colors.indexOf("pink") //returns 0
colors.indexOf("sonal") //returns -1

colors = ["red", "green", "yellow", "pink", "blue"]
// slicing
// just like python
var store = colors.slice(1, 4) //gives ["green", "pink"]