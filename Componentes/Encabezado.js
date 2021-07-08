import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Colores from "./Colores";

const Encabezado = (props) => {
  const { title } = props;
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{title}</Text>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 90,
    paddingTop: 36,
    backgroundColor: Colores.principal,
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: {
    color: "white",
    fontSize: 22,
  },
});
export default Encabezado;
