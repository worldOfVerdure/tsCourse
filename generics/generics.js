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
function mergeObj(a, b) {
    return { ...a, ...b };
}
/*
  The typeof mergedObj is both propery names with them being allowed to be undefined.
*/
const PERSON = mergeObj({ name: "Andrew" }, { age: 32 });
console.log(PERSON);
console.log(typeof PERSON);
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
