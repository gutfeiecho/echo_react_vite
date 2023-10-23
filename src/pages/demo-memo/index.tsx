import { useRef } from "react";
import ChildItem from "./ChildItem";

const Component = () => {
  const childRef = useRef(null);
  const handleChangeChildProps = () => {
    if (childRef?.current) console.log("CHILDREF", childRef);
    childRef.current.setValueOfChild(childRef.current.valueOfChild + 1);
  };
  return (
    <div>
      <button onClick={handleChangeChildProps}>ADD</button>
      <br />
      {/* Maybe Property 'ref' does not exist on type 'IntrinsicAttributes' */}
      <ChildItem ref={childRef} />
    </div>
  );
};

export default Component;
