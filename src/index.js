import {LocalStorageEngine, Todo} from "~lib/index.js";
import {Form} from "~lib/widgets/form/index.js";
import EventEmitter from "~core/event-emitter/index.js";
import TodoList from "~lib/widgets/list/index.js";

const $root = document.getElementById("root");
const $container = document.getElementsByClassName("container")[0];
console.log($container);

const ee = new EventEmitter();

const todo = new Todo({
  storage: new LocalStorageEngine(),
  storageKey: "todo",
  root: $container,
  autoSave: true,
  ee,
});

const form = new Form({
  formClass: "form",
  todo,
  ee
});

const list = new TodoList({
  listClass: document.getElementById("task__list"),
  todo,
  ee,
});

// const ee = new EventEmitter();
//
// function log1() {
//   console.log(1);
// }
//
// function log2() {
//   console.log(2);
// }
//
// function log3() {
//   console.log(3);
// }
//
// ee.on('log', log1);
// ee.on('log', log2);
// ee.on('log', log3);
//
// ee.off('log', log3);
// ee.emit('log');
