import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

function PageNotFound() {
  return (
    <>
      <Header />
      <div
        className="d-flex justify-content-center align-items-center my-5 pt-5" 
        style={{ minHeight: "80vh" }}
      >
        <div className="text-center p-5 rounded-4 shadow bg-white" style={{ maxWidth: "500px" }}>

          <h1 className="display-1 fw-bold text-primary">404</h1>

          <h3 className="fw-bold mt-3">Page Not Found!</h3>

          <p className="text-muted mt-2 mb-4">
            Oops! The page you're looking for doesn't exist or has been moved.
          </p>

          <Link to="/" className="btn btn-primary px-4 py-2 rounded-pill">
            Go Back Home
          </Link>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default PageNotFound;