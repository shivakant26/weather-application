import { configureStore } from '@reduxjs/toolkit';
import weatherSlice from './weatherSlice';


const store = configureStore({
  reducer: {
    api: weatherSlice,
  },
});

export default store;