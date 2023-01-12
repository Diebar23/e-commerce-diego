import NavItem from "./NavItem";
import "./navbar.css";
import CartWidget from "./CartWidget";

function NavBar() {
  return (
    <nav>
      <ul className="nav-menu">
        <NavItem href="/"> Mis Compras </NavItem>
        
        <NavItem href="/">Hamburguesas</NavItem>
        <NavItem href="/">Pollo</NavItem>
        <NavItem href="/">Vegetariano</NavItem>
        <CartWidget/>
      </ul>
    </nav>
  );
    
}

export default NavBar;