import { combineReducers } from '@reduxjs/toolkit';
import exampleReducer from '../../features/exampleSlice';

export const rootReducer = combineReducers({
  exampleData: exampleReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
