import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isOpenPoster, setIsOpenPoster] = useState(false);

  return (
    <AppContext.Provider
      value={{
        isOpenPoster,
        setIsOpenPoster,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
