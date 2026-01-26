/**
 * Gets a value from LocalStorage and parses it from JSON.
 * @param key
 * @returns {T | null}
 */
export function getItems<T>(key: string): T | null {
  try {
    const value = localStorage.getItem(key);
    if (!value) return null;
    return JSON.parse(value) as T;
  } catch (error) {
    console.error(`Error retrieving from localStorage[${key}]:`, error);
    return null;
  }
}

/**
 * Saves a value in LocalStorage and converts it to JSON.
 * @param key
 * @param value
 * @returns {void}
 */
export function setItem<T>(key: string, value: T): void {
  try {
    const jsonValue = JSON.stringify(value);
    localStorage.setItem(key, jsonValue);
  } catch (error) {
    console.error(`Error saving data from localStorage[${key}]:`, error);
  }
}
