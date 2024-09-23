import productReducer, { addToCart, deleteAll, deleteCart, setSelectedProductId, toogleIsFavorite } from './productSlice'

describe('product reducer logic', () => {
     test('should toogle product reducer', () => { 
        const initialValue = {
            data: [
                { id: 1, isFavorite: false },
                { id: 2, isFavorite: false },
            ],
            selectedProductId: null,
        }

        const newState = productReducer(initialValue, toogleIsFavorite(1));

        expect(newState.data[0].isFavorite).toEqual(true);
        expect(newState.data[1].isFavorite).toEqual(false);
      })

      test('should reducer product addToCard', () => {
        const initialValue = {
            data: [
                {id:1, quantity: 0},
                {id:2, quantity: 1},
            ]
        }
        const newState = productReducer(initialValue, addToCart(1));
        expect(newState.data[0].quantity).toEqual(1);
        expect(newState.data[1].quantity).toEqual(1);
      })

      test('should reducer product deleteCard', () => {
        const initialValue ={
            data: [
                {id:1, quantity: 1},
                {id:2, quantity: 2}
            ]
        }

        const newState = productReducer(initialValue, deleteCart(1));
        expect(newState.data[0].quantity).toEqual(0);
        expect(newState.data[1].quantity).toEqual(2);
      })
      
      test('should reducer product deleteAll' , () => {
        const initialValue = {
            data: [
                {id:1, quantity: 12},
                {id:2, quantity: 22}

            ]
        }
        const newState = productReducer(initialValue, deleteAll());
        expect(newState.data[0].quantity).toEqual(0);
        expect(newState.data[1].quantity).toEqual(0);
      })

      test('should reducer product setSelectedProductId', () => {
        const initialValue = {
            selectedProductId: null,
        }
        const newState = productReducer(initialValue, setSelectedProductId(1));
        expect(newState.selectedProductId).toEqual(1);
      })
})