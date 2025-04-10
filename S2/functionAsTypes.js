// function performJob(cb: Function) {
//   // ...
//   cb();
// }
function cb(message1, message2) {
    console.log("".concat(message1, " and ").concat(message2));
}
function performJob(cb) {
    // ...
    cb("Hello", "Good day");
}
performJob(cb);
var user = {
    name: "Andrew",
    age: 32,
    greet: function (msg) {
        console.log("Hello there, ");
        return this.name + " " + msg;
    }
};
user.greet("redacted");
