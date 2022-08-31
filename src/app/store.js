import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';
import lastnewsReducer from '../features/lastnews/lastnewsSlice';

export const store = configureStore({
  reducer: {
    // counter: counterReducer,
    lastnews: lastnewsReducer
  },
});
