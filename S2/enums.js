/*
We could write code like this, but now userRole accepts any type of number. Also, without the
  comment, this code is ambiguous.
*/
var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["Editor"] = 1] = "Editor";
    Role[Role["Guest"] = 2] = "Guest";
})(Role || (Role = {}));
;
// let userRole = 0; // 0 == Admin, 1 == Guest
//let userRole: Role = 0; //Is allowed while any other value throws an error.
var userRole = Role.Admin;
//...
userRole = Role.Guest;
