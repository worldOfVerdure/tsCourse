"use strict";
// class AdvUser {
//   constructor(private firstName: string, private lastName: string) {}
//   get fullName() {
//     return this.firstName + " " + this.lastName;
//   }
// }
// const andrew = new AdvUser("Andrew", "Awesome");
// console.log(andrew.fullName);
class AdvUser {
    // Protected gives extended classes access as well.
    _firstName = "";
    _lastName = "";
    set firstName(name) {
        if (name.trim() === "")
            throw new Error("Invalid name");
        this._firstName = name;
    }
    set lastName(name) {
        if (name.trim() === "")
            throw new Error("Invalid name");
        this._lastName = name;
    }
    get fullName() {
        return this._firstName + " " + this._lastName;
    }
    // entity id
    static eid = "User";
    static greet() {
        console.log("Hello");
    }
}
console.log(AdvUser.eid);
AdvUser.greet();
const andrew = new AdvUser();
andrew.firstName = "Andrew";
andrew.lastName = "Awesome";
console.log(andrew.fullName);
class Employee extends AdvUser {
    jobTitle;
    constructor(jobTitle) {
        super();
        this.jobTitle = jobTitle;
        //This is also possible to do withing the constructor of the exenteding class
        //super.firstName = "Andrew"; 
    }
    work() {
        /*
          Say in work we want to use the _firstName of the user, which is private at the time of typing.
          This isn't so easy because we only have a getter for the fullName. The class that extends
          doesn't have access to the super classes private fields. What's the solution? The
          protected keyword! The protected keyword allows extending classes access to protected fields.
        */
        console.log(`${this._firstName} the ${this.jobTitle} did a bunch of work. Yee haw!`);
    }
}
const workerAndrew = new Employee("Cultist");
workerAndrew.firstName = "Andrew";
workerAndrew.lastName = "Strong";
workerAndrew.work();
/*
This next class does not exist in JS and is an exclusive TS feature. Introducing the abstract class.
Say we have a UIElement class that can build up to different elements. We could have a login form
element, or another for a task or side drawer. We would never want to instantiate this
building-block UIElement because it's just a building block that all other elements share. In comes
the abstract class. An abstract class cannot be instantiated.
*/
class UIElements {
    identifier;
    constructor(identifier) {
        this.identifier = identifier;
    }
    clone(targetLocation) {
        // logic to duplicate the UI element
    }
}
//Throws warning that abstract classes can't be instantiated.
//let UIElement = new UIElements("drawer");
class SideDrawerElement extends UIElements {
    identifier;
    position;
    constructor(identifier, position) {
        super(identifier);
        this.identifier = identifier;
        this.position = position;
    }
}
