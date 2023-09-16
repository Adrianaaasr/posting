import { Outlet, Link } from "react-router-dom";
import './Layout.css'
import logo from '../Assets/Logo posting-min-min.webp';


const Layout = () => {
    return (
    <div>          
        <nav>
          <img className="logo_posting" src={logo} alt="Posting" /> 
                <ul className="principal_list navbar-expand-lg"  >
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
        <Outlet/>
    </div>
    );
};
export default Layout;