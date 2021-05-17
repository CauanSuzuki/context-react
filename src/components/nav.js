import React from "react";
import {useConteudo}from "../context/conteudo"

function Nav() {
  const{name,setName}=useConteudo()
  return (
    <div className="nav">
      <div >{name}</div>
    </div>
  );
}
export default Nav;



  