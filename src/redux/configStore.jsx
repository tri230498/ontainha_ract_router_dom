import { combineReducers, createStore } from "redux";
import { demoBurgerReducer } from "./reducers/DemoBurgerReducer";
import { demoGioHangReducer } from "./reducers/demoGioHangReducer";
import { imgCarReducer } from "./reducers/imgCarReducer";
import { numberReducer } from "./reducers/numberReducer";
import { qlsvReducer } from "./reducers/qlsvReducer";

// rootReducer: state tổng của ứng dụng
const rootReducer = combineReducers({
  number: numberReducer,
  imgCart: imgCarReducer,
  qlsvReducer : qlsvReducer, // object literal
  demoGioHangReducer: demoGioHangReducer,
  demoBurgerReducer 
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
