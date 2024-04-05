// import { useContext, useState } from "react";
// import { VariaveisGlobais } from "../context/context";
// import AppRouter from "../approuter/AppRouter";
// import { Link } from "react-router-dom";




export default function ProfilePage() {
  // const { api, setApi, conta, setConta,credito, setCredito,agncia,setAgencia } = useContext(VariaveisGlobais);

  const onClickHandler1= () =>{
    window.location.replace("http://localhost:5173/deposit")
  }
  const onClickHandler2= () =>{
    window.location.replace("http://localhost:5173/withdraw")
  }
  const onClickHandler3= () =>{
    window.location.replace("http://localhost:5173/transfer")
  }
  
  
  return (
    <main>
      <div>
        <button onClick={onClickHandler1} />

      </div>
      <div>
        <button onClick={onClickHandler2} />

      </div>
      <div>
        <button onClick={onClickHandler3} />

      </div>
      
    </main>


  )
}

