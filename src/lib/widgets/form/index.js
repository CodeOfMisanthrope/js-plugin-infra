import TodoTask from "~lib/task.js";

/**
 * Класс для управления формами
 * @class Form
 */
export class Form {
  /** @type {HTMLElement} */
  #root;
  /** @type {string} */
  #formClass;
  /** @type {HTMLInputElement[]} */
  #inputs;
  /** @type {HTMLFormElement} */
  #form;
  /** @type {Todo} */
  #todo;
  /** @type {EventEmitter} */
  #ee;

  /**
   * Создает экземпляр Form
   * @param {FormOptions} opts - Объект опций
   */
  constructor(opts) {
    this.#root = opts.root;
    this.#formClass = opts.formClass;
    this.#inputs = [...document.getElementsByClassName('form__input')];
    // console.log(this.#inputs);
    this.#form = document.getElementsByClassName('form')[0];
    this.#todo = opts.todo;
    this.#ee = opts.ee;
    // console.log(this.#form);
    this.#initSubmit();
  }

  #initSubmit() {
    this.#form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      if (this.validate()) {
        this.submit();
      }
    });
  }

  validate() {
    // todo Сделать только для name
    for (const input of this.#inputs) {
      const {value} = input;
      if (value === "") {
        return false;
      }
    }

    return true;
  }

  submit() {
    console.log('submit');
    const taskData = {};
    for (const input of this.#inputs) {
      console.log(input.name);
      const {name,value} = input;
      taskData[name] = value;
    }
    console.log(taskData)
    const newTask = new TodoTask(taskData);
    this.#todo.addTask(newTask)
  }
}
