import { configureStore } from "@reduxjs/toolkit";
import countReducer from './count'

export type StateType = {
  count: number
}

export default configureStore({
  reducer: {
    count: countReducer
  }
})