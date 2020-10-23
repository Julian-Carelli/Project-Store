import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Header from './style'

class Navbar extends Component{
    render(){
        return(
            <Header>
                <div className="Navbar-row">
                    <div className="Navbar-row__brand">
                        <Link to="/">
                            <i class="Navbar-row__icon fas fa-home"></i>
                        </Link>
                        hola
                    </div>
                    <div className="Navbar-row__cart">
                        usuario
                        <Link to="/cart">
                            <i class="Navbar-row__icon fas fa-shopping-cart"></i>
                        </Link>
                    </div>
                </div>
            </Header>
        )
    }
}

export default Navbar