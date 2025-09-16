/**
 * Примитивные типы, которые могут быть сериализованы
 * @typedef {string | number | boolean | null} SerializablePrimitiveVal
 */

/**
 * Объект с методом toJSON для кастомной сериализации
 * @typedef {Object} SerializableObject
 * @template T
 * @property {function(): SerializableVal} toJSON - Метод для сериализации объекта
 * @property {function(): T} fromJSON - Метод для десериализации объекта
 */

/**
 * Значения, которые могут быть сериализованы в JSON
 * @typedef {SerializablePrimitiveVal |
 * SerializablePrimitiveVal[] |
 * Record<string, SerializablePrimitiveVal> |
 * SerializableObject} SerializableVal
 */
