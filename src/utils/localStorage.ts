/**
 * Set a value in localStorage with a given key.
 * @param key - The key under which to store the value.
 * @param value - The value to be stored.
 */
export const setLocalStorageItem = (key: string, value: any) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error("Failed to set item in localStorage:", error);
    }
  };
  
  /**
   * Get a value from localStorage by key.
   * @param key - The key to retrieve the value.
   * @returns The parsed value or null if not found.
   */
  export const getLocalStorageItem = (key: string) => {
    try {
      const value = localStorage.getItem(key);
      return value ? JSON.parse(value) : null;
    } catch (error) {
      console.error("Failed to get item from localStorage:", error);
      return null;
    }
  };
  
  /**
   * Set a timestamp in localStorage.
   * @param key - The key under which to store the timestamp.
   */
  export const setLocalStorageTimestamp = (key: string) => {
    setLocalStorageItem(key, new Date().getTime().toString());
  };
  