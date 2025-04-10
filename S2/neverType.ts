//Return type is void, though this function is interesting in that we can override it with the
//never type. The never type is different than the void type beacuse it throws an Error which
// crashes the program if the error is not catched.

function logAndThrow(errorMessage: string): never {
  console.log(errorMessage);
  throw new Error(errorMessage);
}
