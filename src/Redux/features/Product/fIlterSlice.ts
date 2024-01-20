import { createSlice } from '@reduxjs/toolkit';

interface IFiltered {
  status: boolean;
  priceRange: number;
}

const initialState: IFiltered = {
  status: false,
  priceRange: 150,
};
const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setToggle: (state, action) => {
      state.status = !action.payload;
    },
    setPriceRange: (state, action) => {
      state.priceRange = action.payload;
    },
  },
});

export const { setPriceRange, setToggle } = filterSlice.actions;

export default filterSlice.reducer;
