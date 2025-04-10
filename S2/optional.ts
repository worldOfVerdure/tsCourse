//~What if we want having to pass the msg paramater as an option?
//^Add a '?' before the ':'.

function generateError(msg?: string) {
  throw new Error(msg);
}

generateError();

type User = {
  name: string;
  age: number;
  role?: "admin" | "guest";
};
