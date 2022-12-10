import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    restaurant: {
        id: null,
        imgUrl: null,
        title: null,
        rating: null,
        genre: null,
        address: null,
        short_description: null,
        dishes: null
    },
    kot_num: 0
}

export const restaurantSlice = createSlice({
    name: 'restaurant',
    initialState,
    reducers: {
        setRestaurant: (state, action) => {
            state.restaurant = action.payload;
        },
        setKotNum: (state, action) => {
            state.kot_num = action.payload;
        },
    },
})

// Action creators are generated for each case reducer function
export const { setRestaurant, setKotNum } = restaurantSlice.actions;

export const selectRestaurant = state => state.restaurant.restaurant;
export const selectKotNum = state => state.restaurant.kot_num;

export default restaurantSlice.reducer