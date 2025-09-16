/**
 * Примитивные типы, которые могут быть сериализованы
 * @typedef {string | number | boolean | null} SerializablePrimitiveVal
 */

/**
 * Объект с методом toJSON для кастомной сериализации
 * @typedef {Object} SerializableObject
 * @property {function(): SerializableVal} toJSON - Метод для сериализации объекта
 */

/**
 * Значения, которые могут быть сериализованы в JSON
 * @typedef {SerializablePrimitiveVal |
 * SerializablePrimitiveVal[] |
 * Record<string, SerializablePrimitiveVal> |
 * SerializableObject} SerializableVal
 */
