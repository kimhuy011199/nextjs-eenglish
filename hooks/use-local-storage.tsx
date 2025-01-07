function useLocalStorage(key: string) {
  const getValue = () => {
    try {
      if (typeof window !== 'undefined') {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : '';
      }
    } catch (error) {
      console.error(error);
    }
  };

  const setValue = (value: string) => {
    try {
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(value));
      }
    } catch (error) {
      console.error(error);
    }
  };

  const storedValue = getValue();

  return [storedValue, setValue] as const;
}

export default useLocalStorage;
