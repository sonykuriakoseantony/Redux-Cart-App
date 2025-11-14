import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

function Cart() {

  const handleChange = (e) => {
    // Handle quantity change
  }
  return (
    <>
      <Header />
      <div className='container-fluid p-5 mt-5' style={{ minHeight: "80vh" }}>
        <h1 className="fw-bold mb-4 mt-2" style={{color :'#2b57d9'}}>Cart Summary</h1>

        <div className="row g-4">

         {/* LEFT: CART TABLE */}
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
                  <tr>
                    <td>1</td>
                    <td>Eyeshadow Palette with Mirror</td>
                    <td>
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ98ZGI18vEg9Fqc7JNS-Muquo-TOQuyVZPfA&s" width="60" />
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <button className="btn btn-light border px-2 fw-bold ">-</button>
                        <input type="text" className="form-control text-center mx-2" style={{width:"60px"}} value={1} onChange={handleChange}/>
                          <button className="btn btn-light border px-2 fw-bold ">+</button>
                      </div>
                    </td>
                    <td>$ 19.99</td>
                    <td>
                      <button className="btn btn-light text-danger rounded">
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>

              <div className="d-flex gap-3 mt-4 justify-content-end">
                <button className="btn btn-danger px-3 fw-semibold rounded" style={{fontSize:'14px'}}>EMPTY CART</button>
                <button className="btn btn-primary px-3 fw-semibold rounded" style={{fontSize:'14px'}}>SHOP MORE</button>
              </div>

            </div>

          </div>
          {/* RIGHT: TOTAL AMOUNT */}
          <div className="col-lg-4">
            <div className="p-4 border rounded bg-white">

              <h5 className="fw-bold mb-4 px-2 py-2">
                Total Amount : $ 19.99
              </h5>

              <button className="btn btn-success w-100 py-2 fs-5 rounded fw-semibold">
                CHECK OUT
              </button>
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </>
  )
}

export default Cart