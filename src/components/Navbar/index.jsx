import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';

import {deleteUser} from '../../store/actions/userActions'

import Header from './style'
import Logo from '../../assets/images/logo.png'

class Navbar extends Component{
    
    signOut = () => {
        this.props.deleteUser()
    }


    render(){
        return(
            <Header>
                <div className="Navbar__content">
                    <div className="Navbar-brand">
                        <Link to={'/Project-Store/#'}>
                            <img src={Logo} className="Navbar-brand__logo" alt="Logo de Project Store"></img>
                        </Link>
                        <span className="Navbar-brand__title">Project Store</span>
                    </div>
                    <div className="Navbar-cart">
                        <ul className="Navbar-cart__menu">
                            <li className="Navbar-cart__user">
                                {this.props.userReducer.user.email && this.props.userReducer.user.username
                                    ?   <p className="Navbar-cart__text">{this.props.userReducer.user.username}</p>
                
                                    :   <p className="Navbar-cart__text">Usuario</p>
                                }
                                
                                <ul className="Navbar-cart__link">
                                    {this.props.userReducer.user.email && this.props.userReducer.user.username

                                        ?   

                                            <li className="Navbar-cart__login">
                                                <Link to="/Project-Store/login">
                                                    <p className="Navbar-cart__span" onClick={() => this.signOut()}>
                                                        Cerrar sesión
                                                    </p>
                                                </Link>
                                            </li>
                                        
                                        :   
                                            <>
                                            <li className="Navbar-cart__login"><Link to="/Project-Store/login"><p className="Navbar-cart__span">Iniciar sesión</p></Link></li>
                                            <li className="Navbar-cart__register"><Link to="/Project-Store/register"><p className="Navbar-cart__span">Registrarse</p></Link></li>
                                            </>
                                    }
                                    

                                </ul>
                            </li>
                        </ul>
                        <Link to="/Project-Store/cart">
                            <i className="Navbar-cart__icon fas fa-shopping-cart"></i>
                        </Link>
                        {this.props.userReducer.user.email && (
                            <div className="Navbar-cart__count">
                                <span className="Navbar-cart__number">{this.props.cartReducer.cart.length}</span>
                            </div>
                        )}
                        
                    </div>
                </div>
            </Header>
        )
    }
}

const mapStateToProps = ({userReducer, cartReducer}) => ({
    userReducer,
    cartReducer,
});

const mapDispatchToProps = {
    deleteUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
