import React, { Children, useContext } from "react";
import { Redirect, useHistory } from "react-router";
import { useCount } from "../context/count";
import { useTheme, themes } from "../context/theme";

function Login({children}) {
  let history = useHistory();
  const { theme, setTheme } = useTheme();
  function trocarTema() {
    if (theme.name === "white") {
      setTheme(themes[0]);
    } else {
      setTheme(themes[1]);
    }
  }

  const { setLogin, setSenha, login, senha } = useCount();

  const functionLogin = () => {
    history.push("/profile");
  };

  return (
    <div
      style={{ background: theme.colors.background, color: theme.colors.text }}
    >
      {children}
      <hr/>
      <input
        placeholder="Escreva seu e-mail"
        onChange={(event) => setLogin(event.target.value)}
      />
      <input
        placeholder="Escreva senha"
        onChange={(event) => setSenha(event.target.value)}
      />
      <button onClick={() => trocarTema()}>Switch</button>
      <button onClick={() => functionLogin()}>Enviar</button>
    </div>
  );
}

export default Login;
