import { faFacebook, faGithub, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faArrowRight, faPhone, faTruckFast } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
      <footer className="mt-5 text-white bg-primary">
        <div className="container-fluid px-4 py-5">

          <div className="row">

            {/* LEFT SECTION */}
            <div className="col-md-4 mb-4">
              <h4 className="fw-bold">
                <Link to="/" className="text-white text-decoration-none">
                  <FontAwesomeIcon icon={faTruckFast} className="me-2" />
                  Daily cart
                </Link>
              </h4>
              <p className="mt-2">
                Designed and built with all the love in the world by
                the Luminar team with the help of our contributors.
                <br />
                Code licensed Luminar, docs CC BY 3.0.
                <br />
                Currently v5.3.2.
              </p>
            </div>

            {/* LINKS */}
            <div className="col-md-2 mb-4">
              <h5 className="fw-bold">Links</h5>
              <ul className="list-unstyled mt-3">
                <li>
                  <a
                    href="/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-decoration-none"
                  >
                    Landing Page
                  </a>
                </li>
                <li>
                  <a
                    href="/home"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-decoration-none"
                  >
                    Home Page
                  </a>
                </li>
                <li>
                  <a
                    href="/history"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-decoration-none"
                  >
                    Watch History Page
                  </a>
                </li>
              </ul>
            </div>

            {/* GUIDES */}
            <div className="col-md-2 mb-4">
              <h5 className="fw-bold">Guides</h5>
              <ul className="list-unstyled mt-3">
                <li>
                  <a
                    href="/react"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-decoration-none"
                  >
                    React
                  </a>
                </li>
                <li>
                  <a
                    href="/bootstrap"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-decoration-none"
                  >
                    React Bootstrap
                  </a>
                </li>
                <li>
                  <a
                    href="/router"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-decoration-none"
                  >
                    React Router
                  </a>
                </li>
              </ul>
            </div>

            {/* CONTACT */}
            <div className="col-md-4 mb-4">
              <h5 className="fw-bold">Contact Us</h5>

              <div className="d-flex mt-3">
                <input
                  type="text"
                  className="form-control rounded"
                  placeholder="Enter your email here"
                />
                <button className="btn">
                  <FontAwesomeIcon className='text-light' icon={faArrowRight} />
                </button>
              </div>

              {/* SOCIAL ICONS */}
              <div className="d-flex gap-4 mt-4 fs-5">
                <a href="" target="_blank" className='text-light'><FontAwesomeIcon icon={faTwitter} /></a>
                <a href="" target="_blank" className='text-light'><FontAwesomeIcon icon={faInstagram} /></a>
                <a href="" target="_blank" className='text-light'><FontAwesomeIcon icon={faFacebook} /></a>
                <a href="" target="_blank" className='text-light'><FontAwesomeIcon icon={faLinkedin} /></a>
                <a href="" target="_blank" className='text-light'><FontAwesomeIcon icon={faGithub} /></a>
                <a href="" target="_blank" className='text-light'><FontAwesomeIcon icon={faPhone} /></a>
              </div>
            </div>
          </div>

          <div className="text-center mt-4 pt-3 border-top">
            Copyright © July 2024 Batch, Daily Cart.
            Built with React Redux.
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer