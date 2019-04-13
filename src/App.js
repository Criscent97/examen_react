import React, { Component } from "react";
import { Route } from "react-router-dom";
import Menu_Superior from "./components/Menu_Superior";
import Menu_Lateral from "./components/Menu_Lateral";
import Productos from "./components/product";
import Ordenes from "./components/ordenes";
import Clientes from "./components/clientes";
import Email from "./components/email";
import Correo from "./components/correo";
import Control from "./common/control";
// import detalles_email from "./components/detalles_email";

import "./css/dashboard.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Menu_Superior />

        <Menu_Lateral />

        <div className="container-fluid">
          <Route path="/correo" component={Correo} />

          <div className="row">
            <br />
            <Route path="/ordenes" component={Ordenes} />
            <Route path="/product" component={Productos} />
            <Route path="/clientes" component={Clientes} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
