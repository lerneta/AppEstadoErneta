import React from "react";
import { StyleSheet, View } from "react-native";

const Detalle = ({ route }) => {
  const bread = route.params.bread;

  return (
    <View style={styles.container}>
      <TouchableCmp onPress={() => onSelect(item)}>
        <View style={styles.row}>
          <Text>{bread.nombre}</Text>
        </View>
        <View style={styles.row}>
          <Text>{bread.descripcion}</Text>
        </View>
        <View>
          <Text>$ {bread.precio}</Text>
        </View>
      </TouchableCmp>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 100,
    width: "100%",
    backgroundColor: "#ccc",
    padding: 8,
    margin: 8,
  },
  row: {
    flexDirection: "row",
  },
});
export default Detalle;
