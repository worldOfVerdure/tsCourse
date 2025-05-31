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
  are concrete types. Below, we are defining our own custom types. So we use a placeholder, T. Here
  T stands for type. We can make this placeholder identifier anything. Multiple placeholders can be
  accepted as a comma separated list. Notice where we use the generic type definition that we now
  supply the concrete type.
*/
type DataStore<T> = {
  [key: string]: T
};

let store: DataStore<string | boolean> = {};
store.name = "Drew";
store.isInstructor = true;

let nameStore: DataStore<string> = {};

/*
We can also use generics with functions as well.
*/

function merge(a: any, b: any) {
  return [a, b];
}

const ids = merge(1, 2);
// ids[0]. //No autocompletion because  
