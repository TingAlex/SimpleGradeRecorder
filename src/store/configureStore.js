import { createStore, combineReducers } from "redux";
import OperReducer from "../reducers/oper";

export default () => {
  const store = createStore(
    combineReducers({
      oper:OperReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  console.log(store.getState());
  
  return store;
};
