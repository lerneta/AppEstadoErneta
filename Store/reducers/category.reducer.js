import { CATEGORIES } from "../../Datos/Mock-Data";
import { SELECT_CATEGORY, SELECT_CATEOGORY } from "../actions/category.action";
const initialState = {
  categories: CATEGORIES,
  selected: null,
};

const CategoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_CATEGORY:
      const IndexCategory = state.categories.findIndex(
        (cat) => cat.id === action.categoryId
      );
      if (IndexCategory === -1) return state;
      return { ...state, selcted: state.categories[IndexCategory] };
    default:
      return state;
  }
};

export default CategoryReducer;
