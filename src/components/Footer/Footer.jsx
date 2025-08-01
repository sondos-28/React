import React from "react";

const Footer = () => (
  <footer className="footer mt-auto py-4 bg-dark text-white border-top shadow-sm">
    <div className="container text-center">
      <h4 className="text-uppercase mb-3">React Store</h4>
      <p className="mb-3">This is a simple React application built with Vite, Bootstrap, and Fake Store API.</p>

    <div className="d-flex justify-content-center mb-4 gap-4">
        <a
          href="st1321@fayoum.edu.eg" target="_blank" rel="noopener noreferrer" className="text-white fs-4 Icon">
          <i className="fas fa-envelope"></i>
        </a>
        <a
          href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="text-white fs-4 Icon">
          <i className="fab fa-facebook"></i>
        </a>
        <a
          href="#" target="_blank" rel="noopener noreferrer" className="text-white fs-4 Icon" >
          <i className="fab fa-whatsapp"></i>
        </a>
        <a
          href="www.linkedin.com/in/sondos-tarek28" target="_blank" rel="noopener noreferrer" className="text-white fs-4 Icon">
          <i className="fab fa-linkedin"></i>
        </a>
      </div>


      <hr className="border-light" style={{ opacity: 0.25 }} />

      <div className="small text-white-50">
        &copy; {new Date().getFullYear()} Copyright : <strong>SONDOS-ABOELEID</strong>
      </div>
    </div>
  </footer>
);

export default Footer;
