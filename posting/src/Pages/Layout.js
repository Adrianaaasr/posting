import { Outlet, Link } from "react-router-dom";
import './Layout.css'
import logo from '../Assets/Logo posting-min-min.webp';


const Layout = (showMenu, showLogo) => {
    return (
    <div>  
        {showMenu && (      
        <nav>
                <ul className="principal_list"  >
                    <li>
                        <Link className="list" to = '/'> Inicio </Link>
                    </li>
                    <li >
                        <Link className="list" to = '/Contact' > Contacto </Link>
                    </li>
                    {/* <li>
                        <Link className="list" to = '/Gratefull' > Agradecimiento </Link>
                    </li> */}
                </ul>    
            </nav>
            )}
            {showLogo && (
                <Link to="/">
                    <img className="logo_posting" src={logo} alt="Posting" /> 
                </Link>
            )}
            <Outlet />
    </div>
    );
};
export default Layout;