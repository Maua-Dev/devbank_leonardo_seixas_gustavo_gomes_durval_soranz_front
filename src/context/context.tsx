import { createContext, useState } from "react";

type VariaveisGlobaisType = {
  api: string;
  nome: string;
  agencia: string;
  conta: string;
  credito: number;

  setApi: React.Dispatch<React.SetStateAction<string>>;
  setNome: React.Dispatch<React.SetStateAction<string>>;
  setAngencia: React.Dispatch<React.SetStateAction<string>>;
  setConta: React.Dispatch<React.SetStateAction<string>>;
  setCredito: React.Dispatch<React.SetStateAction<number>>;
};

export const VariaveisGlobais = createContext("");

export const PegarVariaveis = ({ children }) => {
  const [api, setApi] = useState();
  const [nome, setNome] = useState();
  const [agencia, setAgencia] = useState();
  const [conta, setConta] = useState();
  const [credito, setCredito] = useState();

  return (
    <VariaveisGlobais.Provider
      value={{
        api,
        setApi,
        nome,
        setNome,
        agencia,
        setAgencia,
        conta,
        setConta,
        credito,
        setCredito,
      }}
    >
      {children}
    </VariaveisGlobais.Provider>
  );
};
