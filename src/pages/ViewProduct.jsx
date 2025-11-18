import { faCartPlus, faHeart, faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addToWishList } from '../redux/slices/wishlistSlice'
import Swal from 'sweetalert2'

function ViewProduct() {
  //get parameter from url

  const {id} = useParams();

  //state to store product details
  const [product, setProduct] = useState({});

  useEffect(() => {
    getProductDetails();
  },[])

  const getProductDetails = async ()=>{
    const allProducts = JSON.parse(sessionStorage.getItem('products'))
    setProduct(allProducts?.find(item=>item.id==id));
   
  }

  const dispatch = useDispatch();
  const userWishList = useSelector((state) => state.wishlistReducer);
  const handleAddToWishList = (product) => {
    const existingProduct = userWishList.find(item => item.id == product.id);
    if (!existingProduct) {
      dispatch(addToWishList(product));
    }
    else{
      Swal.fire({
        title: "Sorry! ",
        text: 'The product is already in your wishlist',
        icon: "error"
      });
    }
  }
  

  //action discpatch to get single product details
  // the below implementation is just for structure demo
  // we are going to take product details from session storage
  /*const dispatch = useDispatch();
  const {allProducts} = useSelector((state) => state.productReducer);
  const [product, setProduct] = useState({});
    useEffect(() => {
    dispatch(getProduct());
  },[id])
  const getProduct = async ()=>{
  }*/

  return (
    <>
      <Header />
      <div className="py-5 my-5 container-fluid">
        <div className='row my-5'>
          {/* LEFT SECTION - IMAGE */}
          <Col md={5} className="d-flex justify-content-center align-items-start">
            <img
              src={product?.thumbnail}
              alt="Essence Mascara"
              style={{ width: "80%", objectFit: "contain" }}
            />
          </Col>

          {/* RIGHT SECTION - PRODUCT INFO */}
          <Col md={7}>
            <h1 className="fw-bold">{product?.title}</h1>
            <h3 className="text-danger fw-bold">${product?.price}</h3>

            <p className='mb-1'><strong>Brand :</strong> {product?.brand}</p>
            <p className='mb-1'><strong>Category :</strong> {product?.category}</p>
            <p>
              <strong>Description :</strong> {product?.description}
            </p>

            {/* BUTTONS */}
            <div className="d-flex gap-3 my-4">
              <Button variant="primary" onClick={() => handleAddToWishList(product)}>
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
            {
              product?.reviews?.length > 0 ? product.reviews.map((review,index) => (
                <div key={index} className="p-3 my-2 shadow-sm border rounded">
              <strong>{review?.reviewerName} :</strong> {review?.comment} <br />
              <div className='d-flex align-items-center'>
                <p className='mb-0'>Rating :</p>
                {
                  [...Array(review?.rating)].map((_, i) => (
                    <FontAwesomeIcon key={i} icon={faStar} className="text-warning ms-2" />
                  ))
                }
              </div>
            </div>
              ))

              :

              <p className='fw-bold fs-2 text-center'>No Reviews Found</p>
            }
            
            
          </Col>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default ViewProduct