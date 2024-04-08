import { useContext, useState } from "react";
import { VariaveisGlobais } from "../context/context";
import axios from "../../node_modules/axios";

export default function Extract() {
  const [isLoading, setIsLoading] = useState(Boolean);
  const [isError, setIsError] = useState(Boolean);
  const {
    api,
    nome,
    setNome,
    conta,
    setConta,
    agencia,
    setAgencia,
    credito,
    setCredito,
  } = useContext(VariaveisGlobais);

  const getRequest = () => {
    axios
      .get(api)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return getRequest();
}
