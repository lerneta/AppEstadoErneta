import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import Griditem from "../Componentes/Griditem";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Platform,
  TouchableNativeFeedback,
  TouchableOpacity,
} from "react-native";
import { COMIDAS } from "../Componentes/comidas";

const Categorias = ({ navigation, route }) => {
  let TouchableCmp = TouchableOpacity;
  if (Platform.OS === "android" && Platform.version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }

  const { idcategoria } = route.params;
  const displayComidas = COMIDAS.filter(
    (item) => item.category === idcategoria
  );

  console.log(displayComidas);
  const handlerSelected = (bread) => {
    NavigationContainer.navigate("Detalle", { bread, name: bread.name });
  };

  const renderItem = (itemData) => (
    <Griditem item={itemData.item} onSelected={handlerSelected} />
  );

  return (
    <View style={styles.breadItem}>
      <FlatList
        data={displayComidas}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  breadItem: {
    height: 100,
    width: "100%",
    backgroundColor: "#CCC",
    padding: 8,
    margin: 8,
  },
  breadRow: {
    flexDirection: "row",
  },
  title: {
    fontSize: 20,
  },
});
export default Categorias;
