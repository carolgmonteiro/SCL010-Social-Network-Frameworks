import { createStore } from "redux";
// import testReducer from "../../features/testarea/testReducer";
import rootReducer from "../reducers/rootReducer";

export const configureStore = () => {
  const store = createStore(rootReducer);
  return store;
};
