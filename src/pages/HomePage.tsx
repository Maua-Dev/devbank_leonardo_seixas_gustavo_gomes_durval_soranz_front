import { useContext, useEffect, useSyncExternalStore, useState } from "react";
import { VariaveisGlobais } from "../context/context";

export default function HomePage() {
  const { api, setApi } = useContext(VariaveisGlobais);
  const [buffer, setBuffer] = useState("");
  const [mensagemErro, setMensagemErro] = useState("");

  const onClickHandler = () => {
    console.log(`Buffer = ${buffer}`);
    if (buffer.startsWith("https://")) {
      setApi(buffer);
      setMensagemErro("");
    } else {
      setMensagemErro("URL Inválido");
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
