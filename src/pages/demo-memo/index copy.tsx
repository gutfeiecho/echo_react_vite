import { useState } from "react";
const Item = () => {
  console.log("Item Execution!!");
  return <div>Item</div>;
};

const Page = () => <Item />;
const Component = () => {
  const [value, setValue] = useState(0);
  return (
    <div>
      <h1>{`计数: ${value}`}</h1>
      <button onClick={() => setValue(value + 1)}>ADD</button>
      <br />
      <Page />
    </div>
  );
};

export default Component;
