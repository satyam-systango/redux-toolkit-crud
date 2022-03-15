import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './slice/todo';

const reducer = {
  todos: todoReducer
}
const store = configureStore({
  reducer: reducer,
})
export default store;