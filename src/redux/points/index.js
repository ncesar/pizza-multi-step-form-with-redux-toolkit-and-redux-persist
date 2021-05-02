import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  point: 0,
};

export const pointsSlice = createSlice({
  name: 'points',
  initialState,
  reducers: {
    incrementPoints: (state, action) => {
      state.point += action.payload;
    },
    resetPoints: () => initialState,
  },
});

export const { incrementPoints, resetPoints } = pointsSlice.actions;

export default pointsSlice.reducer;
