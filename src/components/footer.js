import React from "react";
import Profile from "../pages/profile";
import { useConteudo } from "../context/conteudo";

function Footer() {
  const { name, setName } = useConteudo();
  return (
    <div className="footer">
      <div>{name}</div>
    </div>
  );
}
export default Footer;
