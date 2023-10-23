import { useState, useEffect, useMemo } from "react";
const Component = () => {
  const [value, setValue] = useState(0);
  // const a = { test: 1 };

  const a = useMemo(() => ({ test: 1 }), []);

  console.log("Re-render!!");

  useEffect(() => {
    console.log("Be Triggered!!");
  }, [a]);

  return (
    <>
      <h1>{`计数${value}`}</h1>
      <button onClick={() => setValue(value + 1)}>ADD</button>
    </>
  );
};

export default Component;
