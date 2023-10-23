import React, { useState, useCallback } from "react";
const Item = ({ onClick }: { onClick: () => void }) => {
  console.log("Item Execution!!");
  return <div onClick={onClick}>Item</div>;
};

const Page = ({ onClick }: { onClick: () => void }) => (
  <Item onClick={onClick} />
);

const PageMemoized = React.memo(Page);
const Component = () => {
  const [value, setValue] = useState(0);
  const onClick = useCallback(() => {
    console.log("Do something on click!");
  }, []);
  return (
    <div>
      <h1>{`计数: ${value}`}</h1>
      <button onClick={() => setValue(value + 1)}>ADD</button>
      <br />
      <br />
      <PageMemoized onClick={onClick} />
    </div>
  );
};

export default Component;
