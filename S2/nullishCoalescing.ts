//The nullish coalescing operator is given by: ??. This operator is found in JS. When used like
// such: a ?? b, it checks if a is either undefined or null (other falsey values do not count!).

//Say a user does not supply a value in an input field.
let input = null;
//Say our const depends on the input.Depending if the input value is null or not, we want to assign
//a different value to our constant.
const didProvideInput: string | boolean = input ?? false;
