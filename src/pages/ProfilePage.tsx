import { useContext, useEffect, useState } from "react";
import { VariaveisGlobais } from "../context/context";
import axios from "../../node_modules/axios";
import HSButton from "../components/HomeScreenButton";
import { useNavigate } from "react-router-dom";
import "./ProfilePage.css";
import Loading from "../components/Loading";

export default function ProfilePage() {
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

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const navigate = useNavigate();

  const resquestApi = async () => {
    setIsLoading(true);
    const response = await axios
      .get(api)
      .then((response) => {
        setConta(response.data.account);
        setCredito(response.data.credito);
        setAgencia(response.data.aggency);
        setNome(response.data.nome);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
        console.log({ error });
      })
      .finally(() => {
        setIsLoading(false);
      });
    // console.log(`credito=${credito}`);
  };

  useEffect(() => {
    resquestApi();
  }, []);

  const redirectDeposit = () => {
    navigate("/deposit");
  };
  const redirectWithdraw = () => {
    navigate("/withdraw");
  };
  const redirectTransfer = () => {
    navigate("/transfer");
  };

  return (
    <body>
      <div className="topPage">
        <HSButton />
        <div className="infoContainer">
          <ul className="info">
            <li>conta: {conta}</li>
            <li>nome: {nome}</li>
            <li>agencia: {agencia}</li>
            <li>credito: {credito}</li>
          </ul>
        </div>
      </div>

      <main>
        {isLoading && (
          <p>
            <Loading />
          </p>
        )}
      </main>
      <div className="containerOp">
        <div className="op">
          <button className="opButton" onClick={redirectDeposit}>
            Depositar
          </button>
          <img
            decoding="async"
            width="300"
            height="300"
            src="src/components/gifs_img/piggy-bank-300x300.gif"
          ></img>
        </div>
        <div className="op">
          <button className="opButton" onClick={redirectWithdraw}>
            Sacar
          </button>
          <img
            decoding="async"
            width="300"
            height="300"
            src="/src/components/gifs_img/withdrawal_5307204.png"
          ></img>
        </div>
        <div className="op">
          <button className="opButton" onClick={redirectTransfer}>
            Transferir
          </button>
          <img
            decoding="async"
            width="300"
            height="300"
            src="/src/components/gifs_img/transfer.gif"
          ></img>
        </div>
      </div>
    </body>
  );
}
