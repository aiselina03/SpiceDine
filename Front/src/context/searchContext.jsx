import React, { createContext,  useEffect, useState } from "react";

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/menu")
      .then((res) => res.json())
      .then((data) => setMenu(data));
  }, []);

  const search = () => {
    const filteredMenu = menu.filter((menu) =>
      menu.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return { filteredMenu };
  };

  return (
    <SearchContext.Provider value={{ searchQuery, setSearchQuery, search }}>
      {children}
    </SearchContext.Provider>
  );
};
