import React, { Component } from "react";
import { Link } from "react-router-dom";
import { GetDatos } from "./../services/datos";

class Email extends Component {
  state = {
    Datos: GetDatos()
  };
  render() {
    return (
      <div className="cris">
        <h1>Listado de Correos: {this.state.Datos.length}</h1>
        {this.state.Datos.map(datos => (
          <ul className="list-group">
            <li className="list-group-item">
              <Link
                className="nav-link"
                to={`/correo/detalles_email/${datos.id}`}
              >
                <img className="img" src={datos.foto} />
                {datos.first_name} {datos.last_name} &nbsp;
                {datos.date} &nbsp; &nbsp; {datos.email}
              </Link>
            </li>
          </ul>
        ))}
      </div>
    );
  }
}
export default Email;
