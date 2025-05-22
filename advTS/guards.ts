// type FileSource = { path: string };
// const fileSource: FileSource = {
//   path: 'some/path/to/file.csv',
// };

// type DBSource = { connectionUrl: string };
// const dbSource: DBSource = {
//   connectionUrl: 'some-connection-url',
// };

// type Source = FileSource | DBSource;

// /*
// Depending on the Source type object path, since the File and Data have different shapes, we need our
// loadData function to do different tasks. We need to figure our which type we have in the union type.
// We use a type guard to solve this.
// */
// function loadData(source: Source) {
//   // Open + read file OR reach out to database server.
//   if ("path" in source) { //We don't need to check if object type because paramter is of Source.
//     // source.path; -> use that to open the file
//     return;
//   }
//   //After the if check TS knows that it must be a DB type.
//   //source.connectionURL; -> to reach out to the database.
// }
// //*Discriminate Unions, we add a shared property to all types combined in Union, and using literal
// //*values to find out which value type we are dealing with. We are discriminating.
// type FileSource = {type: "file",  path: string };
// const fileSource: FileSource = {
//   type: "file",
//   path: 'some/path/to/file.csv',
// };

// type DBSource = { type: "db", connectionUrl: string };
// const dbSource: DBSource = {
//   type: "db",
//   connectionUrl: 'some-connection-url',
// };

// type Source = FileSource | DBSource;

// /*
// Depending on the Source type object path, since the File and Data have different shapes, we need our
// loadData function to do different tasks. We need to figure our which type we have in the union type.
// We use a type guard to solve this.
// */
// function loadData(source: Source) {
//   // Open + read file OR reach out to database server.
//   if (source.type === "file") { //We don't need to check if object type because paramter is of Source.
//     // source.path; -> use that to open the file
//     return;
//   }
//   //After the if check TS knows that it must be a DB type.
//   //source.connectionURL; -> to reach out to the database.
// }

type FileSource = { type: 'file'; path: string };
const fileSource: FileSource = {
  type: 'file',
  path: 'some/path/to/file.csv',
};

type DBSource = { type: 'db', connectionUrl: string };
const dbSource: DBSource = {
  type: 'db',
  connectionUrl: 'some-connection-url',
};

type Source = FileSource | DBSource;
/*
Sometimes we don't want the typeguarding to bloat the function we are working in. We can write a
function that outsources this typeguarding. Modern TS will return a special type called a type
predicate. It's a boolean with extra information. TS understands that if the source type is file,
then isFile will return true, but that source is also a file type.
*/
function isFile(source: Source) {
  return source.type === 'file';
}

function loadData(source: Source) {
  // if ('path' in source) {
  if (isFile(source)) {
    // source.path
    // source.path; => use that to open the file
    return;
  }
  // source.connectionUrl; => to reach out to database
}

class User {
  constructor(public name: string) {}

  join() {
    // ...
  }
}

class Admin {
  constructor(permissions: string[]) {}

  scan() {
    // ...
  }
}

const user = new User('Max');
const admin = new Admin(['ban', 'restore']);

type Entity = User | Admin;

/*
When working with classes, we can take advantage of a JS specific keyword: instanceof operator.
*/
function init(entity: Entity) {
 // .join() OR .scan() ...
  if (entity instanceof User) {
    entity.join();
    return;
  }

  entity.scan();
}
