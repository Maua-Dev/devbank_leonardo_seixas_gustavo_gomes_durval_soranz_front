import { createContext, ReactNode, useState } from "react";

type VariaveisGlobaisType = {
  api: string;
  nome: string;
  agencia: string;
  conta: string;
  credito: number;


  setApi: React.Dispatch<React.SetStateAction<string>>;
  setNome: React.Dispatch<React.SetStateAction<string>>;
  setAgencia: React.Dispatch<React.SetStateAction<string>>;
  setConta: React.Dispatch<React.SetStateAction<string>>;
  setCredito: React.Dispatch<React.SetStateAction<number>>;
};

const defaultVariaveisGlobais: VariaveisGlobaisType = {
  api: "",
  nome: "g",
  agencia: "",
  conta: "",
  credito: 0,

  setApi: () => {},
  setNome: () => {},
  setAgencia: () => {},
  setConta: () => {},
  setCredito: () => {},
};

export const VariaveisGlobais = createContext<VariaveisGlobaisType>(
  defaultVariaveisGlobais
);

export const PegarVariaveis = ({ children }: { children: ReactNode }) => {
  const [api, setApi] = useState<string>("");
  const [nome, setNome] = useState<string>("");
  const [agencia, setAgencia] = useState<string>("");
  const [conta, setConta] = useState<string>("");
  const [credito, setCredito] = useState<number>(0);

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
