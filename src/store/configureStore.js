import { createStore, combineReducers } from "redux";
import OperReducer from "../reducers/oper";
import filterReducer from "../reducers/filter"

export default () => {
  const store = createStore(
    combineReducers({
      oper: OperReducer,
      filt: filterReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  console.log(store.getState());

  return store;
};
