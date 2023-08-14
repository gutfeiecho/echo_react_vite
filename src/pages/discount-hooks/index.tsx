import styles from "./index.module.css";
import DiscountBox from "./components/DiscountBox";
import { useState } from "react";
const DiscountHooksContainer = () => {
  const [discountId, setDiscountId] = useState("");
  console.log("PARENT UPDATE!");
  return (
    <div className={styles.discount_hooks_container}>
      <DiscountBox setDiscountId={setDiscountId} discountId={discountId} />
    </div>
  );
};

export default DiscountHooksContainer;
