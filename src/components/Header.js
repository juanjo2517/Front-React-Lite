import React from 'react'
import { Link } from 'react-router-dom';


const Header = () => {
    return ( 
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary
        justify-content-between">
            <div className="container">
                <h1>
                    <Link to="/" className="text-light">CRUD - BUSSINES COMPANY</Link>
                </h1>
            </div>

            <Link to="/empresas/nuevo"
                className="btn btn-danger nuevo-post d-block d-md-inline-block"
            >Agregar Empresa</Link>
        </nav>
     );
}
 
export default Header;