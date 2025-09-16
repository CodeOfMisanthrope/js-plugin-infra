/**
 * Класс для управления событиями по паттерну Observer
 * @class EventEmitter
 */
export default class EventEmitter {
  /** @type {Map<string, Set<EventHandler>>} */
  #storage;

  constructor() {
    this.#storage = new Map();
  }

  /**
   * Получает хранилище обработчиков для указанного ключа события
   * @private
   * @param {string} key - Ключ события
   * @returns {Set<EventHandler> | undefined} Множество обработчиков или undefined
   */
  #getStorage(key) {
    return this.#storage.get(key);
  }

  /**
   * Добавляет обработчик для указанного события
   * @public
   * @param {string} key - Ключ события
   * @param {EventHandler} handler - Функция-обработчик события
   * @returns {void}
   */
  on(key, handler) {
    if (!this.#storage.has(key)) {
      this.#storage.set(key, new Set([handler]));
      return;
    }

    this.#storage.get(key).add(handler);
  }

  /**
   * Удаляет обработчик для указанного события
   * @public
   * @param {string} key - Ключ события
   * @param {EventHandler} handler - Функция-обработчик для удаления
   * @returns {void}
   */
  off(key, handler) {
    const storage = this.#getStorage(key);

    if (!storage) {
      return;
    }

    if (storage.has(handler)) {
      storage.delete(handler);
      if (storage.size === 0) {
        this.#storage.delete(key);
      }
    }
  }

  /**
   * Вызывает все обработчики для указанного события
   * @public
   * @param {string} key - Ключ события
   * @param {...*} args - Аргументы для передачи обработчикам
   * @returns {void}
   */
  emit(key, ...args) {
    const storage = this.#getStorage(key);

    if (!storage) {
      return;
    }

    for (const handler of storage) {
      handler(...args);
    }
  }
}
