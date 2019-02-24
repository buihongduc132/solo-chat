import rootReducer from "../reducers/rootReducer";
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'

const loggerMiddleware = createLogger()

const initStore = () => {
  const store = createStore(
    rootReducer,
    applyMiddleware(
      loggerMiddleware,
      thunkMiddleware,
    )
  );

  return store;
};

const store = initStore();

export default store;