import { useContext, useEffect, useState } from "react";
import { VariaveisGlobais } from "../context/context";
import axios from "../../node_modules/axios";
import HSButton from "../components/HomeScreenButton";
import { useNavigate } from "react-router-dom";

export default function ProfilePage() {
  const { api, setNome, setConta, setCredito, setAgencia, credito } =
    useContext(VariaveisGlobais);

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  const navigate = useNavigate();

  console.log(`api = ${api}`);

  const resquestApi = async () => {
    setIsLoading(true);
    const response = await axios
      .get(api)
      .then((response) => {
        // setConta(response.data.account);
        setCredito(response.data.id);
        // setAgencia(response.data.aggency);
        // setNome(response.data.nome);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
    console.log(`credito=${credito}`);
  };

  useEffect(() => {
    resquestApi();
  }, []);

  const onClickHandler1 = () => {
    navigate("/deposit");
  };
  const onClickHandler2 = () => {
    navigate("/withdraw");
  };
  const onClickHandler3 = () => {
    navigate("/transfer");
  };

  return (
    <body>
      <HSButton />
      <div>
        <button onClick={onClickHandler1} />
      </div>
      <div>
        <button onClick={onClickHandler2} />
      </div>
      <div>
        <button onClick={onClickHandler3} />
      </div>
    </body>
  );
}
