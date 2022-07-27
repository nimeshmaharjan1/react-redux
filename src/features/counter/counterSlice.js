import { createSlice } from "@reduxjs/toolkit"
 import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => 
  }
})
