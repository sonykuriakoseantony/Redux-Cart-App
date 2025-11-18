import React from 'react'
import Header from '../components/Header'
import { Card } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faHeartCircleXmark } from '@fortawesome/free-solid-svg-icons'
import Footer from '../components/Footer'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function WishList() {
  const userWishList = useSelector(state => state.wishlistReducer);

  return (
    <>
      <Header />
      <div className='container-fluid p-5 mt-5'>
        {
          userWishList?.length > 0 ?

            <>
              <h1 className='fw-bold text-primary pt-5'>My Wishlist</h1>
              <div className="row pt-5">
                {
                  userWishList.map((product) => (
                    <div key={product?.id} className="col-md-3 my-2">
                  <Card>
                    <Card.Img variant="top" height={'250px'} src={product?.thumbnail} />
                    <Card.Body className='text-center'>
                      <Card.Title>{product?.title}</Card.Title>
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
                  ))
                }
              </div>
            </>

            :
            <div style={{ minHeight: '80vh' }} className='d-flex justify-content-center align-items-center flex-column'>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ98ZGI18vEg9Fqc7JNS-Muquo-TOQuyVZPfA&s" alt="Empty Cart" />
              <h3 className='mt-4'>Your Wishlist is Empty!!</h3>
              <Link to={'/'} className='btn btn-primary'>Shop Now</Link>
            </div>
        }
      </div>
      <Footer />
    </>
  )
}

export default WishList