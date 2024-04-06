import { useContext, useState } from "react";
import { VariaveisGlobais } from "../context/context";
import AppRouter from "../approuter/AppRouter";
import { Link } from "react-router-dom";

export default function HomePage() {
  const { api, setApi } = useContext(VariaveisGlobais);
  const [buffer, setBuffer] = useState("");
  const [mensagemErro, setMensagemErro] = useState("");

  const onClickHandler = () => {
    console.log(`Buffer = ${buffer}`);
    if (buffer.startsWith("https://")) {
      setApi(buffer);
      setMensagemErro("");
      window.location.replace("http://localhost:5173/options");
    } else {
      setMensagemErro("URL Inválido");
      setBuffer("");
    }
  };

  const onChangeHandler = (event) => {
    setBuffer(event.target.value);
    console.log(buffer);
  };

  return (
    <body>
      {/* <Header /> */}
      <h1 className="displayLogo">DevBank</h1>
      <div className="gif">
        <img
          src="https://media1.tenor.com/m/NpEqS-yMyLIAAAAd/coin-spinning-coin.gif"
          width="300"
          height="300"
          alt="Coin Spinning Coin GIF - Coin Spinning Coin Money GIFs"
        />
      </div>
      <div className="container">
        <input type="text" placeholder="Enter API" onChange={onChangeHandler} />
        <button onClick={onClickHandler}>Enviar</button>
        <div style={{ color: "red" }}>{mensagemErro}</div>
      </div>
    </body>
  );
}
