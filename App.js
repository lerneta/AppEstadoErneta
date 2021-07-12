import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

import PantPrincipal from "./Paginas/Principal";
import Categorias from "./Paginas/Categorias";
import Detalle from "./Paginas/Detalle";
import { Platform } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

const Navegador = () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName="Principal"
      screenOptons={{
        headerStyle: {
          backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "",
        },
        headerTintColor:
          Platform.OS === "android" ? "white" : Colors.primaryColor,
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="Principal"
        component={PantPrincipal}
        options={{ titulo: "Nuestro menú" }}
      ></Stack.Screen>
      <Stack.Screen
        name="Categoria"
        component={Categorias}
        options={({ route }) => ({ titulo: route.params.nombre })}
      ></Stack.Screen>
      <Stack.Screen
        name="Detalle"
        component={Detalle}
        options={({ route }) => ({ titulo: route.params.nombre })}
      ></Stack.Screen>
    </Stack.Navigator>
  </NavigationContainer>
);
export default Navegador;
