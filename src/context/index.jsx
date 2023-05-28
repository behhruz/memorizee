import React, { createContext, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [signUser, setSignUser] = useState(null);

  const setSignedUser = (user) => {
    setSignUser(user);
  };

  return (
    <DataContext.Provider value={{ signUser, setSignUser: setSignedUser }}>
      {children}
    </DataContext.Provider>
  );
};
export default DataProvider;
