/**
 * Storage service for managing local storage
 */
class StorageService {
  /**
   * Set an item in local storage
   * @param key - The storage key
   * @param value - The value to store (will be JSON stringified)
   */
  setItem(key: string, value: any): void {
    try {
      const serializedValue = JSON.stringify(value);
      localStorage.setItem(key, serializedValue);
    } catch (error) {
      console.error(`Error setting localStorage item "${key}":`, error);
    }
  }

  /**
   * Get an item from local storage
   * @param key - The storage key
   * @param defaultValue - Default value to return if key not found
   * @returns The stored value or defaultValue if not found
   */
  getItem<T>(key: string, defaultValue: T | null = null): T | null {
    try {
      const serializedValue = localStorage.getItem(key);
      if (serializedValue === null) {
        return defaultValue;
      }
      return JSON.parse(serializedValue);
    } catch (error) {
      console.error(`Error getting localStorage item "${key}":`, error);
      return defaultValue;
    }
  }

  /**
   * Remove an item from local storage
   * @param key - The storage key to remove
   */
  removeItem(key: string): void {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error(`Error removing localStorage item "${key}":`, error);
    }
  }

  /**
   * Clear all items from local storage
   */
  clear(): void {
    try {
      localStorage.clear();
    } catch (error) {
      console.error('Error clearing localStorage:', error);
    }
  }
}

export default new StorageService();