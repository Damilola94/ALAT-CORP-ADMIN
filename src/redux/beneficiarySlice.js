import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  beneficiaryList: [],
  selectedBeneficiaryList: {},
  savedBeneficiaryList: [],
}

export const beneficiarySlice = createSlice({
  name: 'beneficiary',
  initialState,
  reducers: {
    addBeneficiary: (state, action) => {
      state.beneficiaryList = action.payload
    },
    selectBeneficiary: (state, action) => {
      state.selectedBeneficiaryList = action.payload
    },
    savedBeneficiary: (state, action) => {
      state.savedBeneficiaryList = action.payload
    },
  },
})


export const { addBeneficiary, selectBeneficiary,savedBeneficiary } = beneficiarySlice.actions

export const beneficiaryListValue = (state) => state.beneficiary.beneficiaryList

export const selectedBeneficiaryListValue = (state) => state.beneficiary.selectedBeneficiaryList

export const savedBeneficiaryListValue = (state) => state.beneficiary.savedBeneficiaryList

export default beneficiarySlice.reducer