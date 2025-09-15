/**
 * @typedef {Object} TodoTask
 * @property {string} id - Уникальный идентификатор
 * @property {string} title - Заголовок задачи
 * @property {string} [description] - Описание задачи
 * @property {boolean} completed - Статус выполнения
 * @property {Date} createdAt - Дата создания
 * @property {'low'|'medium'|'high'|'urgent'} [priority='medium'] - Приоритет
 * @property {string[]} [tags] - Теги для категоризации
 * @property {string} [category] - Категория задачи
 * @property {Object} [metadata] - Дополнительные метаданные
 */
