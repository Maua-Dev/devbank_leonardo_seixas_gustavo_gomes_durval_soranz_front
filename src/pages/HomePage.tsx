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

    console.log(api);
  };

  const onChangeHandler = (event) => {
    setBuffer(event.target.value);
    console.log(buffer);
  };

  return (
    <main>
      <input
        type="text"
        placeholder="Enter API"
        onChange={onChangeHandler}
      ></input>
      <button onClick={onClickHandler} />
      <div style={{ color: "red" }}>{mensagemErro}</div>
    </main>
  );
}
