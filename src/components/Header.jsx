import { faCartPlus, faHeart, faTruckFast } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Badge,  Nav, Navbar } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { searchProduct } from '../redux/slices/productSlice'


function Header() {
    //to get wishlist count from the redux store
    const userWishList = useSelector((state) => state.wishlistReducer);

    //to get items count from cart
    const userCart = useSelector((state) => state.cartReducer);

    const dispatch = useDispatch()
    

    return (
        <Navbar expand="lg" className="bg-primary fixed-top">
            <div className="container-fluid px-4">
                <Navbar.Brand>
                    <Link to="/" className='text-decoration-none text-light me-1 fs-3'><FontAwesomeIcon icon={faTruckFast} /> Daily Cart</Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto align-items-lg-center">
                        <Nav.Item className='me-2'>
                            <input type="text" className="form-control" placeholder='Search product...' onChange={(e)=>dispatch(searchProduct(e.target.value.toLowerCase()))}/>
                        </Nav.Item>
                        <Link to="/wishlist" className='text-decoration-none text-light me-4'><FontAwesomeIcon icon={faHeart} className='me-1'/>Wishlist <Badge bg="secondary">{userWishList.length}</Badge></Link>
                        <Link to="/cart" className='text-decoration-none text-light'><FontAwesomeIcon icon={faCartPlus} className='me-1'/>Cart <Badge bg="secondary">{userCart.length}</Badge></Link>
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    )
}

export default Header