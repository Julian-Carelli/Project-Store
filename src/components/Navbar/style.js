import styled from 'styled-components'


const Header = styled.div`
    
    
    .Navbar__content {
        display:flex;
        justify-content:space-between;
        height:50px;
        padding:10px 20px;
        background-color:#373a40;
        @media screen and (max-width:${props => props.theme.mediaQueries.phone_min}) and (min-width:0px){
            justify-content:space-around;
        }
        @media screen and (max-width:${props => props.theme.mediaQueries.phone_max}) and (min-width:${props => props.theme.mediaQueries.phone_min}){
            justify-content:space-around;
        }
        @media screen and (max-width:${props => props.theme.mediaQueries.tablet}) and (min-width:${props => props.theme.mediaQueries.phone_max}){
            justify-content:space-around;
        }
    }

    .Navbar-brand {
        @media screen and (max-width:${props => props.theme.mediaQueries.phone_min}) and (min-width:0px){
            display:flex;
            align-items:center;
            font-size:12px;
            width:50%;

        }
        @media screen and (max-width:${props => props.theme.mediaQueries.phone_max}) and (min-width:${props => props.theme.mediaQueries.phone_min}){
            display:flex;
            align-items:center;
            font-size:12px;
            width:50%;
        }
        @media screen and (max-width:${props => props.theme.mediaQueries.tablet}) and (min-width:${props => props.theme.mediaQueries.phone_max}){
            display:flex;
            align-items:center;
            font-size:12px;
            width:50%;
        }
    }
    
    .Navbar-brand__logo {
        width:20px;
    }

    .Navbar-brand__title {
        color:#ffffff;
        font-size:${props => props.theme.fontSizeText.min};
        font-weight:${props => props.theme.fontWeight.bold};
        @media screen and (max-width:${props => props.theme.mediaQueries.phone_min}) and (min-width:0px){
            display:none;
        }
        @media screen and (max-width:${props => props.theme.mediaQueries.phone_max}) and (min-width:${props => props.theme.mediaQueries.phone_min}){
            display:none;
        }
        @media screen and (max-width:${props => props.theme.mediaQueries.tablet}) and (min-width:${props => props.theme.mediaQueries.phone_max}){
            display:none;
        }
        
    }

    .Navbar-cart {
        display:flex;
        align-items:center;
        @media screen and (max-width:${props => props.theme.mediaQueries.phone_min}) and (min-width:0px){
            font-size:12px;
            width:60%;
        }
        @media screen and (max-width:${props => props.theme.mediaQueries.phone_max}) and (min-width:${props => props.theme.mediaQueries.phone_min}){
            font-size:12px;
            width:60%;
        }
        @media screen and (max-width:${props => props.theme.mediaQueries.tablet}) and (min-width:${props => props.theme.mediaQueries.phone_max}){
            font-size:12px;
            width:50%;
        }
    }

    .Navbar-cart__menu {
        display:flex;
        justify-content:center;
        padding:0px;
        margin:auto;
        width:120px;
        z-index:900;
        @media screen and (max-width:${props => props.theme.mediaQueries.phone_min}) and (min-width:0px){
            padding:6px;
        }
        @media screen and (max-width:${props => props.theme.mediaQueries.phone_max}) and (min-width:${props => props.theme.mediaQueries.phone_min}){
            padding:6px;
        }
        @media screen and (max-width:${props => props.theme.mediaQueries.tablet}) and (min-width:${props => props.theme.mediaQueries.phone_max}){
            padding:6px;
        }  
    }

    .Navbar-cart__user {
        display:flex;
        align-items:center;
        flex-direction:column;
        text-align:center;
        padding:0px;
        margin:0px;
        @media screen and (max-width:${props => props.theme.mediaQueries.phone_min}) and (min-width:0px){
            font-size:12px;
        }
        @media screen and (max-width:${props => props.theme.mediaQueries.phone_max}) and (min-width:${props => props.theme.mediaQueries.phone_min}){
            font-size:12px;
        }
        @media screen and (max-width:${props => props.theme.mediaQueries.tablet}) and (min-width:${props => props.theme.mediaQueries.phone_max}){
            font-size:12px;
        }
        
    }

    .Navbar-cart__user:hover .Navbar-cart__link {
        padding:20px 0px;
        display:block;
        @media screen and (max-width:${props => props.theme.mediaQueries.phone_min}) and (min-width:0px){
            padding:20px 0px;
        }
        @media screen and (max-width:${props => props.theme.mediaQueries.phone_max}) and (min-width:${props => props.theme.mediaQueries.phone_min}){
            padding:20px 0px;
        }
        @media screen and (max-width:${props => props.theme.mediaQueries.tablet}) and (min-width:${props => props.theme.mediaQueries.phone_max}){
            padding:20px 0px;
        }
    }

    .Navbar-cart__text {
        color:#ffffff;
        font-size:${props => props.theme.fontSizeText.min};
        font-weight:${props => props.theme.fontWeight.medium};
        @media screen and (max-width:${props => props.theme.mediaQueries.phone_min}) and (min-width:0px){
            margin:auto;
            font-size:${props => props.theme.fontSizeText.min};
        }
        @media screen and (max-width:${props => props.theme.mediaQueries.phone_max}) and (min-width:${props => props.theme.mediaQueries.phone_min}){
            margin:auto;
            font-size:${props => props.theme.fontSizeText.min};
        }
        @media screen and (max-width:${props => props.theme.mediaQueries.tablet}) and (min-width:${props => props.theme.mediaQueries.phone_max}){
            margin:auto;
            font-size:${props => props.theme.fontSizeText.medium};
        }
    }

    .Navbar-cart__link {
        display:none;
        padding:2px;
        background-color:#373a40;
        
    }

    .Navbar-cart__icon {
        padding:0px 30px;
        font-size:${props => props.theme.fontSizeText.medium};
        @media screen and (max-width:${props => props.theme.mediaQueries.phone_min}) and (min-width:0px){
            font-size:${props => props.theme.fontSizeText.min};
        }
        @media screen and (max-width:${props => props.theme.mediaQueries.phone_max}) and (min-width:${props => props.theme.mediaQueries.phone_min}){
            font-size:${props => props.theme.fontSizeText.min};
        }
        @media screen and (max-width:${props => props.theme.mediaQueries.tablet}) and (min-width:${props => props.theme.mediaQueries.phone_max}){
            margin:auto;
            font-size:${props => props.theme.fontSizeText.medium};
        }
    }

    .Navbar-cart__count {
        display:flex;
        justify-content:center;
        align-items:center;
        max-width:25px;
        width:100%;
        max-height:25px;
        height:100%;
        border-radius:50%;
        text-align:center;
        background-color:white;
        @media screen and (max-width:${props => props.theme.mediaQueries.phone_min}) and (min-width:0px){
            font-size:12px;
            width:15px;
            height:15px;

        }
        @media screen and (max-width:${props => props.theme.mediaQueries.phone_max}) and (min-width:${props => props.theme.mediaQueries.phone_min}){
            font-size:12px;
            width:15px;
            height:15px;


        }
        @media screen and (max-width:${props => props.theme.mediaQueries.tablet}) and (min-width:${props => props.theme.mediaQueries.phone_max}){
            font-size:12px;
            width:20px;
            height:20px;
        }
    }

    .Navbar-cart__number {
        font-size:${props => props.theme.fontSizeText.min};
        font-weight:${props => props.theme.fontWeight.bold};
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
