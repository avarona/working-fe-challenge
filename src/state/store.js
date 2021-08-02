import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";
import rootReducer from "./slices";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();
const middleware = [
  ...getDefaultMiddleware({ thunk: false }),
  sagaMiddleware,
  logger,
];

const store = configureStore({
  devTools: true,
  middleware,
  preloadedState: {},
  reducer: rootReducer,
});

sagaMiddleware.run(rootSaga);

export default store;
