import { useContext, useEffect, useState } from "react";
import { VariaveisGlobais } from "../context/context";
import "./WithdrawPage.css";
import HSButton from "../components/HomeScreenButton";
import axios from "axios";
import Loading from "../components/Loading";

export default function Withdraw_Page() {
  const { api, credito, setCredito, conta, nome, agencia } =
    useContext(VariaveisGlobais);
  const [buffer, setBuffer] = useState<number>(0);
  const [toDisplay, setToDisplay] = useState<number>(0);
  const [choice, setChoice] = useState<number>(5);
  const [loading, setLoading] = useState<boolean>(false);

  const [notas5, setNotas5] = useState<number>(0);
  const [notas10, setNotas10] = useState<number>(0);
  const [notas20, setNotas20] = useState<number>(0);
  const [notas50, setNotas50] = useState<number>(0);
  const [notas100, setNotas100] = useState<number>(0);
  const [notas200, setNotas200] = useState<number>(0);

  useEffect(() => {
    setNotas5(0);
    setNotas10(0);
    setNotas20(0);
    setNotas50(0);
    setNotas100(0);
    setNotas200(0);
  }, [])

  const postDeposit = async () => {
    setLoading(true);
    const response = await axios
      .post(api + "/withdraw", {
        "2": 0,
        "5": notas5,
        "10": notas10,
        "20": notas20,
        "50": notas50,
        "100": notas100,
        "200": notas200,
      })
      .catch(function (error) {
        console.error(error);
      });
    console.log(response);
    setCredito(response?.data.current_balance);
  };

  const onSelectHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setChoice(parseInt(event.target.value));
  };

  const onSubmitHandlerDisplay = () => {
    setToDisplay(toDisplay + buffer * choice);
  };

  const onClickHandlerDisplay = () => {
    switch (choice) {
      case 5:
        setNotas5(notas5 + buffer);
        setToDisplay(toDisplay + buffer * choice);
        break;
      case 10:
        setNotas10(notas10 + buffer);
        setToDisplay(toDisplay + buffer * choice);
        break;
      case 20:
        setNotas20(notas20 + buffer);
        setToDisplay(toDisplay + buffer * choice);
        break;
      case 50:
        setNotas50(notas50 + buffer);
        setToDisplay(toDisplay + buffer * choice);
        break;
      case 100:
        setNotas100(notas100 + buffer);
        setToDisplay(toDisplay + buffer * choice);
        break;
      case 200:
        setNotas200(notas200 + buffer);
        setToDisplay(toDisplay + buffer * choice);
        break;
    }
  };

  const onClickHandlerDeposito = async () => {
    await postDeposit();
  };

  const onClickHandlerClear = () => {
    setToDisplay(0);
  };

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (isNaN(parseInt(event.target.value))) {
      setBuffer(0);
    } else {
      setBuffer(parseInt(event.target.value));
    }
  };

  return (
    <div
      style={{
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <HSButton />
      <main>
        {loading && (
          <p>
            <Loading />
          </p>
        )}
      </main>
      
      <div className="infoContainer">
        <ul className="info">
          <li>conta: {conta}</li>
          <li>nome: {nome}</li>
          <li>agencia: {agencia}</li>
          <li>credito: {credito}</li>
        </ul>
      </div>
      <div
        style={{
          alignContent: "Center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            alignContent: "center",
            display: "flex",
            justifyContent: "center",
            marginTop: "10px",
          }}
        >
          <h1>{`Sacar: R$${toDisplay}`}</h1>
        </div>
        <div>
          <div className="DepositContents">
            <div className="DepositButtons">
              <button onClick={onClickHandlerDisplay}>Adicionar</button>
              <button onClick={onClickHandlerDeposito}>Sacar</button>
              <button onClick={onClickHandlerClear}>Limpar</button>
            </div>
            <div className="DepositParams">
              <label className="SaqueLabel">Quantidade de Notas:</label>
              <input
                type="number"
                className="Sacar"
                onSubmit={onSubmitHandlerDisplay}
                onChange={onChangeHandler}
              />
              <label className="NotasLabel" htmlFor="options">
                Sacar em Notas de:
              </label>
              <select
                className="NotasSelect"
                id="options"
                value={choice}
                onChange={onSelectHandler}
              >
                <option value="5">R$5</option>
                <option value="10">R$10</option>
                <option value="20">R$20</option>
                <option value="50">R$50</option>
                <option value="100">R$100</option>
                <option value="200">R$200</option>
                <p>Selected option: {choice}</p>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
