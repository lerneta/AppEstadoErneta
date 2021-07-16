import { createStore, combineReducers } from "redux";
import CategoryReducer from "./reducers/category.reducer";
import FoodReducer from "./reducers/food.reducer";

const RootReducer = combineReducers({
  categories: CategoryReducer,
  comidas: FoodReducer,
});
export default createStore(RootReducer);
