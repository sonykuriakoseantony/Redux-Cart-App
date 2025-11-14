import { faCartPlus, faHeart, faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import Header from '../components/Header'
import Footer from '../components/Footer'

function ViewProduct() {
  return (
    <>
      <Header />
      <div className="py-5 my-5 container-fluid">
        <div className='row my-5'>
          {/* LEFT SECTION - IMAGE */}
          <Col md={5} className="d-flex justify-content-center align-items-start">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ98ZGI18vEg9Fqc7JNS-Muquo-TOQuyVZPfA&s"
              alt="Essence Mascara"
              style={{ width: "80%", objectFit: "contain" }}
            />
          </Col>

          {/* RIGHT SECTION - PRODUCT INFO */}
          <Col md={7}>
            <h1 className="fw-bold">Essence Mascara Lash Princess (Title)</h1>
            <h3 className="text-danger fw-bold">$ 9.99</h3>

            <p className='mb-1'><strong>Brand :</strong> Essence</p>
            <p className='mb-1'><strong>Category :</strong> beauty</p>
            <p>
              <strong>Description :</strong> The Essence Mascara Lash Princess is
              a popular mascara known for its volumizing and lengthening effects.
              Achieve dramatic lashes with this long-lasting and cruelty-free
              formula.
            </p>

            {/* BUTTONS */}
            <div className="d-flex gap-3 my-4">
              <Button variant="primary">
                <FontAwesomeIcon icon={faHeart} className="me-2" />
                Add to Wishlist
              </Button>

              <Button variant="success">
                <FontAwesomeIcon icon={faCartPlus} className="me-2" />
                Add to Cart
              </Button>
            </div>

            {/* CLIENT REVIEWS */}
            <h5 className="fw-bold mt-4">Client Reviews</h5>
            <div className="p-3 my-2 shadow-sm border rounded">
              <strong>Eleanor Collins :</strong> Highly impressed! <br />
              <div className='d-flex align-items-center'>
                <p className='mb-0'>Rating :</p>
                <FontAwesomeIcon icon={faStar} className="text-warning ms-2" />
                <FontAwesomeIcon icon={faStar} className="text-warning" />
                <FontAwesomeIcon icon={faStar} className="text-warning" />
                <FontAwesomeIcon icon={faStar} className="text-warning" />
                <FontAwesomeIcon icon={faStar} className="text-warning" />
              </div>
            </div>
            <div className="p-3 my-2 shadow-sm border rounded">
              <strong>Eleanor Collins :</strong> Highly impressed! <br />
              <div className='d-flex align-items-center'>
                <p className='mb-0'>Rating :</p>
                <FontAwesomeIcon icon={faStar} className="text-warning ms-2" />
                <FontAwesomeIcon icon={faStar} className="text-warning" />
                <FontAwesomeIcon icon={faStar} className="text-warning" />
                <FontAwesomeIcon icon={faStar} className="text-warning" />
                <FontAwesomeIcon icon={faStar} className="text-warning" />
              </div>
            </div>
            <div className="p-3 my-2 shadow-sm border rounded">
              <strong>Eleanor Collins :</strong> Highly impressed! <br />
              <div className='d-flex align-items-center'>
                <p className='mb-0'>Rating :</p>
                <FontAwesomeIcon icon={faStar} className="text-warning ms-2" />
                <FontAwesomeIcon icon={faStar} className="text-warning" />
                <FontAwesomeIcon icon={faStar} className="text-warning" />
                <FontAwesomeIcon icon={faStar} className="text-warning" />
                <FontAwesomeIcon icon={faStar} className="text-warning" />
              </div>
            </div>
          </Col>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default ViewProduct