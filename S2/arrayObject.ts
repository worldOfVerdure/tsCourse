//: string[] is not needed, yet is shown for learning purposes.
let hobbies: string[] = ["Sports", "Cooking"];
//hobbies.push(10); //TS infers the type of hobbies is an array of strings, i.e., string[]; hence,
//the error.

//let users: (string | number)[];
let users: Array<string | number>; //Generic type, alternative to the above assignment.

users = [1, "Drew"];
users = [5, 1];
users = ["Jordan", "Drew"];

//Tuple type
// Eventually want to store an array with 1, or -1. [1, -1].
// let possibleResults: number[]; // This allows for any array of numbers.
 //This tuple allows only two numbers. We will leaqrn how to force it to be 1's and -1's.
//let possibleResults: [number, number]; // This was close.

let possibleResults: [1 | -1, 1 | -1]; //Use a literal type.
possibleResults = [1, -1];
//possibleResults = [5, 10, 12]; Here a user doesn't know that this array should only have 1 and -1.

//Objects
//The syntax here is an object 
let user: {
  name: string;
  age: number | string;
  hobbies: string[];
  role: {
    description: string;
    id: number;
  }
} = {
  name: "Andrew",
  age: 32,
  hobbies: ["Mushrooms", "Gym"],
  role: {
    description: "wizard",
    id: 665
  }
};

//Tricky: The "Must Not Be Null" Type
//Notice there are no warnings or error doing the below code.
let val: {} = "some text";
//: {} does not mean empty object when being used as a type annotation. In type annotation, :{}
//means any value that is not type undefined nor null.

//Record type, related to Object types
/*
Say we have a scenario where we plan to store an object that may hold various key-value pairs. A
caveat being that we don't know which keys will be stored in the object. So the goal is that we want
to declare an object type without considering the key-value pairs themselves. One might be tempted
to use :{} syntax to anticipate any instantiated object. TS has a solution: the record type.
*/
// const someObj = { //Here, the keys can be strings, numbers, ect.
//   name: "Max",
//   0: "Person0"
// }
let data: Record<string, number | string>;

data = {
  entry1: 1,
  entry2: "some string"
};
