function NavBar (props){
    return (
        <nav>
            <ul>
                <li>
                    <a href="/">
                        <h4>Logo Mis Compras</h4>
                    </a>
                </li>

                <NavItem href="/hamburguesas">Hamburguesa</NavItem>
                <NavItem href="/pollo">Pollo</NavItem>
                <NavItem href="/vegetariano">Vegetariano</NavItem>
            </ul>
        </nav>
    );
    
}

export default NavBar;