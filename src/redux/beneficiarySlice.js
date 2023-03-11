import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
}

export const beneficiarySlice = createSlice({
  name: 'beneficiary',
  initialState,
  reducers: {
    addBeneficiary: (state, action) => {
      state.value = action.payload
    },
  },
})


export const { addBeneficiary } = beneficiarySlice.actions

export const selectValue = (state) => state.counter.value

export default beneficiarySlice.reducer