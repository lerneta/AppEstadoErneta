import React from "react";
import { View, Text, StyleSheet } from "react-native";
import TouchableComponent from "./TouchableComponent";

const FoodItem = ({ item, onSelected }) => {
  return (
    <TouchableComponent
      onPress={() => onSelected(item)}
      style={styles.breadItem}
    >
      <View>
        <Text style={styles.title}>{item.name}</Text>
      </View>
      <View>
        <Text style={styles.price}>${item.price}</Text>
      </View>
    </TouchableComponent>
  );
};

const styles = StyleSheet.create({
  breadItem: {
    height: 150,
    backgroundColor: "#ccc",
    margin: 10,
    padding: 10,
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default FoodItem;
