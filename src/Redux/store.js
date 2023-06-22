import { configureStore } from "@reduxjs/toolkit";
import { movieApi } from "../Components/services/movieApi";
import movieReducer from "../Redux/movieSlice";
const store = configureStore({
  reducer: {
    [movieApi.reducerPath]: movieApi.reducer,
    movies: movieReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(movieApi.middleware),
});

export default store;
