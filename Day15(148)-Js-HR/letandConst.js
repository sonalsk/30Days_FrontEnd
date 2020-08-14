// We use the const keyword to create a read-only reference to a value, meaning the value referenced by this variable cannot be reassigned.
// JavaScript requires that constant variables always be initialized.
const PI = Math.PI;
var r = readLine();

// switch case
var n = 5;
switch (n) {
    case 2:
        console.log("A");
        break;
    case 3:
        console.log("B");
        break;
    case 4:
        console.log("C");
        break;
    case 5:
    case 6:
    case 7:
        console.log("D");
        break;
    default:
        console.log("E");
}