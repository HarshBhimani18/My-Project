import { NavLink } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-dark ">
            <div className="container-fluid ">
                <a className="navbar-brand fw-bolder fs-2 text-danger" href="#">Contect list</a>
                <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon "></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-center ">
                        <li className="nav-item">
                            <NavLink className="nav-link text-light  mx-3" to="/Add">Add Number</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-light  mx-3" to="/Numberlist">Number list</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-light mx-3" to="/About">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-light mx-3" to="/ContectUs">Contect us</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
