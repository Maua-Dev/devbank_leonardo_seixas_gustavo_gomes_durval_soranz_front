import { useContext } from "react";
import { VariaveisGlobais } from "../context/context";
import HSButton from "../components/HomeScreenButton";
import "./ProfilePage.css";
import InputDeposito from "../components/InputDeposito";

export default function DepositPage() {
  const {
    api,
    nome,
    setNome,
    conta,
    setConta,
    credito,
    setCredito,
    agencia,
    setAgencia,
  } = useContext(VariaveisGlobais);

  return (
    <body>
      <div className="topPage">
        <HSButton />
      </div>
      <div className="infoContainer">
        <ul className="info">
          <li>conta: {conta}</li>
          <li>nome: {nome}</li>
          <li>agencia: {agencia}</li>
          <li>credito: {credito}</li>
        </ul>
      </div>
    </body>
  );
}
