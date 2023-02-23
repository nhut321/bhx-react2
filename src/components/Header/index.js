import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import Sidebar from '../Sidebar'
import LoginBox from '../LoginBox'
import { MainContext } from '../../context/MainContext'

export default function Header() {
    const mainContext = useContext(MainContext)

    return (
        <div className="header">
            {/* <Sidebar /> */}
            <div className="header-left">
                <Link to='/'>
                    <div className="header-left__logo" style={{backgroundImage: `url(/image/bhx-image.png)`}}></div>
                </Link>
            </div>
            <div className="header-center">
                <div className="header-center__search">
                    <form className="header-center__search-form">
                        <input type="text" className="search-form__input" />
                        <div className="search-form__button" style={{
                            backgroundImage: 'url(./image/bhx-image.png)',
                            width: '18px',
                            height: '18px',
                            backgroundPosition: '-282px -33px',
                            backgroundSize: '500px auto',
                            margin: '0 15px'
                        }}></div>
                    </form>
                </div>
            </div>
            <div className="header-right">
                {
                    mainContext.loginBox 
                    ?
                    <LoginBox />
                    :
                    <></>
                }
                <div className="header-right__user" onClick={mainContext.OpenLoginBox}>
                    <i className="fa-solid fa-user"></i>
                    <span>Đăng nhập / Đăng ký</span>
                </div>
                <div className="header-right__cart">
                    <i className="fa-solid fa-cart-shopping"></i>
                    <span>Giỏ hàng</span>
                    <div className="cart-count">10</div>
                    <div className="header-right__cart-popup">
                        <ul className="header-right__cart-popup-list">

                            <div className="header-right__cart-popup-item">
                                <div className="cart-popup-item__img">
                                    <img src="./image/cart-img.png" alt="" />
                                </div>
                                <div className="cart-popup-item__text">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti?</p>
                                </div>
                                <div className="cart-popup-item__price">
                                    <span>999.000 </span>
                                    <sup>đ</sup>
                                </div>
                            </div>

                            <div className="header-right__cart-popup-item">
                                <div className="cart-popup-item__img">
                                    <img src="./image/cart-img.png" alt="" />
                                </div>
                                <div className="cart-popup-item__text">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti?</p>
                                </div>
                                <div className="cart-popup-item__price">
                                    <span>999.000 </span>
                                    <sup>đ</sup>
                                </div>
                            </div>

                            <div className="header-right__cart-popup-item">
                                <div className="cart-popup-item__img">
                                    <img src="./image/cart-img.png" alt="" />
                                </div>
                                <div className="cart-popup-item__text">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti?</p>
                                </div>
                                <div className="cart-popup-item__price">
                                    <span>999.000 </span>
                                    <sup>đ</sup>
                                </div>
                            </div>

                            <div className="header-right__cart-popup-item">
                                <div className="cart-popup-item__img">
                                    <img src="./image/cart-img.png" alt="" />
                                </div>
                                <div className="cart-popup-item__text">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti?</p>
                                </div>
                                <div className="cart-popup-item__price">
                                    <span>999.000</span>
                                    <sup>đ</sup>
                                </div>
                            </div>
                        </ul>
                        <button className="button primary" style={{margin: '0 10px 10px 10px'}}>Xem giỏ hàng</button>
                    </div>
                </div>
            </div>
        </div>
    )
}