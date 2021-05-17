import React, { createContext, useState, useContext } from "react";
const conteudoContext = createContext();

export function ConteudoProvider({ children }) {
  const [name, setName] = useState("");
  console.log(name)

  return (
    <conteudoContext.Provider
      value={{
        name,
        setName,
      }}
    >
      {children}
      
    </conteudoContext.Provider>
  );
}
export function useConteudo() {
  const context = useContext(conteudoContext);
  return context;
}
