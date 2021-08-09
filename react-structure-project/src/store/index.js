import { configureStore } from '@reduxjs/toolkit';
import favSlice from './favSlice'

export default configureStore({
  reducer: {
    fav: favSlice
  }
})