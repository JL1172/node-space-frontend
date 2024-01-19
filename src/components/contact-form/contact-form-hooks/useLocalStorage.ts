import { useState } from "react";

export const useLocalStorage = (key: any, state: any) => {
  const [data, setData] = useState(() => {
    if (window.localStorage.getItem(key)) {
      return JSON.parse(window.localStorage.getItem(key) || "");
    }
    window.localStorage.setItem(key, JSON.stringify(state));
    return state;
  });
  const changeHandler = (value: any) => {
    setData(value);
    window.localStorage.setItem(key, JSON.stringify(value));
  };
  return [data, changeHandler];
};
