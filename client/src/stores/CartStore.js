import { computed, decorate, observable } from "mobx";
import instance from "./instance";

class CartStore {
  items = [];

  addItem = async (newItem) => {
    const foundItem = this.items.find(
      (item) => item.productId === newItem.productId
    );
    if (foundItem) {
      foundItem.quantity += newItem.quantity;
    } else {
      this.items.push(newItem);
    }
    console.log(this.items);
  };

  removeItemFromCart = async (itemId) => {
    this.items = this.items.filter((item) => item.productId !== itemId);
  };

  checkoutCart = async () => {
    try {
      const res = await instance.post("/checkout", this.items);
      console.log("CartStore -> checkoutCart -> res", res.data);
      this.items = [];
      alert("Checkiiiiing ouuuuuuut");
    } catch (error) {
      console.log("CartStore -> checkoutCart -> error", error);
    }
  };

  get totalQuantity() {
    let total = 0;
    this.items.forEach((item) => (total += item.quantity));
    return total;
  }
}

decorate(CartStore, {
  items: observable,
  totalQuantity: computed,
});

const cartStore = new CartStore();

export default cartStore;
