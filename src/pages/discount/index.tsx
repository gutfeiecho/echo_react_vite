import { observer, useLocalObservable } from "mobx-react";
import Store from "./store";
import styles from "./index.module.css";
import classNames from "classnames";
const Discount = observer(() => {
  const store = useLocalObservable(() => new Store());
  console.log("store--->", store);

  const { discountId, setDiscountId } = store;
  const handleChooseDiscount = (val: string) => {
    setDiscountId(val);
  };

  const DISCOUNT_LIST = [
    {
      id: "0",
      name: "discount0",
    },
    {
      id: "1",
      name: "discount1",
    },
    {
      id: "2",
      name: "discount2",
    },
    {
      id: "3",
      name: "discount3",
    },
    {
      id: "4",
      name: "discount4",
    },
    {
      id: "5",
      name: "discount5",
    },
    {
      id: "6",
      name: "discount6",
    },
  ];
  return (
    <div className={styles.discount_wrapper}>
      {DISCOUNT_LIST.map((item) => {
        return (
          <div
            key={item?.id}
            className={classNames(
              styles.discount_card,
              item?.id === discountId ? styles.active_discount_card : ""
            )}
            onClick={() => handleChooseDiscount(item?.id)}
          >
            <span>{item?.name}</span>
          </div>
        );
      })}
    </div>
  );
});

export default Discount;
