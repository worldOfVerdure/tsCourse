//Say we call a function that accesses a data base and we don't know the return type. This unknown
//type forces us to use if checks.

function process(val: unknown) {
  if (typeof val === "object" && !!val && "log" in val && typeof val.log === "function")
    val.log();
}
