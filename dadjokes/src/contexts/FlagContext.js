import React, { useState, createContext, useEffect } from "react";

export const FlagContext = createContext();

export const FlagProvider = props => {
  const [flag, setFlag] = useState("");

  useEffect(() => {
    setFlag(false);
  }, []);

  return (
    <FlagContext.Provider value={[flag, setFlag]}>
      {props.children}
    </FlagContext.Provider>
  );
};
