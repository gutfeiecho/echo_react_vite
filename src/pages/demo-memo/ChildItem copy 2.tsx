import { forwardRef } from "react";

type PropsType = {
  label: string;
};
const ChildItem = forwardRef<HTMLInputElement, PropsType>((props, ref) => {
  const { label } = props;
  return (
    <div>
      {label}
      <input ref={ref} />
    </div>
  );
});

export default ChildItem;
