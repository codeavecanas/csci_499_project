import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "../styles/Header.css"

import { useDispatch, useSelector } from 'react-redux'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
// import { FaShoppingCart, FaUserTie } from 'react-icons/fa';
import { logout } from '../actions/userActions'

const Header = () => {

    const history = useNavigate()
    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const dispatch = useDispatch()

    const logoutHandler = () => {
        dispatch(logout())
        history('/login')
    }


    return (
        <div className='header'>
            <Link to='/'>
                <div className='logo'>
                    <ul>
                        <li className='nav-item'>
                        </li>
                    </ul>
                </div>
            </Link>
            <ul className='navbar'>
                <li className='nav-item'>
                    <Link to='/search-cars' className='link'>
                        SEARCH CARS
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/how-it-works' className='link'>
                        HOW IT WORKS
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/how-it-works' className='link'>
                        RIGHT CAR FOR YOU?
                    </Link>
                </li>
                
                {userInfo ? (<li className='nav-item'>
                    <Link to='/logout' className='link' onClick={()=>logoutHandler()}> 
                        LOGOUT
                    </Link>
                </li>):( <li className='nav-item'>
                    <Link to='/login' className='link'>
                        LOGIN
                    </Link>
                </li>)}
               

            </ul>
        </div>
    );
};

export default Header;