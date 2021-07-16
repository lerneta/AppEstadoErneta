import React from "react";
import {
  StyleSheet,
  View,
  TouchableNativeFeedback,
  TouchableOpacity,
  Platform,
  Text,
} from "react-native";
import { useSelector, connect } from "react-redux";

const Detalle = () => {
  const bread = useSelector((state) => state.bread.selected);
  console.log(bread);
  let TouchableCmp = TouchableOpacity;
  if (Platform.OS === "android" && Platform.version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }
  return (
    <View style={styles.container}>
      <TouchableCmp onPress={() => onSelect(item)}>
        <View style={styles.row}>
          <Text style={styles.title}>{bread.name}</Text>
        </View>
        <View style={styles.row}>
          <Text>{bread.description}</Text>
        </View>
        <View>
          <Text>$ {bread.price}</Text>
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
  title: {
    fontSize: 25,
  },
});
export default connect()(Detalle);
