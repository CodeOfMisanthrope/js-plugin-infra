class TodoList {
  /** @type {HTMLElement} */
  #root;
  /** @type {EventEmitter} */
  #ee;

  /**
   * Создает экземпляр TodoList
   * @param {TodoListOptions} opts - Объект опций
   */
  constructor(opts) {
    this.#root = opts.root;
    this.#ee = opts.ee;
  }

  addTask(num) {

  }

  removeTask(num) {

  }
}
