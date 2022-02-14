import { createStore, combineReducers } from "redux";
import { visibleReducer } from './visibleReducer';

const rootReducer = combineReducers({
  visible: visibleReducer
});

export const store = createStore(rootReducer);