import React from "react";
import { StyleSheet, View, Button } from "react-native";
import Encabezado from "../Componentes/Encabezado";

const Categorias = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Encabezado title={"Categoriasseseses"} />
      <Button
        title="Ir a Detalle"
        onPress={() => {
          navigation.navigate("Detalle");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default Categorias;
