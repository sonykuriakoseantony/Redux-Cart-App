import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../redux/slices/productSlice'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight, faBackward, faForward } from '@fortawesome/free-solid-svg-icons'

function Home() {
  const dispatch = useDispatch();
  const { allProducts, loading, error } = useSelector((state) => state.productReducer)
  useEffect(() => {
    dispatch(getAllProducts());
  }, [])

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;
  const totalPages = Math.ceil(allProducts?.length / productsPerPage);
  const currentPageLastIndex = currentPage * productsPerPage;
  const currentPageFirstIndex = currentPageLastIndex - productsPerPage;
  const visibleProductsArray = allProducts?.slice(currentPageFirstIndex, currentPageLastIndex);
  
  const navigateToNext = ()=>{
    if(currentPage != totalPages){
      setCurrentPage(currentPage+1)
    }
  }

  const navigateToLast = ()=>{
    if(currentPage != totalPages){
      setCurrentPage(totalPages)
    }
  }
  const navigateToPrev = ()=>{
    if(currentPage != 1){
      setCurrentPage(currentPage-1)
    }
  }

  const navigateToFirst = ()=>{
    if(currentPage != 1){
      setCurrentPage(1)
    }
  }

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
                allProducts?.length > 0 ? visibleProductsArray?.map((product) => (
                  <div key={product.id} className="col-md-3 my-2">
                    <Card>
                      <Card.Img variant="top" src={product?.thumbnail} />
                      <Card.Body className='text-center'>
                        <Card.Title>{product?.title.slice(0, 18)}</Card.Title>
                        <Link to={`/products/${product.id}/view`} className='btn btn-primary' variant="primary">View Product</Link>
                      </Card.Body>
                    </Card>
                  </div>
                )) :
                  <p className='text-center w-full fw-bold fs-1 p-5'>Products not found</p>
              }

              <div className='text-center fw-bold my-3 pt-5'>
                <button className="btn">
                  <FontAwesomeIcon icon={faBackward} onClick={navigateToFirst}/>
                </button>
                <button className="btn" onClick={navigateToPrev} disabled={currentPage==1}>
                  <FontAwesomeIcon icon={faAngleLeft} />
                </button>
                {currentPage} of {totalPages}
                <button className="btn" onClick={navigateToNext} disabled={currentPage==totalPages}>
                  <FontAwesomeIcon icon={faAngleRight} />
                </button>
                <button className="btn">
                  <FontAwesomeIcon icon={faForward} onClick={navigateToLast}/>
                </button>
              </div>

            </div>
        }
      </div>
      <Footer />
    </>
  )
}

export default Home;