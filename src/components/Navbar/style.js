import styled from 'styled-components'


const Header = styled.div`
    
    
    .Navbar__content {
        display:flex;
        justify-content:space-between;
        height:50px;
        padding:10px 80px;
        background-color:#373a40;
    }
    
    .Navbar-brand__logo {
        width:20px;
    }

    .Navbar-brand__title {
        color:#ffffff;
        font-size:${props => props.theme.fontSizeText.min};
        font-weight:${props => props.theme.fontWeight.bold};
    }

    .Navbar-cart {
        display:flex;
        align-items:start;
        margin:0px 10px;
    }

    .Navbar-cart__menu {
        display:flex;
        justify-content:center;
        margin:0px 10px;
        padding:0px;
        width:120px;
        z-index:900;    
    }

    .Navbar-cart__user {
        display:flex;
        align-items:center;
        flex-direction:column;
        text-align:center;
        padding:0px;
        margin:0px;
    }

    .Navbar-cart__user:hover .Navbar-cart__link {
        display:block;
    }

    .Navbar-cart__text {
        color:#ffffff;
        font-size:${props => props.theme.fontSizeText.min};
        font-weight:${props => props.theme.fontWeight.medium};
    }

    .Navbar-cart__link {
        display:none;
        padding:10px;
        background-color:#373a40;
        
    }

    .Navbar-cart__login {
        list-style:none;
    }

    .Navbar-cart__register {
        list-style:none;
        text-align:center;
    }

    .Navbar-cart__span {
        color:#ffffff;
        text-decoration:none;
        &:hover {
            color:#eeeeee;
        }
    }

    .Navbar-cart__icon {
        color: #ffffff;
        &:hover {
            color:#eeeeee;
        }
    }

`

export default Header
