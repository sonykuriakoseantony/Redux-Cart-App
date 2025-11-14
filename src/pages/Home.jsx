import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import { useDispatch } from 'react-redux'
import { getAllProducts } from '../redux/slices/productSlice'

function Home() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  },[])

  const [products, setProducts] = useState([])

  return (
    <>
      <Header />
      <div className='mt-5 container-fluid p-5'>
        <div className="row pt-5">
          <div className="col-md-3 my-2">
            <Card>
              <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ98ZGI18vEg9Fqc7JNS-Muquo-TOQuyVZPfA&s" />
              <Card.Body className='text-center'>
                <Card.Title>Card Title</Card.Title>
                <Link to={`/products/1/view`} className='btn btn-primary' variant="primary">View more</Link>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Home;