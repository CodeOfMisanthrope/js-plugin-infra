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
 * @property {EventEmitter} ee - EventEmitter
 */

/**
 * @typedef {Object} TodoTaskOptions
 * @implements {SerializableObject<TodoTask>}
 * @property {string} [id] - Уникальный идентификатор
 * @property {string} title - Заголовок задачи
 * @property {string} [description] - Описание задачи
 * @property {boolean} [completed] - Статус выполнения
 * @property {Date} [createdAt] - Дата создания
 * @property {'low'|'medium'|'high'|'urgent'} [priority='medium'] - Приоритет
 // * @property {function(): SerializableVal} toJSON - Метод для сериализации задачи в JSON
 // * @property {function(): TodoTask} fromJSON - Метод для сериализации задачи в JSON
 */
