import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../redux/slices/productSlice'

function Home() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, [])

  const { allProducts, loading, error } = useSelector((state) => state.productReducer)

  return (
    <>
      <Header />
      <div className='mt-5 container-fluid p-5'>
        {
          loading ?
            <div className='p-5 my-5 text-center'>
              <img width={'120px'} src="https://www.autopoint.com/wp-content/uploads/2022/07/autopoint-loading-svg.gif" alt="Products loading" />
              <p className='fw-bold fs-1 mt-2 text-primary'>Loading...</p>
            </div>
            :
            <div className="row pt-5">

              {
                allProducts?.length > 0 ? allProducts?.map((product) => (
                  <div key={product.id} className="col-md-3 my-2">
                    <Card>
                      <Card.Img variant="top" src={product?.thumbnail} />
                      <Card.Body className='text-center'>
                        <Card.Title>{product?.title.slice(0, 18)}</Card.Title>
                        <Link to={`/products/${product.id}/view`} className='btn btn-primary' variant="primary">View more</Link>
                      </Card.Body>
                    </Card>
                  </div>
                )) :
                  <p className='text-center w-full fw-bold fs-1 p-5'>Products not found</p>
              }

            </div>
        }
      </div>
      <Footer />
    </>
  )
}

export default Home;