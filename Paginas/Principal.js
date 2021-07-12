import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, View, Button, FlatList } from "react-native";
import Encabezado from "../Componentes/Encabezado";
import { CATEGORIES } from "../Componentes/Mock-data";
import Griditem from "../Componentes/Griditem";
import { COMIDAS } from "../Componentes/comidas";

const Principal = ({ navigation }) => {
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
