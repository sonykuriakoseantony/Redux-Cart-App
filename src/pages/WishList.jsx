import React from 'react'
import Header from '../components/Header'
import { Card } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faHeartCircleXmark } from '@fortawesome/free-solid-svg-icons'
import Footer from '../components/Footer'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeFromWishList } from '../redux/slices/wishlistSlice'
import { addToCart } from '../redux/slices/cartSlice'
import Swal from 'sweetalert2'

function WishList() {
  const userWishList = useSelector(state => state.wishlistReducer);
  const userCart = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();

  // Handle only remove from wishlist
  const handleRemoveFromWishList = (product) => {
    dispatch(removeFromWishList(product));
  }

  // Handle add to cart from wishlist and remove the same from wishlist
  const handleAddToCart = (product) => {
    const existingProduct = userCart?.find(item => item.id == product.id);
    dispatch(addToCart(product));
    Swal.fire({
      title: "Success! ",
      text: existingProduct ? `Product quantity updated in your cart` : 'Product added to your cart',
      icon: "success"
    });
    dispatch(removeFromWishList(product));
  }

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
                            <button className='btn' onClick={() => handleRemoveFromWishList(product)}>
                              <FontAwesomeIcon className='text-danger fs-3' icon={faHeartCircleXmark} />
                            </button>
                            <button className='btn' onClick={()=> handleAddToCart(product)}>
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
              <img src="https://bexcart.com/assets/images/empty-cart.gif" alt="Empty Cart" />
              <h3 className='mt-4'>Wishlist is Empty!</h3>
              <p className='mb-2 fs-5'>You dont have any product in your wishlist yet</p>
              <p>You sure will find many interesting products in teh "Shopping page"</p>
              <Link to={'/'} className='btn btn-primary'>Shop Now</Link>
            </div>
        }
      </div>
      <Footer />
    </>
  )
}

export default WishList