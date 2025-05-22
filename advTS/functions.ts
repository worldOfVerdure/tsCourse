//*Function overloads
function getLength(val: string): string;
function getLength (val: any[]): number;
function getLength(val: string | any[]) {
  //return val.length; // X words
  if (typeof val === "string") {
    const numberOfWords = val.split(" ").length;
    return `${numberOfWords} words`;
  }

  return val.length;
}

const numberOfWords = getLength("Does this work?");
numberOfWords.length; //Causes an error.
const numItems = getLength(["Sports", 1]);
