/**
 * Класс для управления задачами Todo
 * @class TodoTask
 * @implements {SerializableObject}
 */
export default class TodoTask {
  /** @type {string} */
  #id
  /** @type {string} */
  #title;
  /** @type {string} */
  #desc;

  get id() {
    return this.#id;
  }

  get title() {
    return this.#title;
  }

  get desc() {
    return this.#desc;
  }

  /**
   * Создает экземпляр TodoTask
   * @param {TodoTaskOptions} opts - Объект опций для создания задачи
   */
  constructor(opts) {
    this.#id = opts.id;
    this.#title = opts.title;
    this.#desc = opts.desc ?? "";
  }

  toJSON() {
    return JSON.stringify({
      id: this.id,
      title: this.#title,
      desc: this.#desc,
    });
  }
}
