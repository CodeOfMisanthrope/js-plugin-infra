import {LocalStorageEngine, Todo} from "~lib/index.js";

const $root = document.getElementById("root");
console.log(22)
const todo = new Todo({
  storage: new LocalStorageEngine(),
  storageKey: "todo",
  root: $root,
  autoSave: true,
});
