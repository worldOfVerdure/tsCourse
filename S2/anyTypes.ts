let age: any = 36; // Any type accepts any kind of value.

//...

age = "37";
age = true;
age = {};
age = [];

let betterAge: string | number | boolean = 63; // Union type

betterAge = "63";
betterAge = false;

// betterAge = {}; // Throws an error.
// betterAge = []; // Throws an error as well.
