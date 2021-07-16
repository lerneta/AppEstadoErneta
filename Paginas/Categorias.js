import React, { useEffect } from "react";
import { FlatList } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import BreadItem from "../Componentes/FoodItem";
import { filterBread, selectBread } from "../Store/actions/food.action";

const CategoryBreadScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const categoryBreads = useSelector((state) => state.breads.filteredBreads);
  const category = useSelector((state) => state.categories.selected);

  useEffect(() => {
    dispatch(filterBread(category.id));
  }, []);

  const handleSelected = (item) => {
    dispatch(selectBread(item.id));
    navigation.navigate("Detalle", { name: item.name });
  };
  const renderItem = ({ item }) => (
    <BreadItem item={item} onSelected={handleSelected} />
  );

  return (
    <FlatList
      data={categoryBreads}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
};

export default CategoryBreadScreen;
