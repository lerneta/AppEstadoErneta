import React, { useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, View, Button, FlatList } from "react-native";
import Encabezado from "../Componentes/Encabezado";
import { useSelector, useDispatch } from "react-redux";
import { Provider } from "react-redux";
import Griditem from "../Componentes/Griditem";
import { COMIDAS } from "../Datos/comidas";
import { filteredBreads, selectBread } from "../Store/actions/food.action";

const Principal = ({ navigation }) => {
  const dispatch = useDispatch();
  const categoryBreads = useSelector((state) => state.breads.filterBread);
  const category = useSelector((state) => state.category.selected);

  const handlerSelectedCategory = (item) => {
    navigation.navigate("Categoria", {
      categoryId: item.id,
      name: item.titulo,
    });
  };
  const renderGridItem = (itemData) => (
    <Griditem item={itemData.item} onSelected={handlerSelectedCategory} />
  );

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderGridItem}
      numColumns={2}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default Principal;
