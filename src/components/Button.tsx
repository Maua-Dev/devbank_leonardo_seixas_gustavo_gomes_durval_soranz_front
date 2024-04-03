import Provide from "./Provide";

export default function Button() {
  const onClickHandler = (event) => {
    Provide();
  };

  return <button onClick={onClickHandler}> ClickMe </button>;
}
