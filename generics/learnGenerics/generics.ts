/*
We can explicitly declare a type as such: let names: string[] = ["Andrew", "Ella"];
There is another way to explicitly express the type. The form in the comment code here could be
considered a convenience feature.
*/
let names: Array<string> = ["Andrew", "Ella"];

/*
Max describes generics as types that need to work with other types. Above, we have an array type
working with a string type. We use generic to describe flexible types. the type infront of the
angled brackets is considered the generic type. The array type is flexible because it can allow all
KINDS of different types.
*/

/*
We can use the generic type to make our object more flexible.
*/
// type DataStore = {
//   [key: string]: string | number
// };

// let store: DataStore = {};
// store.name = "Drew";
// // store.isStudent = true;

/*
  Here we are defining our custom type. Before, we used Array<string> where both Array and string
  are concrete types. Below, we are defining our own custom types. So we use a  type variable, T.
  We can make this placeholder identifier anything. Multiple placeholders can be accepted as a comma
  separated list. Notice where we use the generic type definition that we now supply the concrete
  type.
*/
type DataStore<T> = {
  [key: string]: T
};

let store: DataStore<string | boolean> = {};
store.name = "Drew";
store.isInstructor = true;

let nameStore: DataStore<string | boolean> = {};
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

 function merge<T>(a: T, b: T) {
  return [a, b];
}

const ids = merge(1, 2);

function mergeMore<T, U>(a:T, b:U) {
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

function mergeObj<T extends object, U extends Object>(a: T, b: U) {
  return {...a, ...b};
}
/*
  The typeof mergedObj is both propery names with them being allowed to be undefined.
*/
const mergedObj = mergeObj({name: "Andrew"}, {age: 32});
console.log(mergedObj);

//Generic Classes
// clas User { //A union type could work, but could end up very long.
//   constructor(public id: string | number | object) {}
// }

class User<T> {
  constructor(public id: T) {}
}

const user = new User("i1");
user.id; //Notice that id populates in the search and has the typeof string.

//We can use generics with interfaces as well.
interface Role<T> {
  //T can be used anyplace it is needed within the interface.
}
