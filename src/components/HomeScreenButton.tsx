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
    </h1>
  );
}
