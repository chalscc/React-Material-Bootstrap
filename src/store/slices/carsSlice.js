import { createSlice } from '@reduxjs/toolkit'

export const carsSlice = createSlice({
  name: 'cars',
  initialState: {
    allCars: [],
    carList: []
  },
  reducers: {

    setCarsInit: (state, action) => {
      state.allCars = action.payload
      state.carList = action.payload
    },

    filterCarsByBrand: (state, action) => {
      state.carList = (action.payload.length === 0) ? 
        state.allCars : 
        state.allCars.filter(car => action.payload.includes(car.brand));
    },

  },
})

export const { setCarsInit, filterCarsByBrand } = carsSlice.actions