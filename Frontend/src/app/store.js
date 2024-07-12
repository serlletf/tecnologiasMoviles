import { configureStore } from '@reduxjs/toolkit';
import exampleReducer from './slides/example.js';
import exampleReducer2 from './slides/example2.js';
import exampleReducer3 from './slides/example3.js';

export const store = configureStore({
  reducer: {
    example: exampleReducer,
    example2: exampleReducer2,
    example3: exampleReducer3
  },
});
