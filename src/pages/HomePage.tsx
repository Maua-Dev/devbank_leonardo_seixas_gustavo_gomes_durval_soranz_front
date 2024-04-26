import { useContext, useState } from "react";
import { VariaveisGlobais } from "../context/context";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";
import HSButton from "../components/HomeScreenButton";

export default function HomePage() {
  const { setApi } = useContext(VariaveisGlobais);
  const [buffer, setBuffer] = useState("https://r2tcz6zsokynb72jb6o4ffd5nm0ryfyz.lambda-url.us-west-2.on.aws");
  const [mensagemErro, setMensagemErro] = useState("");

  const navigate = useNavigate();

  const onClickHandler = () => {
    console.log(`Buffer = ${buffer}`);
    if (buffer.startsWith("https://")) {
      setApi(buffer);
      setMensagemErro("");
      // console.log(`api=${api}`);
      navigate("/options");
    } else {
      setMensagemErro("URL Inválido");
      setBuffer("");
    }
  };

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBuffer(event.target.value);
    // console.log(buffer);
  };

  return (
    <body
      style={{ alignItems: "center", flexDirection: "column", display: "flex" }}
    >
      <HSButton />
      <div className="container">
        <input
          type="text"
          placeholder="Digite o API: "
          value={"https://r2tcz6zsokynb72jb6o4ffd5nm0ryfyz.lambda-url.us-west-2.on.aws"}
          onChange={onChangeHandler}
        />
        <button onClick={onClickHandler}>
          Enviar
          <img
            className="share"
            decoding="async"
            width="20"
            height="20"
            src="src/components/gifs_img/share.png"
          ></img>
        </button>
        <div style={{ color: "red" }}>{mensagemErro}</div>
      </div>
    </body>
  );
}
