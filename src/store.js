import { createStore } from "redux";
import animReducer from "./reducers/animReducer";
function configureStore(state = { animating: true }) {
  return createStore(animReducer,state);
}
export default configureStore;