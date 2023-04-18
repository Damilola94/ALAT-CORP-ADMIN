import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  beneficiaryList: [],
  selectedBeneficiaryList: {},
  savedBeneficiaryList: [],
  previousStep: false,
  adminRole: {status:"", id:""}
};

export const transactionSlice = createSlice({
  name: "beneficiary",
  initialState,
  reducers: {
    addBeneficiary: (state, action) => {
      state.beneficiaryList = action.payload;
    },
    selectBeneficiary: (state, action) => {
      state.selectedBeneficiaryList = action.payload;
    },
    savedBeneficiary: (state, action) => {
      state.savedBeneficiaryList = action.payload;
    },
    onPreviousStep: (state, action) => {
      state.previousStep = action.payload;
    },
    onTransactionStatusChange: (state, action) => {
      state.adminRole.status = action.payload.status;
      state.adminRole.id = action.payload.id;
    },
  },
});

export const { addBeneficiary, selectBeneficiary, savedBeneficiary, onPreviousStep, onTransactionStatusChange } =
transactionSlice.actions;

export const beneficiaryListValue = (state) =>
  state.transaction.beneficiaryList;

export const selectedBeneficiaryListValue = (state) =>
  state.transaction.selectedBeneficiaryList;

export const savedBeneficiaryListValue = (state) =>
  state.transaction.savedBeneficiaryList;

export const previousStepBoolean = (state) => state.transaction.previousStep;

export const adminRole = (state) => state.transaction.adminRole;

export default transactionSlice.reducer;
