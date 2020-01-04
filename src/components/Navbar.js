import React from 'react'
import { Link,NavLink ,withRouter} from "react-router-dom";
import '../common/navbar.css';
const Navbar = () => {

    return (
        <nav>
            <div className="nav-wrapper">
                <a href="/" className="brand-logo">LOGO</a>
                <ul className="right">
                    <li> <Link to="/" >Home</Link></li>
                    <li> <NavLink to="/about" >About</NavLink></li>
                    <li> <NavLink to="/contact" >Contact</NavLink></li>
                </ul>
            </div>
        </nav>

    )

}

export default withRouter(Navbar);