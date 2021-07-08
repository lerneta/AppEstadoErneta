import React from "react";
import { StyleSheet, View, Button } from "react-native";
import Encabezado from "../Componentes/Encabezado";

const Detalle = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Encabezado title={"Detalle"} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default Detalle;
