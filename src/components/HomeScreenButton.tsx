import { useNavigate } from "react-router-dom";

export default function HSButton() {
  const navigate = useNavigate();

  const onClickHandler = () => {
    navigate("/");
  };

  return (
    <h1 className="displayLogo">
      <button className="Logo" onClick={onClickHandler}>
        DevBank
      </button>
      <div className="gif">
        <img
          src="https://media1.tenor.com/m/NpEqS-yMyLIAAAAd/coin-spinning-coin.gif"
          width="300"
          height="300"
          alt="Coin Spinning Coin GIF - Coin Spinning Coin Money GIFs"
        />
      </div>
    </h1>
  );
}
