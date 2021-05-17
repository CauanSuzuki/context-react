import React, { createContext, useState, useContext } from "react";
const themecontext = createContext();

export const themes = [
  {
    name: "dark",
    colors: {
      background: "black",
      text: "white",
    },
  },
  {
    name: "white",
    colors: {
      background: "white",
      text: "black",
    },
  },
];

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(themes[1]);

  return (
    <themecontext.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      {children}
    </themecontext.Provider>
  );
}
export function useTheme() {
  const context = useContext(themecontext);
  return context;
}
