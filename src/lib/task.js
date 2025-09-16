/**
 * Класс для управления задачами Todo
 * @class TodoTask
 * @implements {SerializableObject}
 */
export default class TodoTask {
  /** @type {string} */
  #title;
  /** @type {string} */
  #desc;

  /**
   * Создает экземпляр TodoTask
   * @param {TodoTaskOptions} opts - Объект опций для создания задачи
   */
  constructor(opts) {
    this.#title = opts.title;
    this.#desc = opts.description ?? "";
  }

  toJSON() {
    return JSON.stringify({
      title: this.#title,
      desc: this.#desc,
    });
  }
}
