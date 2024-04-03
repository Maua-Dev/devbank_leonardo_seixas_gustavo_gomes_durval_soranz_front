import { useContext, useState } from "react";
import "./App.css";
import { MyContext } from "./context/context";
import Button from "./components/Button";

function App() {
  const [api, setApi] = useState<string>("");

  const onChangeHandler = (event) => {
    setApi(event?.target.value);
  };

  return (
    <>
      <h1>🚀 Vite React Template 🚀</h1>
      <div className="card">
        <input onChange={onChangeHandler} />
        <Button />
      </div>
    </>
  );
}

export default App;
