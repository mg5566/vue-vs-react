import { useEffect, useState } from "react";

function App() {
  const container = {
    display: "flex",
    flexDirection: "column" as const,
  };

  const [firstInput, setFirstInput] = useState(1);
  const [secondInput, setSecondInput] = useState(1);
  const [thirdInput, setThirdInput] = useState(1);

  const [sum, setSum] = useState(0);

  // sum 계산
  useEffect(() => {
    setSum(firstInput + secondInput + thirdInput);
  }, [firstInput, secondInput, thirdInput]);

  return (
    <div style={container}>
      <input
        name="firstInput"
        type="number"
        value={firstInput}
        onChange={(e) => setFirstInput(Number(e.target.value))}
      />
      <input
        name="secondInput"
        type="number"
        value={secondInput}
        onChange={(e) => setSecondInput(Number(e.target.value))}
      />
      <input
        name="thirdInput"
        type="number"
        value={thirdInput}
        onChange={(e) => setThirdInput(Number(e.target.value))}
      />
      <div>Sum: {sum}</div>
    </div>
  );
}

export default App;
