import { useState, forwardRef, useImperativeHandle } from "react";
const ChildItem = forwardRef((props, ref) => {
  const [valueOfChild, setValueOfChild] = useState(0);
  useImperativeHandle(
    ref,
    () => {
      //   console.log("useImperativeHandle triggered!!");
      return {
        valueOfChild,
        setValueOfChild,
      };
    },
    [valueOfChild]
  );
  return (
    <div>
      <h3>{`子组件计数: ${valueOfChild}`}</h3>
    </div>
  );
});

export default ChildItem;
