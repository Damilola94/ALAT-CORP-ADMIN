import { configureStore } from '@reduxjs/toolkit'
// import rootReducer from './reducers'
import beneficiaryReducer from './beneficiarySlice'

const store = configureStore({
  reducer: {
    beneficiary: beneficiaryReducer
  },
})

export default store