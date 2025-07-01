import { addToCart,loadFromStorage,cart} from "../../data/cart.js";

describe('test suite: Add to cart ',()=>{
    it('add an existing product to the array',()=>{
        spyOn(localStorage,'setItem');
        //it work when the entire array is empty
        spyOn(localStorage,'getItem').and.callFake(()=>{
            return JSON.stringify( [
                {
                productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
                quantity: 2,
                deliveryOptionId: '1'
              } ]
            );

        }); // for mocking or duplicate a function, mock of the code

        loadFromStorage();

        addToCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');

        expect(cart.length).toEqual(1);
        expect(localStorage.setItem).toHaveBeenCalledTimes(1);
        expect(cart[0].productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
        expect(cart[0].quantity).toEqual(3);
        
    });

     it('adds a new product to the array',()=>{

        spyOn(localStorage,'setItem');
        //it work when the entire array is empty
        spyOn(localStorage,'getItem').and.callFake(()=>{
            return JSON.stringify([]);

        }); // for mocking or duplicate a function, mock of the code

        loadFromStorage();
        addToCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');

        expect(cart.length).toEqual(1);
        expect(localStorage.setItem).toHaveBeenCalledTimes(1);
        expect(cart[0].productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
        expect(cart[0].quantity).toEqual(1);
    });


});