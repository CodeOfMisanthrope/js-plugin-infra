/**
 * @typedef {T | null | undefined} Nullable
 * @template T
 */

/**
 * @typedef {Object} TodoOptions
 * @property {KVStorageEngine} storage - Движок хранилища для сохранения задач
 * @property {HTMLElement} [root] - DOM элемент-контейнер для рендера todo-списка
 * @property {string} [storageKey='todos'] - Ключ для сохранения данных в хранилище
 * @property {boolean} [autoSave=true] - Автоматически сохранять изменения
 */

/**
 * @typedef {Object} TodoTask
 * @implements {SerializableObject}
 * @property {string} id - Уникальный идентификатор
 * @property {string} title - Заголовок задачи
 * @property {string} [description] - Описание задачи
 * @property {boolean} completed - Статус выполнения
 * @property {Date} createdAt - Дата создания
 * @property {'low'|'medium'|'high'|'urgent'} [priority='medium'] - Приоритет
 * @property {string[]} [tags] - Теги для категоризации
 * @property {string} [category] - Категория задачи
 * @property {Object} [metadata] - Дополнительные метаданные
 * @property {function(): SerializableVal} toJSON - Метод для сериализации задачи в JSON
 */
