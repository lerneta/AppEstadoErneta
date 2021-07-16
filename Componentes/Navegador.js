import React from "react";
import { Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Principal from "../Paginas/Principal";
import Categorias from "../Paginas/Categorias";
import Detalle from "../Paginas/Detalle";
import Colors from "./Colores";

const Stack = createStackNavigator();

const BreadNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName="Principal"
      screenOptions={{
        headerStyle: {
          backgroundColor: Platform.OS === "android" ? Colors.primary : "",
        },
        headerTitleStyle: {
          fontWeight: "bold",
        },
        headerTintColor: Platform.OS === "android" ? "white" : Colors.primary,
      }}
    >
      <Stack.Screen
        name="Principal"
        component={Principal}
        options={{ title: "Mi Pan" }}
      />
      <Stack.Screen
        name="Categorias"
        component={Categorias}
        options={({ route }) => ({ title: route.params.name })}
      />
      <Stack.Screen
        name="Detalle"
        component={Detalle}
        options={({ route }) => ({ title: route.params.name })}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default BreadNavigator;
