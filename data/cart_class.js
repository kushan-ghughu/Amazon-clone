import { deliveryOptions } from "./deliveryOptions.js";

class Cart{
    cartItems =  undefined; //class level variable ,it has no data type.

    localStorageKey = undefined;

    //constractor
    constructor(localStorageKey){
        this.localStorage=  localStorageKey;
    }

    //methods
    loadFromStorage() {
      this.cartItems = JSON.parse(localStorage.getItem("localStorageKey"));
      if (!this.cartItems) {
        this.cartItems = [
          {
            productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
            quantity: 2,
            deliveryOptionId: "1",
          },
          {
            productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
            quantity: 1,
            deliveryOptionId: "2",
          },
        ];
      }
    };

     //use local storage to save our cart data
    saveToStorage() {
      localStorage.setItem("localStorageKey", JSON.stringify(this.cartItems));
    };

    addToCart(productId) {
      let matchingItem;
      this.cartItems.forEach((item) => {
        if (productId == item.productId) {
          matchingItem = item;
        }
      });

      if (matchingItem) {
        matchingItem.quantity += 1;
      } else {
        this.cartItems.push({
          productId: productId,
          quantity: 1,
          deliveryOptionsId: "1",
        });
      }
      this.saveToStorage();
    };

    removeFromCart(productId) {
      const newCart = [];
      this.cartItems.forEach((cartItem) => {
        if (cartItem.productId !== productId) {
          newCart.push(cartItem);
        }
      });
      this.cartItems = newCart;
      this.saveToStorage();
    };

    updateDeliveryOptions(productId, deliveryOptionsId) {
      let matchingItem;
      this.cartItems.forEach((item) => {
        if (productId == item.productId) {
          matchingItem = item;
        }
      });
      matchingItem.deliveryOptionsId = deliveryOptionsId;
      this.saveToStorage();
    };

};


// function Cart(localStorageKey) {
//   const cart = {
//     //get the cart from localstorage
    


//   return cart;
// };

//crerae object 
const amazonNormalCart = new Cart('cart-oops'); //reference variable/ object name/instanse of a class
const BusinessCart = new Cart('cart-business');

// amazonNormalCart.localStorage= 'cart-oops';
// BusinessCart.localStorage = 'cart-business';



console.log(amazonNormalCart);
console.log(BusinessCart);


