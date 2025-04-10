/*
We could write code like this, but now userRole accepts any type of number. Also, without the
  comment, this code is ambiguous.
*/
//~Note: The enum keyword is exclusive to TS
//Can change the indexing by doing Admin = 1.
// enum Role {
//   Admin, //0
//   Editor, //1
//   Guest, //2
// };

// // let userRole = 0; // 0 == Admin, 1 == Guest
// //let userRole: Role = 0; //Is allowed while any other value throws an error.
// let userRole: Role = Role.Admin;

// //...

// userRole = Role.Guest;

// Literal types
let userRole: "admin" | "editor" | "guest" = "editor";

let possibleResults: [1 | -1, 1 | -1];
possibleResults = [1, -1];
