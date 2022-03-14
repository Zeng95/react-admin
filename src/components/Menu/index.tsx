import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <nav
      id="sidebarMenu"
      className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
    >
      <div className="position-sticky pt-3">
        <ul className="nav flex-column">
          {/* Dashboard */}
          <li className="nav-item">
            <Link to="/" className="nav-link active">Dashboard</Link>
          </li>

          {/* Users */}
          <li className="nav-item">
            <Link to="/users" className="nav-link active">Users</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Menu;
