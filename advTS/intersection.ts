/*
?Note: The same problem below could have been solved with interfaces.
*/
/*
Intersection types. AccessedFileData is a combination of the previous two. We would maually add the
fields from the twain of previous object types, yet there is a more elegant solution.
*/
//~We either have a File data type or a Database data type. Now an intersection type makes sense.
type FileData = {
  path: string;
  content: string;
}

type DatabaseData = {
  connectionURL: string;
  credentials: string;
}

type Status = {
  isOpen: boolean;
  errorMessage?: string;
}

/*
This creates an intersection of the two object types, creating a new object type that is a superset
of both types.
*/
type AccessedFileData = FileData & Status;
type AccessedDatabaseData = DatabaseData & Status;
