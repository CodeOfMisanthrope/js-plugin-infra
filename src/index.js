import {LocalStorageEngine, Todo} from "~lib/index.js";
import {Form} from "~lib/widgets/form/index.js";
import EventEmitter from "~core/event-emitter/index.js";

// const $root = document.getElementById("root");
// const $container = document.getElementsByClassName("container")[0];
// console.log($container);
//
// const todo = new Todo({
//   storage: new LocalStorageEngine(),
//   storageKey: "todo",
//   root: $container,
//   autoSave: true,
// });
//
// const form = new Form({
//   formClass: "form",
//   todo,
// });

const ee = new EventEmitter();

function log1() {
  console.log(1);
}

function log2() {
  console.log(2);
}

function log3() {
  console.log(3);
}

ee.on('log', log1);
ee.on('log', log2);
ee.on('log', log3);

ee.off('log', log3);
ee.emit('log');
