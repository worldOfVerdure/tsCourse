"use strict";
/*
We can explicitly declare a type as such: let names: string[] = ["Andrew", "Ella"];
There is another way to explicitly express the type. The form in the comment code here could be
considered a convenience feature.
*/
let names = ["Andrew", "Ella"];
let store = {};
store.name = "Drew";
store.isInstructor = true;
let nameStore = {};
nameStore.myName = "Andrew";
nameStore.isInsctructor = false;
// console.log(`Name: ${nameStore.myName} with ${typeof nameStore.myName}
//              Status: Is instructor? ${nameStore.isInsctructor} with ${nameStore.isInsctructor}
//   `);
/*
We can also use generics with functions as well.
*/
// function merge(a: any, b: any) {
//   return [a, b];
// }
// const ids = merge(1, 2);
// ids[0]. //No autocompletion because we don't know the type.
function merge(a, b) {
    return [a, b];
}
const ids = merge(1, 2);
function mergeMore(a, b) {
    return [a, b];
}
//console.log(mergeMore(84, "Andrew"));
/* Adding Constraints with Extends keyword. */
// function mergeObj(a: any, b: any) {
//   return {...a, ...b};
// }
// const mergedObj = mergeObj(1, 2);
// console.log(mergedObj); //Returns an empty object.
// function mergeObj<T extends object>(a: T, b: T) {
//   return {...a, ...b};
// }
// const mergedObj = mergeObj({value_1: 8}, {value_2: 4});
// console.log(mergedObj);
//In this example, both object shapes are different.
function mergeObj(a, b) {
    return { ...a, ...b };
}
/*
  The typeof mergedObj is both propery names with them being allowed to be undefined.
*/
const mergedObj = mergeObj({ name: "Andrew" }, { age: 32 });
console.log(mergedObj);
//Generic Classes
// clas User { //A union type could work, but could end up very long.
//   constructor(public id: string | number | object) {}
// }
class User {
    id;
    constructor(id) {
        this.id = id;
    }
}
const user = new User("i1");
user.id; //Notice that id populates in the search and has the typeof string.
