import React, {Component} from 'react'
import {Link} from 'react-router-dom'

import Header from './style'
import Logo from '../../assets/images/logo.png'

class Navbar extends Component{
    render(){
        return(
            <Header>
                <div className="Navbar__content">
                    <div className="Navbar-brand">
                        <Link to="/">
                            <img src={Logo} className="Navbar-brand__logo" alt="Logo de Project Store"></img>
                        </Link>
                        <span className="Navbar-brand__title">Project Store</span>
                    </div>
                    <div className="Navbar-cart">
                        <ul className="Navbar-cart__menu">
                            <li className="Navbar-cart__user"><p className="Navbar-cart__text">Usuario</p>
                                <ul className="Navbar-cart__link">
                                    <li className="Navbar-cart__login"><Link to="/login"><p className="Navbar-cart__span">Iniciar sesión</p></Link></li>
                                    <li className="Navbar-cart__register"><Link to="/register"><p className="Navbar-cart__span">Registrarse</p></Link></li>
                                </ul>
                            </li>
                        </ul>
                        <Link to="/cart">
                            <i className="Navbar-cart__icon fas fa-shopping-cart"></i>
                        </Link>
                    </div>
                </div>
            </Header>
        )
    }
}

export default Navbar