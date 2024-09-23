import { createContext, useState, useContext } from "react";

export const ListContext = createContext();

export const ListContextProvider = ({ children }) => {
  const [isGrid, setIsGrid] = useState(true);
  const toggleDisplay = () => {
    setIsGrid((prev) => !prev);
  };
  return (
    <ListContext.Provider value={{ isGrid, toggleDisplay }}>
      {children}
    </ListContext.Provider>
  );
};

export const useListContext = () => useContext(ListContext);