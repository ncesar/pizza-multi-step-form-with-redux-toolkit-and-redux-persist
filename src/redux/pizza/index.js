import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  size: { title: '', description: '', step: 1 },
  dough: { title: '', description: '', step: 2 },
  border: { title: '', description: '', step: 3 },
  price: 0,
};

export const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    chooseDough: (state, action) => {
      state.dough = action.payload;
    },
    chooseSize: (state, action) => {
      state.size = action.payload;
    },
    chooseBorder: (state, action) => {
      state.border = action.payload;
    },
    sumPrice: (state, action) => {
      state.price += action.payload;
    },
    resetPizza: () => initialState,
  },
});

export const {
  chooseDough,
  chooseSize,
  chooseBorder,
  sumPrice,
  resetPizza,
} = pizzaSlice.actions;

export default pizzaSlice.reducer;
