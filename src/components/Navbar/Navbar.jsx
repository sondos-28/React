import React from 'react';
import { Link } from 'react-router-dom';
import Img from '../Img/shopping-logo.jpg'

export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg  bg-dark navbar-dark">
                <div className="container container-fluid">
                    <Link className="navbar-brand d-flex align-items-center" to={'/'}>
                      <img src={Img} alt="Logo" width={40} height={40} className="d-inline-block  rounded-circle me-3" />

                    <span>React Store</span>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                      <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                        <Link className="nav-link" aria-current="page" to={'/'}>Home</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to={'/products'}>Products</Link>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>

        </>
    );
}