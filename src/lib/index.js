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

  /**
   * Создает экземпляр Todo
   * @param {TodoOptions} opts - Объект опций
   */
  constructor(opts) {
    this.#storage = opts.storage;
    this.#root = opts.root;
    this.#storageKey = opts.storageKey;
    this.#autoSave = opts.autoSave;
    this.#countTasks = 0;

    const $el = this.#create();
    this.#mount($el);
  }

  #mount($el) {
    this.#root.appendChild($el);
  }

  #create() {
    const $root = document.createElement('div');
    const $ul = document.createElement('ul');
    $root.appendChild($ul);
    // Доделать после addTask
    return $root;
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

  /**
   * Добавляет новую задачу в хранилище
   * @param {TodoTask} task - Объект задачи для добавления
   * @returns {void}
   */
  addTask(task) {
    this.#storage.set(this.#getKey(this.#countTasks++), task);
  }
}
