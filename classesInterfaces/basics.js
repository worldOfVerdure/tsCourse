"use strict";
//This is fine for a fixed field in the class. No constructor is neecded in this case.
// class User {
//   userName = "Drew";
// }
// new User();
/*
  No in JS, declaring the class properties is not necessary. So below, we will see a shortcut in TS
  to reduce the amount of code we need to write.
*/
// class User {
//   userName: string;
//   age: number;
//   //name and age in the constructor do not need to match the identifiers declared in the class.
//   //For instance, name can be "n" and age can be "a".
//   constructor(userName: string, age: number) {
//     this.userName = userName;
//     this.age = age;
//   }
// }
// new User(userName, age);
/*
public is a keyword which tells TS to immediately create a property with the same identifier as the
parameter. TS will also do this with the private keyword as well. These keywords have other
features, mind you. Further more, the value being assigned to the constructor property will be
assigned to the object property once the class is instantiated. Further more, we don't need any code
inside the constructor to create and assign to these identifiers.
*/
// class User {
//   constructor(public userName: string, public age: number) {}
// }
// const drew = new User("drew", 32);
// const ella = new User("ella", 23);
// console.log(drew, ella);
/*
  Public can be used outside the constructor. The public keyword is a nice feature of TS. The main
  idea being that we can use public to control how properties may be accessed on the object that is
  created based on the class. Properties that are marked as public can, for example, simply be used
  with the dot operator to access and even reasssign the property value. E.g. drew.age = 33;. If age
  was marked private, then there is an error reassigning. This private property is only accessible
  withing the class itself. The private keyword does not allow us to read the property either such
  as with console.log(ella.age); would be considered invalid by the ts compiler. Private properties
  can be accessed from a method within the class.

  There is also the protected keyword which works like private but also make sure that the property
  may be accessed from classes that inherit from this class. We will see this later.

  To be clear, these keywords are TS exclusive. JS uses a # symbol.

  Omitting any of these keywords, TS will assume the field is public. Though it is important to
  remember that omitting these keywords from the constructor causes the shortcut of not needing to
  declare fields to not work. The public keyword may be removed without consequence for any field
  not in the constructor.

  The readonly keyword means the field can be accessed, but we cannot assign to it. Similar to const
  for a variable declaration.
*/
class User {
    userName;
    age;
    hobbies = [];
    constructor(userName, age) {
        this.userName = userName;
        this.age = age;
    }
    greet() {
        console.log(`My age ${this.age}`);
    }
}
const drew = new User("drew", 32);
drew.greet();
const ella = new User("ella", 23);
// console.log(ella.age); //Ella's age cannot be accessed outside an internal method.
console.log(drew, ella);
