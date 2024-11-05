import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

export default function Header() {
  const { firstName, setIsAuth, isAuth, setFirstName } =
    useContext(AuthContext);
  const handleLogin = () => {
    setIsAuth(true);
  };
  const handleLogout = () => {
    setIsAuth(false);
    setFirstName("");
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-primary">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand text-white">
            Navbar
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link text-white">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="about" className="nav-link text-white">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to="contact" className="nav-link text-white">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/dashboard/home" className="nav-link text-white">
                  Dashboard/Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/dashboard/services" className="nav-link text-white">
                  Dashboard/Services
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/dashboard/carts" className="nav-link text-white">
                  Dashboard/Carts
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/hooks/usestate" className="nav-link text-white">
                  UseState
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/hooks/useeffect" className="nav-link text-white">
                  UseEffect
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/hooks/usereducer" className="nav-link text-white">
                  UseReducer
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/hooks/usecontext" className="nav-link text-white">
                  UseContext
                </Link>
              </li>
            </ul>
            <form className="d-flex align-items-center" role="search">
              <p className="mb-0 me-2 text-white fw-medium">{firstName}</p>
              {!isAuth ? (
                <botton
                  to="/auth/login"
                  className="btn btn-success text-white"
                  onClick={handleLogin}
                >
                  LogIn
                </botton>
              ) : (
                <botton
                  to="/auth/login"
                  className="btn btn-danger text-white"
                  onClick={handleLogout}
                >
                  LogOut
                </botton>
              )}
              <Link to="/auth/register" className="btn btn-danger text-white">
                Register
              </Link>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}
