"use strict";
/*
A useful feature of interfaces is extending them with classes. To make a class respect/adhere to an
interface, we use the TS exclusive implements keyword. To implement multiple interfaces on a class,
we can give a list of interfaces, sepreated with a comma. E.g., ABC1, ABC2, ... ABCn. This forces a
class to have certain shape and incorporate certain logic. Notice the first parameter in the
constructor has a property not found in the interface. This is okay, we can add additional fields to
our class. What is important is that the class must have that which it implements.
*/
class AuthenticatableUser {
    userName;
    email;
    password;
    role;
    constructor(userName, email, password, role) {
        this.userName = userName;
        this.email = email;
        this.password = password;
        this.role = role;
    }
    login(email) {
        //...
    }
    logout() {
        //...
    }
}
// function authenticate(user: {login(): void}) {} //This is valid, but below is a better way.
// Here, we must pass a user object which implements Authenticatable.
function authenticate(user) {
    user.login("test@email.com");
}
/*
One way to use an interface is to use it like an object type.
*/
let user;
user = {
    email: "test@example.com",
    password: "abc1",
    role: "staff",
    login() {
        //reach out to database, check credentials, create a session
    },
    logout() {
        //clear out user session data
    }
};
/*
A lesser known but nonetheless interesting feature of TypeScript interfaces is that you can also use
them to define function types.

For example, you might want to define the type of a sum function that takes two numbers as input and
returns their sum.

You could write this code:

type SumFn = (a: number, b: number) => number; // function type
 
let sum: SumFn; // making sure sum can only store values of that function type
 
sum = (a, b) => a + b; // assigning a value that adheres to that function type
Alternatively, you can also define the SumFn type via an interface:

interface SumFn {
  (a: number, b: number): number;
}
It's up to you which alternative you prefer.

Typically, you'll encounter the first version (type SumFn) more often but it's worth knowing about
the alternative, too.
*/
