import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <>
          <div className="d-flex align-items-center justify-content-center min-vh-100 ">
            <div className="bg-white p-5 rounded shadow w-50">
              <h1 className="display-4 mb-3">Welcome to React Store!</h1>
              <p className="lead">
                This is a simple React application built with Vite, Bootstrap, and Fake Store API.
              </p>
              <hr className="my-4" />
              <p className="mb-4">
                Browse our collection of products and learn more about React development.
              </p>
              <Link to={"/products"} className="btn btn-primary btn-lg">
                View Products
              </Link>
            </div>
          </div>
        </>
    );
}