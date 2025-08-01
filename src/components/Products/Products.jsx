import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get('https://fakestoreapi.com/products');
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="d-flex justify-content-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...!</span>
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-5 mb-5">
      <h2 className="mb-4 text-white">Products : </h2>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
        {products.map((item) => (
          <div className="col" key={item.id}>
            <div className="card h-100 shadow-sm border-0">
              <div className="d-flex align-items-center justify-content-center" style={{ height: '200px', padding: '10px' }}>
                <img
                  src={item.image}
                  className="img-fluid"
                  alt={item.title}
                  style={{ maxHeight: '180px', maxWidth: '100%', objectFit: 'contain' }}
                />
              </div>
              <div className="card-body d-flex flex-column">
                <h6 className="card-title fw-semibold">{item.title.substring(0, 50)}...</h6>
                <p className="card-text text-muted">${item.price}</p>
                <Link to={`/details/${item.id}`} className="btn btn-outline-dark mt-auto w-100">
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
