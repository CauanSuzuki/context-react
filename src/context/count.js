import React, { createContext, useState, useContext } from "react";
const countContext = createContext();

export function CountProvider({ children }) {
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");

  console.log(login, senha)

  return (
    <countContext.Provider
      value={{
        login,
        setLogin,
        senha,
        setSenha,
      }}
    >
      {children}
    </countContext.Provider>
  );
}
export function useCount() {
  const context = useContext(countContext);
  return context
}
