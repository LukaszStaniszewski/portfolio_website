import { createContext, useState, useContext } from "react";

const ThemeContext = createContext({
    currentTheme: null,
    setThemeContext: () => null,
});

export const ThemeProvider = ({children}) => {
    const [currentTheme, setThemeContext] = useState(null);
    const value = {currentTheme, setThemeContext}

  return <ThemeContext.Provider value={value} >{children}</ThemeContext.Provider>
}

export const useThemeContext = () => {
  const context = useContext(ThemeContext)
  if(!context) throw new Error(("useThemeContext must be inside a ThemeProvider"))
  return context;
}