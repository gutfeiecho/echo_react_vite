import { useState } from "react";
import styles from "./index.module.less";

type ComponentWithScrollProps = {
  left: React.ReactNode;
  right: React.ReactNode;
};
const ComponentWithScroll = (props: ComponentWithScrollProps) => {
  const { left, right } = props;
  const [value, setValue] = useState({});

  return (
    <div
      onScroll={(e) => setValue(e)}
      className={styles.props_children_container}
    >
      {left}
      {right}
    </div>
  );
};
const SlowComponent1 = () => {
  console.log("1 Re-render!!");
  return <div style={{ height: "400px" }}>Slow Component 1</div>;
};

const SlowComponent2 = () => {
  console.log("2 Re-render!!");
  return <div>Slow Component 2</div>;
};

const PropsChildrenContainer = () => {
  return (
    <ComponentWithScroll left={<SlowComponent1 />} right={<SlowComponent2 />} />
  );
};

export default PropsChildrenContainer;
