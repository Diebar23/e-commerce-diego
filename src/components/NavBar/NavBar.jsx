import CartWidget from "./CartWidget";


function NavBar (props){
    return (
        <nav>
            <ul>
                <li>
                    <a href="/">
                        <h4>Mis Compras</h4>
                    </a>
                </li>
                <li>
                    <a href="/">Hamburguesa</a>
                </li>
                <li> 
                    <a href="/">Pollo</a>
                </li>
                <li>
                    <a href="/">Vegetariano</a>
                </li>              
            </ul>
            <CartWidget/>
        </nav>
    );
    
}

export default NavBar;