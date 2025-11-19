import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { decrementCartItem, emptyCart, incrementCartItem, removeFromCart } from '../redux/slices/cartSlice'
import Swal from 'sweetalert2'

function Cart() {
  const [totalPrice, setTotalPrice] = useState(0)
  const userCart = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    setTotalPrice(userCart?.reduce((acc, pdt) => acc + pdt.totalPrice, 0.00).toFixed(2))
  }, [userCart])

  const handleChange = (e) => {
    // Handle quantity change
  }

  const handleDecrementCartItem = (product) => {
    if (product.quantity > 1) {
      dispatch(decrementCartItem(product.id))
      console.log(userCart);
    }
    else {
      console.log(userCart);
      dispatch(removeFromCart(product))
    }
  }

  const navigate = useNavigate()

  const handleCheckout = () => {
    Swal.fire({
      title: "Success! ",
      text: "Thank you for purchasing",
      icon: "success"
    });
    dispatch(emptyCart())
    navigate('/')
  }

  return (
    <>
      <Header />
      <div className='container-fluid p-5 mt-5' style={{ minHeight: "80vh" }}>
        <h1 className="fw-bold mb-4 mt-2" style={{ color: '#2b57d9' }}>Cart Summary</h1>
        {
          userCart.length > 0 ?
            <div className="row g-4">

              <div className="col-lg-8">

                <div className="p-4 border rounded bg-white">

                  <table className="table align-middle">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Image</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th></th>
                      </tr>
                    </thead>

                    <tbody>
                      {
                        userCart?.map((product, index) => (
                          <tr key={product?.id}>
                            <td>{++index}</td>
                            <td>{product?.title}</td>
                            <td>
                              <img src={product?.thumbnail} width="60" />
                            </td>
                            <td>
                              <div className="d-flex align-items-center">
                                <button className="btn btn-light border px-2 fw-bold " onClick={() => handleDecrementCartItem(product)}>-</button>
                                <input type="text" className="form-control text-center mx-2" style={{ width: "40px" }} value={product?.quantity} onChange={handleChange} />
                                <button className="btn btn-light border px-2 fw-bold " onClick={() => dispatch(incrementCartItem(product?.id))}>+</button>
                              </div>
                            </td>
                            <td>${product?.totalPrice}</td>
                            <td>
                              <button className="btn btn-light text-danger rounded" onClick={() => dispatch(removeFromCart(product))}>
                                <FontAwesomeIcon icon={faTrash} />
                              </button>
                            </td>
                          </tr>
                        ))
                      }

                    </tbody>
                  </table>

                  <div className="d-flex gap-3 mt-4 justify-content-end">
                    <button onClick={() => dispatch(emptyCart())} className="btn btn-danger px-3 fw-semibold rounded" style={{ fontSize: '14px' }}>EMPTY CART</button>
                    <Link to={'/'} className="btn btn-primary px-3 fw-semibold rounded" style={{ fontSize: '14px' }}>SHOP MORE</Link>
                  </div>

                </div>

              </div>
              <div className="col-lg-4">
                <div className="p-4 border rounded bg-white">

                  <h5 className="fw-bold mb-4 px-2 py-2">
                    Total Amount : $ {totalPrice}
                  </h5>

                  <button className="btn btn-success w-100 py-2 fs-5 fw-semibold" onClick={handleCheckout}>
                    CHECK OUT
                  </button>
                </div>
              </div>

            </div>
            :
            <div style={{ minHeight: '80vh' }} className='d-flex justify-content-center align-items-center flex-column'>
              <img src="https://bexcart.com/assets/images/empty-cart.gif" alt="Empty Cart" />
              <h3 className='mt-4'>Cart is Empty!</h3>
              <p className='mb-2 fs-5'>You dont have any product in your cart yet</p>
              <p>You sure will find many interesting products in teh "Shopping page"</p>
              <Link to={'/'} className='btn btn-primary'>Shop Now</Link>
            </div>
        }

      </div>
      <Footer />
    </>
  )
}

export default Cart