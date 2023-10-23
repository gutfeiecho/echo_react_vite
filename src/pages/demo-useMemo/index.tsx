import { useState, useMemo } from "react";

const CountriesList = () => {
  console.log("Re-render!!!");
  return <div>countries list, always re-renders</div>;
};

const UseMemoContainer = () => {
  const [counter, setCounter] = useState<number>(1);
  const list = useMemo(() => {
    return <CountriesList />;
  }, []);
  return (
    <>
      <h1>Country settings</h1>
      <h3>{counter}</h3>
      <button onClick={() => setCounter(counter + 1)}>
        Click here to re-render Countries list.
      </button>
      {list}
    </>
  );
};

export default UseMemoContainer;
