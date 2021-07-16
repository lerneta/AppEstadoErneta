import { COMIDAS } from "../../Datos/comidas";
import { SELECT_FOOD, FILTERED_FOOD } from "../actions/food.action";

const initialState = {
  comidas: COMIDAS,
  filtered: [],
  selected: null,
};

const FoodReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_FOOD:
      return {
        ...state,
        selected: state.comidas.find((bread) => bread.id === action.breadID),
      };
    case FILTERED_BREAD:
      return {
        ...state,
        filteredBread: state.comidas.filter(
          (bread) => bread.category === action.categoryID
        ),
      };
    default:
      return state;
  }
};

export default FoodReducer;
