var store = {};
//...
store.id = 5;
store.isOpen = false;
// store.name = "Drew";//Throws error since our dynamic type doesn't allow for strings.
/*
Let's look at arrays again. TS infers that roles: string[]. In ceretain situations, we may want TS
to be stricter, and not be so broad. Here, as const is a TS feature. It tells TS that when infering
the type of the variable, be as narrowly as possible. Be more specific. Now we can see that the
array is immutable.
*/
var roles = ["admin", "guest", "editor"];
//roles.push("drew"); //Throws error.
var firstRole = roles[0]; //Knows it is "admin" because of as const.
//Revisiting Record type where we can give the types of the keys and values in an Object, which is
//what we did with the Index type. The index type is how Record works internally. The line below is
//the same as the L1-3.
var someObj;
//*Satisfies keyword
var dataEntriesR = {
    entry1: 0.51,
    entry2: -1.23
};
//Here TS does not warn us as long as the key is a string and the value is a number.
dataEntriesR["entry3"] = 1;
console.log(dataEntriesR.entry3);
/*
satisfies tells TS that dataEntries will hold the Record type as specified. Not only this, but will
take a look at value we are assigning, will check if the value satisfies the type we provide, it
will use the more specific type it can infer from the value.

Said in another way, TS will use the type you set after the satisfies keyword to check if the
assigned data entries are of that type. It will then, as a second step, actually infer a more
specific type from the concrete value you are setting. So the actual type set for dataEntries will
not be
*/
var dataEntries = {
    entry1: 0.51,
    entry2: -1.23
};
//Here TS does not warn us as long as the key is a string and the value is a number.
//dataEntries.entry3
//dataEntries.entry3 = 1;
