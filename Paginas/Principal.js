import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, View, Button } from "react-native";
import Encabezado from "../Componentes/Encabezado";

const Principal = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Encabezado title={"Lista principal"} />
      <Button
        title="Ir a Categoría 1"
        onPress={() => {
          navigation.navigate("Categoria");
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
export default Principal;
