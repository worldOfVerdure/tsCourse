/* 
interface is a ts keyword. We use the keyword then give the interface identifier,
Authenticatable. This interface will be used to decribe objects that will implement fields to be
used in user authentication. Between these curly braces, we only describe an object type. We are
giving the shape of any authenticatable object.
*/
interface Authenticatable {
  email: string;
  password: string;

  login(email: string): void;
  logout(): void;
}

interface Authenticatable {
  role: string;
}

/*
A useful feature of interfaces is extending them with classes. To make a class respect/adhere to an
interface, we use the TS exclusive implements keyword. To implement multiple interfaces on a class,
we can give a list of interfaces, sepreated with a comma. E.g., ABC1, ABC2, ... ABCn. This forces a
class to have certain shape and incorporate certain logic. Notice the first parameter in the
constructor has a property not found in the interface. This is okay, we can add additional fields to
our class. What is important is that the class must have that which it implements.
*/
class AuthenticatableUser implements Authenticatable {
  constructor(
    public userName: string,
    public email: string,
    public password: string,
    public role: string
  ) {}

  login(email: string) {
    //...
  }

  logout() {
    //...
  }
}

// function authenticate(user: {login(): void}) {} //This is valid, but below is a better way.
// Here, we must pass a user object which implements Authenticatable.
function authenticate(user: Authenticatable) {
  user.login("test@email.com");
}

/*
While we can use declaration merging, but we can also use the extends keyword. The goal with extends
here is that we are not touching the original interface. We keep the original the same. We create a
new, additional interface which adds additional fields.
*/

interface AuthenticatableAdmin extends Authenticatable {
  adminRole: "admin" | "superadmin";
}

/*
One way to use an interface is to use it like an object type.
*/
let user: Authenticatable;

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
}

/*
For the above section, why use an interface when the custom object type with help of the type
keyword? See below. There are some subtle differences where this could matter. One feature where
this can matter is declaration merging. When working with interfaces, we can easily add extra fields
to the object type by redeclaring the interface with additional fields. See above for an example.
Authenticatable is declared twice, with different fields, yet no error is thrown by TS. TS will
merge both type definitions together; hence, user needs a role property. Why would this be useful?
This can be useful when interfaces from other packages or modules where maybe we want to extend
something we don't directly control. We can't do this with type aliases. It mostly come down to
personal preferences.
*/

type OtherAuthenticatable = {
  email: string;
  password: string;

  login(email: string): void;
  logout(): void;
}

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
