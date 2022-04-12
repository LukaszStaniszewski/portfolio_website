import { createContext, useState, useContext } from "react";

const UrlContext = createContext({
    currentUrl: null,
    setUrl: () => null,
});

export const UrlProvider = ({children}) => {
    const [currentUrl, setUrl] = useState(null);
    const value = {currentUrl, setUrl}

  return <UrlContext.Provider value={value} >{children}</UrlContext.Provider>
}

export const useUrlContext = () => {
  const context = useContext(UrlContext)
  if(!context) throw new Error(("useUrlContext must be inside a UrlProvider"))
  return context;
}