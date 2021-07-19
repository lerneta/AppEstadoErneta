import React from "react";
import { View, StyleSheet, Button } from "react-native";
import Colors from "../Componentes/Colores";

const ShowCart = ({ navigation }) => {
  const handleShowCart = () => navigation.push("Carrito");

  return (
    <View>
      <Button
        title="Ver Carrito"
        onPress={handleShowCart}
        color={Colors.primary}
      />
    </View>
  );
};

export default ShowCart;
