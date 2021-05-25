import React, { useState } from "react";
import { useTheme, themes } from "../context/theme";
import {} from "./style.css";
import Nav from "../components/nav";
import Aside from "../components/sidebar";
import Footer from "../components/footer";
import { useConteudo } from "../context/conteudo";

function Profile({ children }) {
  const { name, setName } = useConteudo();
  const [rename, setRename] = useState("");

  const { theme, setTheme } = useTheme();
  function trocarTema() {
    if (theme.name === "white") {
      setTheme(themes[0]);
    } else {
      setTheme(themes[1]);
    }
  }
  function changeName() {
    setName(rename);
  }

  return (
    <div className="principal">
      <Nav />
      <div
        className="conteudo"
        style={{
          background: theme.colors.background,
          color: theme.colors.text,
        }}
      >
        <input
          type="text"
          onChange={(event) => setRename(event.target.value)}
        />
        <button onClick={() => changeName()}>Rename</button>
        {children}{" "}
        <p>
          <button onClick={() => trocarTema()}>Switch Theme</button>
        </p>
      </div>
      <Aside />
      <Footer />
    </div>
  );
}

export default Profile;
