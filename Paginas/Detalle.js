import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import ShowCart from "../Componentes/ShowCart";
import { addItem } from "../Store/actions/cart.action";
import Colores from "../Componentes/Colores";

const Detalle = ({ navigation }) => {
  const dispatch = useDispatch();
  const item = useSelector((state) => state.breads.selected) || {};

  const handleAddItem = () => dispatch(addItem(item));

  return (
    <View style={styles.screen}>
      <Text>{item.name}</Text>
      <Text>{item.description}</Text>
      <Text>${item.price}</Text>
      <Text>{item.weight}gr</Text>
      <Button
        title="AGREGAR AL CARRITO"
        onPress={handleAddItem}
        color={Colores.accent}
      />
      <ShowCart navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Detalle;
