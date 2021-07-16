export const SELECT_FOOD = "SELECT_FOOD";
export const FILTERED_FOOD = "FILTERED_FOOD";

export const selectFood = (id) => ({
  type: SELECT_BREAD,
  breadID: id,
});

export const filteredBread = (id) => ({
  type: FILTERED_BREAD,
  categoryID: id,
});
