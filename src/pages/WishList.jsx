import React from 'react'
import Header from '../components/Header'
import { Card } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faHeartCircleXmark } from '@fortawesome/free-solid-svg-icons'
import Footer from '../components/Footer'

function WishList() {
  return (
    <>
      <Header />
      <div className='container-fluid p-5 mt-5'>
        <div className="row pt-5">
          <div className="col-md-3 my-2">
            <Card>
              <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ98ZGI18vEg9Fqc7JNS-Muquo-TOQuyVZPfA&s" />
              <Card.Body className='text-center'>
                <Card.Title>Card Title</Card.Title>
                <div className='d-flex justify-content-evenly align-items-center'>
                  <button className='btn'>
                    <FontAwesomeIcon className='text-danger fs-3' icon={faHeartCircleXmark} />
                  </button>
                  <button className='btn'>
                    <FontAwesomeIcon className='text-success fs-3' icon={faCartPlus} />
                  </button>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default WishList