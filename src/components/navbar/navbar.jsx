import React from 'react';
import logo from '../../assets/imgs/desktop-computer.png';
import './navbar.scss';
import {Link} from 'react-router-dom';

const Navbar = (props) => (
    <div className='navbar'>
        <p className='logo-container'>
            <img className='logo' src={logo}/>
        </p>
        <div className='options' >
            <Link a className='option' to='/'>
                TRANG CHỦ
            </Link>
            <Link a className='option' to='/introduce'>
                GIỚI THIỆU
            </Link>
            <Link a className='option' to='/contact'>
                LIÊN HỆ
            </Link>
            <Link a className='option' to='/login'>
                ĐĂNG NHẬP
            </Link>
        </div>
    </div>
)

export default Navbar;