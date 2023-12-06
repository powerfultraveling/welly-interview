import { useState, useMemo } from "react";

interface ButtonProps {
  label: string;
  disabled?: boolean;
  onClick: () => void;
}

function Button({ label, disabled, onClick }: ButtonProps) {
  return (
    <button onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
}

function Counter() {
  const [count, setCount] = useState(0);

  const isNotAbleToMinus = useMemo(() => {
    return count === 0;
  }, [count]);

  function minus() {
    if (isNotAbleToMinus) {
      return;
    }

    setCount(count - 1);
  }

  function add() {
    setCount(count + 1);
  }

  return (
    <div className="d-flex">
      <Button label="minus" onClick={minus} disabled={isNotAbleToMinus} />
      <div>{count}</div>
      <Button label="add" onClick={add} />
    </div>
  );
}

export default Counter;
