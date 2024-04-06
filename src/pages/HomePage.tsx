import { useContext, useState } from "react";
import { VariaveisGlobais } from "../context/context";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";
import HSButton from "../components/HomeScreenButton";

export default function HomePage() {
  const { api, setApi } = useContext(VariaveisGlobais);
  const [buffer, setBuffer] = useState("");
  const [mensagemErro, setMensagemErro] = useState("");

  const navigate = useNavigate();

  const onClickHandler = () => {
    console.log(`Buffer = ${buffer}`);
    if (buffer.startsWith("https://")) {
      setApi(buffer);
      setMensagemErro("");
      console.log(`api=${api}`);
      navigate("/options");
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
      <HSButton />
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
