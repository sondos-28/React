import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

export default function Details() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSingle = async () => {
      try {
        const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`);
        setItem(data);
      } catch (error) {
        console.error('Error fetching item:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSingle();
  }, [id]);

  if (loading) {
    return (
      <div className="d-flex justify-content-center mt-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...!</span>
        </div>
      </div>
    );
  }

  if (!item) {
    return <div>Item not found</div>;
  }

  return (
    <div className="container my-5">
      <div className="row justify-content-center align-items-center g-5">
        <div className="col-12 col-md-5 text-center">
          <div className="bg-light p-4 rounded shadow-sm">
          <img
            src={item.image}
            alt={item.title}
            className="img-fluid bg-light p-3 rounded"
            style={{ maxHeight: '400px', objectFit: 'contain' }}
          />
          </div>
        </div>
        <div className="col-12 col-md-6">
          <h2 className="mb-3">{item.title}</h2>
          <p className="fs-4 text-primary fw-bold">${item.price}</p>
          <p className="badge bg-secondary mb-3">{item.category}</p>
          <p className="mb-4 small text-white">{item.description}</p>
          <div className="d-grid gap-2">
            <button className="btn btn-success"type='button'>Add to Cart</button>
            <Link to="/products" className="btn btn-outline-secondary">
              Back to Products
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
