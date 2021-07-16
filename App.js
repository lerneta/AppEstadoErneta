import React from "react";
import { Provider } from "react-redux";
import BreadNavigator from "./Componentes/Navegador";

import store from "./Store";

export default function Navegador() {
  return (
    <Provider store={store}>
      <BreadNavigator />
    </Provider>
  );
}
