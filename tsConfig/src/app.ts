/*
We can control how the ts compiler works. We do so by using the command:
tsc --init
The command above will produce a tsconfig.json file which allows us to control the compiler.
*/

let userName: string;

userName = "Andrew";

console.log(userName);

function add(a: any, b: any) {
  return a + b;
}

console.log(add(3, 4));
