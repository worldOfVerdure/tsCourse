var username; //Other types: number, boolean, etc.
// The process of doing identifierName: type is called type assignment or type annotation.
var userAge = 32; // Implicit type annotation is given since 32 is a number.
//...
username = "Drew";
// userAge = "24"; //This leads to an error because the type of userAge is implicitly a number.
// Parameter types
function add(a, b) {
    if (b === void 0) { b = 5; }
    return a + b;
}
var result = add(10); // Here the passed value is valid. It is a number.
// let result: number = add("10"); // Here the passed value is invalid. It is a string.
var otherResult = add(10, 6); //6 overrides 5, yet 6 is still a number, so it's valid.
console.log(username, userAge, "The result: ".concat(result));
