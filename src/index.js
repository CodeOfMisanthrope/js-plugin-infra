import {LocalStorageEngine, Todo} from "~lib/index.js";
import {Form} from "~lib/widgets/form/index.js";

const $root = document.getElementById("root");
const $container = document.getElementsByClassName("container")[0];
console.log($container);

const todo = new Todo({
  storage: new LocalStorageEngine(),
  storageKey: "todo",
  root: $container,
  autoSave: true,
});

const form = new Form({
  formClass: "form",
  todo,
});
