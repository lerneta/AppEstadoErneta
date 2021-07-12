import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from "react-native";

const Griditem = ({ item, onSelected }) => {
  let TouchableCmp = TouchableOpacity;
  if (Platform.OS === "android" && Platform.version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }

  return (
    <View style={styles.griditem}>
      <TouchableCmp
        style={{ ...styles.container, ...{ backgroundColor: item.color } }}
        onPress={() => onSelected(item)}
      >
        <View>
          <Text>{item.titulo}</Text>
        </View>
      </TouchableCmp>
    </View>
  );
};

const styles = StyleSheet.create({
  griditem: {
    flex: 1,
    borderRadius: 6,
    margin: 15,
    height: 150,
  },
  container: {
    flex: 1,
    borderRadius: 6,
    shadowColor: "black",
    elevation: 3,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    padding: 8,
  },
});
export default Griditem;
