import { useState } from "react";
import styles from "./index.module.less";

const SlowComponent1 = () => {
  console.log("1 Re-render!!");
  return <div style={{ height: "400px" }}>Slow Component 1</div>;
};

const SlowComponent2 = () => {
  console.log("2 Re-render!!");
  return <div>Slow Component 2</div>;
};

const PropsChildrenContainer = () => {
  const [value, setValue] = useState({});
  return (
    <div
      onScroll={(e) => setValue(e)}
      className={styles.props_children_container}
    >
      <SlowComponent1 />
      <SlowComponent2 />
    </div>
  );
};

export default PropsChildrenContainer;
