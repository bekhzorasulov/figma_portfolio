import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header className="container">
      <div className="navbar_menu">
        <nav className="navbar_menu_list">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
