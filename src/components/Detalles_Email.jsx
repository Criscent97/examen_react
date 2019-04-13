import React, { Component } from "react";
import { Link } from "react-router-dom";
import { GetDatos } from "./../services/datos";
import { Route } from "react-router-dom";
import Email from "./email";

class Detalles_email extends Component {
  state = {};
  render() {
    {
      console.log(this.props);
    }
    return (
      <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
        <div className="container">
          <div className="row">
            <Email />
            <h1>{this.props.match.params.id} </h1>
            <div className="col-8 col-lg-8 px-0">
              <Route path="/correo/detalles_email/:id" Detalles_email={Email} />
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default Detalles_email;
