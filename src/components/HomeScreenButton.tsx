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
          src="src/components/gifs_img/Fw3P.gif"
          width="200"
          height="200"
          alt="Coin Spinning Coin GIF - Coin Spinning Coin Money GIFs"
        />
      </div>
    </h1>
  );
}
