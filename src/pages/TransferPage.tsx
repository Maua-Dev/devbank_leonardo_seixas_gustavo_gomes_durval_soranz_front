import { useContext, useEffect, useState } from "react";
import { VariaveisGlobais } from "../context/context";
import axios from "axios";
import "./TransferPage.css";
import Loading from "../components/Loading";

type Transaction = {
  type: string;
  value: number;
  current_balance: number;
  timestamp: number;
};

export default function TransferPage() {
  const { api } = useContext(VariaveisGlobais);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchTransactions = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${api}/history`);
        setTransactions(response.data.all_transactions);
      } catch (error) {
        console.error("Error fetching transactions:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTransactions();
  }, [api]);

  return (
    <div className="container">
      <h1>Histórico de Transações</h1>
      {loading ? (
        <Loading />
      ) : transactions.length === 0 ? (
        <p>Nenhuma Transação Realizada</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Tipo</th>
              <th>Valor</th>
              <th>Saldo Atual</th>
              <th>Dia e Hora</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, index) => (
              <tr key={index}>
                <td>{transaction.type}</td>
                <td>{transaction.value}</td>
                <td>{transaction.current_balance}</td>
                <td>{new Date(transaction.timestamp).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
