import { IProduct } from '@/types/globalTypes';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface ICart {
  cart: IProduct[];
  total: number;
}

const initialState: ICart = {
  cart: [],
  total: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<IProduct>) => {
      const existingProduct = state.cart.find(
        (data) => data._id === action.payload._id
      );
      if (existingProduct) {
        existingProduct.quantity = existingProduct.quantity! += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
      state.total += action.payload.price;
    },
    removeFromCart: (state, action: PayloadAction<IProduct>) => {
      state.cart = state.cart.filter((data) => data._id !== action.payload._id);
      state.total -= action.payload.price * action.payload.quantity!;
    },
    removeSingleProduct: (state, action: PayloadAction<IProduct>) => {
      const existingProduct = state.cart.find(
        (data) => data._id === action.payload._id
      );
      if (existingProduct && existingProduct.quantity! > 1) {
        existingProduct.quantity! = existingProduct.quantity! -= 1;
        state.total -= action.payload.price;
      }
    },
  },
});

export const { addToCart, removeFromCart, removeSingleProduct } =
  cartSlice.actions;

export default cartSlice.reducer;
