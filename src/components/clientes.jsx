import React, { Component } from "react";
class Clientes extends Component {
  state = {};
  render() {
    return (
      <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
        <div className="jumbotron">
          <h1 className="display-4">Bienvenidos a Clientes!</h1>
          <p className="lead">
            This is a simple hero unit, a simple jumbotron-style component for
            calling extra attention to featured content or information.
          </p>
          <hr className="my-4" />
          <p>
            It uses utility classes for typography and spacing to space content
            out within the larger container.
          </p>
          <p className="lead">
            <a className="btn btn-info btn-lg" href="#" role="button">
              Ver más Clientes
            </a>
          </p>
        </div>
      </main>
    );
  }
}

export default Clientes;
