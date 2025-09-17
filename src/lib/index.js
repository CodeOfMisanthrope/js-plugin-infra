import TodoTask from "~lib/task.js";

export {LocalStorageEngine} from "~core/kv-storage/index.js";

/**
 * Класс для управления списком задач
 * @class Todo
 */
export class Todo {
  /** @type {KVStorageEngine} */
  #storage;
  /** @type {HTMLElement} */
  #root;
  /** @type {string} */
  #storageKey;
  /** @type {boolean} */
  #autoSave;
  /** @type {number} */
  #countTasks;
  /** @type {EventEmitter} */
  #ee;

  get size() {
    return this.#countTasks;
  }

  /**
   * Создает экземпляр Todo
   * @param {TodoOptions} opts - Объект опций
   */
  constructor(opts) {
    this.#storage = opts.storage;
    this.#root = opts.root;
    this.#storageKey = opts.storageKey;
    this.#autoSave = opts.autoSave;
    this.#countTasks = this.#getCountTasks();
    if (this.#countTasks === 0) {
      this.#setCountTasks(this.#countTasks);
    }
    this.#ee = opts.ee;
  }

  /**
   * Генерирует ключ для хранилища на основе номера и базового ключа
   * @private
   * @param {number} num - Номер задачи
   * @returns {string} Сгенерированный ключ
   */
  #getKey(num) {
    return `${num}-${this.#storageKey}`;
  }

  #setCountTasks(num) {
    // console.log(this.#countTasks, 111)
    this.#storage.set("todo-count-tasks", this.#countTasks.toString());
  }

  #getCountTasks() {
    // console.log("todo-count-tasks", this.#storage.get("todo-count-tasks"));
    return Number(this.#storage.get("todo-count-tasks"));
  }

  /**
   * Добавляет новую задачу в хранилище
   * @param {TodoTask} task - Объект задачи для добавления
   * @returns {void}
   */
  addTask(task) {
    const taskString = task.toJSON();
    console.log(task);
    console.log(taskString);
    this.#storage.set(this.#getKey(++this.#countTasks), taskString);
    this.#setCountTasks(this.#countTasks);
    this.#ee.emit('addTask', task);
  }

  /**
   * Добавляет новую задачу в хранилище
   * @param {number} num - Объект задачи для добавления
   * @returns {Nullable<TodoTask>}
   */
  getTask(num) {
    const task = this.#storage.get(this.#getKey(num));
    if (task != null) {
      return new TodoTask(JSON.parse(task));
    }
  }

  getAllTasks() {
    const result = [];
    for (let i = this.#countTasks; i > 0; i--) {
      const task = this.getTask(i)
      if (task != null) {
        result.push(task);
      }
    }
    return result;
  }
}
