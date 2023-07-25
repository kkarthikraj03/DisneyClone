import { configureStore } from "@reduxjs/toolkit";
import logger from 'redux-logger'
import { reducer as userReducer } from "../features/user/userSlice";
import { reducer as movieReducer } from "../features/movie/movieSlice";

export default configureStore({
    reducer: {
        user:  userReducer,
        movie: movieReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(logger)
})