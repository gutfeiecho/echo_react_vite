import { useState, useEffect } from "react";
const Component = () => {
  const [value, setValue] = useState(0);
  // "a" is an object defined within the Component, which means that on every re-render it will be re-created from scratch.
  const a = { test: 1 };

  console.log("Re-render!!");

  useEffect(() => {
    console.log("Be Triggered!!");
    // "a" will be compared between re-renders
  }, [a]);

  return (
    <>
      <h1>{`计数${value}`}</h1>
      <button onClick={() => setValue(value + 1)}>ADD</button>
    </>
  );
};

export default Component;
