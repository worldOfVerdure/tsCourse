// function performJob(cb: Function) {
//   // ...
//   cb();
// }

function cb(message1: string, message2: string): void {
  console.log(`${message1} and ${message2}`);
}

function performJob(cb: (msg1: string, msg2: string) => void) {
  // ...
  cb("Hello", "Good day");
}

performJob(cb);

type User = {
  name: string;
  age: number;
  greet: (msg: string) => string; //void, never, Function, etc.
}

let user: User = {
  name: "Andrew",
  age: 32,
  greet(msg) {
    console.log("Hello there, ");
    return this.name + " " + msg;
  }
}

user.greet("redacted");
