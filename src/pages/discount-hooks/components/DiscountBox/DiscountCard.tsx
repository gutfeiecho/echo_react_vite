import styles from "./index.module.css";
import classNames from "classnames";
const DiscountCard = (props: any) => {
  console.log("DISCOUNT UPDATE!");
  const { discountItem, handleChooseDiscount, discountId } = props;
  return (
    <div
      key={discountItem?.id}
      className={classNames(
        styles.discount_card,
        discountItem?.id === discountId ? styles.active_discount_card : ""
      )}
      onClick={() => handleChooseDiscount(discountItem?.id)}
    >
      <span>{discountItem?.name}</span>
    </div>
  );
};

export default DiscountCard;
