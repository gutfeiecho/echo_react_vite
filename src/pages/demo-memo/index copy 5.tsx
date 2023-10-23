import React, { useState, useCallback } from "react";
const Item = ({
  handleChangeValue,
  value,
}: {
  handleChangeValue: (val: number) => void;
  value: number;
}) => {
  console.log("Item Execution!!");
  return (
    <div>
      <button onClick={() => handleChangeValue(value)}>ITEM ADD</button>
    </div>
  );
};

const Page = ({
  handleChangeValue,
  value,
}: {
  handleChangeValue: (val: number) => void;
  value: number;
}) => <Item handleChangeValue={handleChangeValue} value={value} />;

const PageMemoized = React.memo(Page);
const Component = () => {
  const [value, setValue] = useState(0);
  // Error, value is always 1
  const handleChangeValue = useCallback((val: number) => {
    setValue(val + 1);
  }, []);
  return (
    <div>
      <h1>{`计数: ${value}`}</h1>
      <button onClick={() => setValue(value + 1)}>ADD</button>
      <br />
      <br />
      <PageMemoized handleChangeValue={handleChangeValue} value={value} />
    </div>
  );
};

export default Component;
