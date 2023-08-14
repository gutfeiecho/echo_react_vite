import styles from "./index.module.less";
// import DiscountCard from "./DiscountCard";
import { useState, useEffect } from "react";
import classNames from "classnames";
import { Tabs } from "antd";
import { TabsProps } from "antd";
import { IDiscountItem } from "./types";

const DiscountHooks = (props: any) => {
  const { setDiscountId, discountId } = props;
  const [title, setTitle] = useState("");
  const [tab, setTab] = useState("1");

  const handleChooseDiscount = (item: IDiscountItem) => {
    setDiscountId(item.id);
    setTitle(item.name);
  };

  const onChangeTab = (key: string) => {
    setTab(key);
  };

  const EQUITY_LIST = [
    {
      id: "7",
      name: "equity0",
    },
    {
      id: "8",
      name: "equity1",
    },
    {
      id: "9",
      name: "equity2",
    },
    {
      id: "10",
      name: "equity3",
    },
    {
      id: "11",
      name: "equity4",
    },
    {
      id: "12",
      name: "equity5",
    },
    {
      id: "13",
      name: "equity6",
    },
  ];

  const COUPON_LIST = [
    {
      id: "0",
      name: "coupon0",
    },
    {
      id: "1",
      name: "coupon1",
    },
    {
      id: "2",
      name: "coupon2",
    },
    {
      id: "3",
      name: "coupon3",
    },
    {
      id: "4",
      name: "coupon4",
    },
    {
      id: "5",
      name: "coupon5",
    },
    {
      id: "6",
      name: "coupon6",
    },
  ];

  const DiscountCard = (props: any) => {
    useEffect(() => {
      console.log("DISCOUNT MOUNTS!");
    }, []);
    console.log("DISCOUNT UPDATE!");
    const { discountItem, discountId } = props;
    return (
      <div
        key={discountItem?.id}
        className={classNames(
          styles.discount_card,
          discountItem?.id === discountId ? styles.active_discount_card : ""
        )}
        onClick={() => handleChooseDiscount(discountItem)}
      >
        <span>{discountItem?.name}</span>
      </div>
    );
  };

  const DiscountListBox = () => {
    return (
      <div className={styles.discount_list_box}>
        {COUPON_LIST.map((item) => {
          return (
            <DiscountCard
              key={item.id}
              discountItem={item}
              discountId={discountId}
            />
          );
        })}
      </div>
    );
  };

  const CouponListBox = () => {
    return (
      <div className={styles.coupon_list_box}>
        {EQUITY_LIST.map((item) => {
          return (
            <DiscountCard
              key={item.id}
              discountItem={item}
              discountId={discountId}
            />
          );
        })}
      </div>
    );
  };

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "优惠券",
      children: <DiscountListBox />,
    },
    {
      key: "2",
      label: "权益卡",
      children: <CouponListBox />,
    },
  ];

  return (
    <div className={styles.discount_wrapper}>
      {title ? <h1>{`您选择了${title}`}</h1> : <h1>您没选择优惠券/权益卡</h1>}
      <Tabs defaultActiveKey={tab} items={items} onChange={onChangeTab} />
    </div>
  );
};

export default DiscountHooks;
