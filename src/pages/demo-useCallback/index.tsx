import { useState, useEffect, useCallback } from "react";
const Component = () => {
  const [value, setValue] = useState(0);
  // const a = { test: 1 };

  const fetch = useCallback(() => {
    console.log("Fetch Something!!");
  }, []);

  console.log("Re-render!!");

  useEffect(() => {
    // this will be triggered only when "fetch" value actually changes
    fetch();
  }, [fetch]);

  return (
    <>
      <h1>{`计数${value}`}</h1>
      <button onClick={() => setValue(value + 1)}>ADD</button>
    </>
  );
};

export default Component;
