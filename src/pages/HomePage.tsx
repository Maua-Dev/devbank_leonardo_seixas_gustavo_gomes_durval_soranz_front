import { useContext, useState } from "react";
import { VariaveisGlobais } from "../context/context";
import Header from "../components/Header";
// import AppRouter from "../approuter/AppRouter";
// import { Link } from "react-router-dom";
import "./HomePage.css";
import Extract from "../components/Extract";
import axios from "axios";

export default function HomePage() {
  const { api, setApi } = useContext(VariaveisGlobais);
  const [buffer, setBuffer] = useState("");
  const [mensagemErro, setMensagemErro] = useState("");

  const Extract = () => {
    console.log(`api=${api}`);
    axios
      .get(api)
      .then((response) => {
        console.log(response.headers);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onClickHandler = () => {
    console.log(`Buffer = ${buffer}`);
    if (buffer.startsWith("https://")) {
      setApi(buffer);
      setMensagemErro("");
      window.location.replace("http://localhost:5173/options");
      Extract();
    } else {
      setMensagemErro("URL Inválido");
      setBuffer("");
    }
    console.log(api);
  };

  const onChangeHandler = (event) => {
    setBuffer(event.target.value);
    console.log(buffer);
  };

  return (
    <body>
      <Header />
      <div className="gif">
        <img
          src="https://media1.tenor.com/m/NpEqS-yMyLIAAAAd/coin-spinning-coin.gif"
          width="300"
          height="300"
          alt="Coin Spinning Coin GIF - Coin Spinning Coin Money GIFs"
        />
      </div>
      <div className="container">
        <input
          type="text"
          placeholder="link do API"
          onChange={onChangeHandler}
        />
        <button onClick={onClickHandler}>Enviar</button>
        <div style={{ color: "red" }}>{mensagemErro}</div>
      </div>
    </body>
  );
}
