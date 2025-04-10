let userRole: "admin" | "editor" | "guest" = "editor";

//type keyword is TS exclusive.
type Role = "admin" | "editor" | "guest";

function access(role: Role) {
  return `Hello ${role}.`;
}

type User = {
  name: string;
  age: number | string;
  hobbies: string[];
  role: {
    description: string;
    id: number;
  }
};

let newUser: User = {
  name: "Dingle Biffle Bloopin Schnorpf",
  age: 3200,
  hobbies: ["Eating cake", "not eating cake"],
  role: {
    description: "parachute tester",
    id: -8
  }
};
