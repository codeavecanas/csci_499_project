import React from 'react';

const Header = () => {
    return (
        <div className='navbar'>
            <ul className='nav-left'>
                <li className='nav-item'>
                    <Link to='/about'>
                        About
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/shop'>
                        Shop
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/treatments'>
                        Treatment
                    </Link>
                </li>
            </ul>
            <ul className='nav-center'>
                <li className='nav-item'>
                    <Link to='/'>
                        LAVINA ESTHETICS
                    </Link>
                </li>
            </ul>
            <ul className='nav-right'>
                <li className='nav-item'>
                    <Link to='/'>
                        Book
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/contact'>
                        Contact
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/signup'>
                        <UserProfile/>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Header;