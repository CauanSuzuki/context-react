import React from "react";
import Profile from "../pages/profile";
import { useConteudo } from "../context/conteudo";

function Aside() {
  const { name, setName } = useConteudo();
  return (
    <div className="asideBar">
      <div>{name}</div>
    </div>
  );
}
export default Aside;
