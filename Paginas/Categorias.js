import { NavigationContainer } from "@react-navigation/native";
import React, { useEffect } from "react";
import { useSelector, useDispatch, connect } from "react-redux";
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
import { filteredBread, selectBread } from "../Store/actions/food.action";
import { COMIDAS } from "../Datos/comidas";

const Categorias = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const categoryBreads = useSelector((state) => state.breads.filteredBread);
  const category = useSelector((state) => state.categories.selected);

  useEffect(() => {
    dispatch(filteredBread(bread.id));
  }, []);

  let TouchableCmp = TouchableOpacity;
  if (Platform.OS === "android" && Platform.version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }

  const handlerSelectedCategory = (item) => {
    dispatch(selectCategory(item.id));
    navigation.navigate("Detalle", { name: item.title });
  };

  const idcategoria = route.params.categoryId;
  console.log("ID DE LA CATEGORIA");
  const displayComidas = COMIDAS.filter(
    (item) => item.category === idcategoria
  );
  console.log("EL ROUTEO ES: ", route);
  console.log("LAS COMIDAS SON: ", COMIDAS);
  console.log(displayComidas);

  const handlerSelected = (item) => {
    navigation.navigate("Detalle", {
      categoryId: item.id,
      name: item.titulo,
      price: item.price,
      description: item.description,
    });
  };
  const renderItem = (itemData) => (
    <Griditem item={itemData.item} onSelected={handlerSelected} />
  );
  return (
    <View>
      <FlatList
        data={categoryBreads}
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
export default connect()(Categorias);
