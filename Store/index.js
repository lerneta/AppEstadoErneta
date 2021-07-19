import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import CategoryReducer from "./reducers/category.reducer";
import BreadReducer from "./reducers/food.reducer";
import CartReducer from "./reducers/cart.reducer";

const RootReducer = combineReducers({
  categories: CategoryReducer,
  breads: BreadReducer,
  cart: CartReducer,
});

export default createStore(RootReducer, applyMiddleware(thunk));
