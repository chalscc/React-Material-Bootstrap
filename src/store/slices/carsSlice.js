import { createSlice } from '@reduxjs/toolkit'

export const carsSlice = createSlice({
  name: 'cars',
  initialState: {
    allCars: [],
    carList: [],
    filterByBrand: [],
    filterByRating: 0,
  },
  reducers: {

    setCarsInit: (state, action) => {
      state.allCars = action.payload
      state.carList = action.payload
    },


    filterCarsByBrand: (state, action) => {
      state.filterByBrand = action.payload;

      if (action.payload.length === 0) {
        state.carList = state.allCars;
      } else {
        state.carList = state.allCars.filter(car => action.payload.includes(car.brand));
      }

      if (state.filterByRating) {
        state.carList = state.carList.filter(car => car.rating >= state.filterByRating);
      }
    },

    filterCarsByRating: (state, action) => {
      state.filterByRating = action.payload;

      state.carList = state.allCars.filter(car => car.rating >= state.filterByRating);

      if (state.filterByBrand.length) {
        state.carList = state.carList.filter(car => state.filterByBrand.includes(car.brand));
      }
      
    }


  },
})

export const { setCarsInit, filterCarsByBrand, filterCarsByRating } = carsSlice.actions