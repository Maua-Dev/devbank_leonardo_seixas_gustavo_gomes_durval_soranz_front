import { useContext } from "react";
import { VariaveisGlobais } from "../context/context";

export default function Header() {
  const { nome, conta, agencia, credito } = useContext(VariaveisGlobais);

  return (
    <header className="topBar">
      <h1 className="logo">DevBank</h1>
      <div className="displayContainer">
        <div className="informaçõesConta">
          <ul style={{ fontFamily: "sans-serif" }}>
            <li>nome: {nome}</li>
            <li>conta: {conta}</li>
            <li>agencia: {agencia}</li>
            <li>credito: {credito}</li>
          </ul>
        </div>
      </div>
      <hr></hr>
    </header>
  );
}
