import React, { Component } from "react";
import { Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { GetDatos } from "./../services/datos";
import Detalles_email from "./Detalles_Email";
import Email from "./email";

class Correo extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <Email />

        <Route path="/correo/detalles_email/:id" Detalles_email={Email} />
      </div>
    );
  }
}

export default Correo;
