import { useContext, useState } from "react";
import "./App.css";
import { PegarVariaveis, VariaveisGlobais } from "./context/context";
import Button from "./components/Button";
import HomePage from "./pages/HomePage";

function App() {
  const { api, setApi } = useContext(VariaveisGlobais);

  const OnClickHandler = () => {
    setApi("hello");
  };

  return (
    <PegarVariaveis>
      <HomePage />
    </PegarVariaveis>
  );
}

export default App;
