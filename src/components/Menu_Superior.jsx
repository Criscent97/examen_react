import React, { Component } from "react";

class Menu_Superior extends Component {
  state = {};
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
          <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="#">
            MI @CORREO
          </a>
          <input
            className="form-control form-control-dark w-100"
            type="text"
            placeholder="Buscar Correo"
            aria-label="Buscar Correo"
          />
          <ul className="navbar-nav px-3">
            <li className="nav-item text-nowrap">
              <a className="nav-link">Salir</a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
export default Menu_Superior;
