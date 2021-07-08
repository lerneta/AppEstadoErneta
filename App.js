import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

import PantPrincipal from "./Paginas/Principal";
import Categorias from "./Paginas/Categorias";
import Detalle from "./Paginas/Detalle";

const Navegador = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Principal">
      <Stack.Screen name="Principal" component={PantPrincipal}></Stack.Screen>
      <Stack.Screen name="Categoria" component={Categorias}></Stack.Screen>
      <Stack.Screen name="Detalle" component={Detalle}></Stack.Screen>
    </Stack.Navigator>
  </NavigationContainer>
);
export default Navegador;
