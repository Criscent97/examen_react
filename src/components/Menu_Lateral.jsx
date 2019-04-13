import React, { Component } from "react";
import { Link } from "react-router-dom";

class Menu_Lateral extends Component {
  state = {};
  render() {
    return (
      <nav className="col-md-2 d-none d-md-block bg-light sidebar">
        <div className="sidebar-sticky">
          <ul className="nav flex-column">
            <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
              <span>NAVEGACION</span>
              <Link className="d-flex align-items-center text-muted" to="/">
                <span data-feather="plus-circle" />
              </Link>
            </h6>

            <li className="nav-item">
              <Link className="nav-link active" to="/correo">
                <span data-feather="file" />
                Emails
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/ordenes">
                <span data-feather="shopping-cart" />
                Orders
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/product">
                <span data-feather="users" />
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/clientes">
                <span data-feather="bar-chart-2" />
                Customers
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Menu_Lateral;
