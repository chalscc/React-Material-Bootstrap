import { createSlice } from '@reduxjs/toolkit'

export const carsSlice = createSlice({
  name: 'cars',
  initialState: {
    carList: []
  },
  reducers: {

    setCars: (state, action) => {
      state.carList = action.payload
    },

  },
})

export const { setCars } = carsSlice.actions