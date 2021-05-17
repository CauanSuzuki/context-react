import React, { useState } from "react";

function Home() {
  const [name, setName] = useState("");
  const [lista, setLista] = useState([]);
  const funcaoAdicionar = () => {
    setLista([...lista, { id: Math.random(), name: name, riscado: false }]);
  };
  const funcaoDeletar = (id) => {
    setLista(lista.filter((value, index) => value.id !== id));
  };
  const funcaoAlterar = (id) => {
    setLista(
      lista.map((value, index) =>
        value.id === id ? { id: value.id, name: name } : value
      )
    );
  };
  const funcaoRiscar = (id) => {
    setLista(
      lista.map((item) => {
        if (item.id === id) {
          return {
            id: item.id,
            name: item.name,
            riscado: !item.riscado,
          };
        }
        return item;
      })
    );
  };
  return (
    <div>
      <input type="text" onChange={(event) => setName(event.target.value)} />
      <button onClick={funcaoAdicionar}>Adicionar</button>

      <ul>
        {lista.map((item) => {
          return (
            <li
              style={{
                textDecoration: item.riscado === true ? "line-through" : "none",
              }}
            >
              {item.name}
              <button onClick={() => funcaoDeletar(item.id)}>Remover</button>
              <button onClick={() => funcaoAlterar(item.id)}>Alterar</button>
              <button onClick={() => funcaoRiscar(item.id)}>Riscar</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Home;
