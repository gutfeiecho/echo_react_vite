import { makeAutoObservable } from "mobx";

// Model the application state
class Store {
  discountId = "-1";

  constructor() {
    makeAutoObservable(this);
  }

  // Need to use arrow functions to get context(this)
  setDiscountId = (val: string) => {
    this.discountId = val;
  };
}

export default Store;
