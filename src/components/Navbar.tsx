import { Link, NavLink } from "react-router-dom";



export default function Navbar() {


    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="/">Navbar</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>





                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item ">
                            <NavLink className="nav-link" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item ">
                            <NavLink className="nav-link" to="/about">About</NavLink>
                        </li>
                        <li className="nav-item ">
                            <NavLink className="nav-link" to="/contact">Contact</NavLink>
                            {/* use NavLink to get automatic active class on click */}
                            {/* <Link className="nav-link" to="/contact">Contact</Link> */}
                        </li>
                        <li className="nav-item ">
                            <NavLink className="nav-link" to="/dashboard">Dashboard</NavLink>
                        </li>
                        <li className="nav-item ">
                            <NavLink className="nav-link" to="/nothing-here">Nothing Here</NavLink>
                        </li>
                        {/* <li className="nav-item dropdown">
                            <NavLink className="nav-link dropdown-toggle"   to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                            </NavLink>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><NavLink className="dropdown-item" to="home">Action</NavLink></li>
                                <li><NavLink className="dropdown-item" to="about">Another action</NavLink></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><NavLink className="dropdown-item" to="contact">Something else here</NavLink></li>
                            </ul>
                        </li> */}
                       
                    </ul>
                </div>
            </nav>
        </div>
    );
}
