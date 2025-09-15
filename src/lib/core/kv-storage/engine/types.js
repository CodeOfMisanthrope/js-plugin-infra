/**
 * @typedef {string | null | undefined} Nullable
 * @template T
 */

/**
 * Интерфейс для движка хранения ключ-значение
 * @interface KVStorageEngine
 */

/**
 * Получает значение по ключу из хранилища
 * @function
 * @name KVStorageEngine#get
 * @param {string} key - Ключ для поиска значения
 * @returns {string | null | undefined} Значение по ключу или null/undefined если не найдено
 */

/**
 * Сохраняет значение в хранилище по ключу
 * @function
 * @name KVStorageEngine#set
 * @param {string} key - Ключ для сохранения
 * @param {string} value - Значение для сохранения
 * @returns {void}
 */

/**
 * Удаляет значение из хранилища по ключу
 * @function
 * @name KVStorageEngine#remove
 * @param {string} key - Ключ для удаления
 * @returns {void}
 */
