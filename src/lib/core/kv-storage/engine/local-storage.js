/**
 * Реализация движка хранилища на основе localStorage браузера
 * @class LocalStorageEngine
 * @implements {KVStorageEngine}
 */
export default class LocalStorageEngine {

  /**
   * Получает значение по ключу из localStorage
   * @param {string} key - Ключ для поиска значения
   * @returns {string | null | undefined} Значение по ключу или null если не найдено
   */
  get(key) {
    return localStorage.getItem(key);
  }

  /**
   * Сохраняет значение в localStorage по ключу
   * @param {string} key - Ключ для сохранения
   * @param {string} val - Значение для сохранения
   * @returns {void}
   */
  set(key, val) {
    localStorage.setItem(key, val);
  }

  /**
   * Удаляет значение из localStorage по ключу
   * @param {string} key - Ключ для удаления
   * @returns {void}
   */
  remove(key) {
    localStorage.removeItem(key);
  }
}
