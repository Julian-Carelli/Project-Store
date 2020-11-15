import styled from 'styled-components'

import slider from '../Figure/slider'

const LoginStyled = styled.div`
    height:100vh;
    background-color:#eeeeee;
    @media screen and (max-width: 1024px) and (min-width:0px){
        height:auto;
    }
    .Login {
        display:flex;
        text-align:start;
        justify-content:center;
        align-items:center;
        padding:0px 90px;
        height:100vh;
        @media screen and (max-width:768px) and (min-width:0px){
            height:auto;
            padding:0px 20px;
        }
        @media screen and (max-width:${props => props.theme.mediaQueries.desktop}) and (min-width:${props => props.theme.mediaQueries.tablet}){
            height:100vh;
            padding:0px 40px;
        }
    }

    .Login__row {
        display:flex;
        justify-content:space-beetween;
        align-items:center;
        padding:90px 0px;
        @media screen and (max-width: 768px) and (min-width:0px){
            flex-direction:column-reverse;
        }
    }

    .Login-badge {
        padding:0px 20px;
        @media screen and (max-width:1024px) and (min-width:0px){
            padding:0px 20px;
        }
    }

    .Login-badge__name {
        padding:20px 0px;
        @media screen and (max-width:${props => props.theme.mediaQueries.phone_min}) and (min-width:0px){
            font-size:11px;
        }
        @media screen and (max-width:${props => props.theme.mediaQueries.phone_max}) and (min-width:${props => props.theme.mediaQueries.phone_min}){
            font-size:12px;
        }
        @media screen and (max-width:${props => props.theme.mediaQueries.tablet}) and (min-width:${props => props.theme.mediaQueries.phone_max}){
            font-size:13px;
        }
        @media screen and (max-width:${props => props.theme.mediaQueries.desktop}) and (min-width:${props => props.theme.mediaQueries.tablet}){
            font-size:14px;
        }
    }

    .Login-badge__title {
        font-size:${props => props.theme.fontSizeTitle.medium};
        font-weight:${props => props.theme.fontWeight.regular};
        @media screen and (max-width: 480px) and (min-width:0px){
            font-size:${props => props.theme.fontSizeText.medium};
        }
        @media screen and (max-width: 1024px) and (min-width: 480px){
            font-size:${props => props.theme.fontSizeTitle.min};
        }
    }

    .Login-badge__background {
        overflow:hidden;
        max-width:600px;
        max-height:400px;
        width:100%;
        height:100%;
        border-radius:20px;
        @media screen and (max-width: 768px) and (min-width:0px){
            width:80%;
        }
    }

    .Login-badge__figure {
        display:flex;
        position:relative;
        width:100%;
        animation:20s ${slider} infinite;
    }

    .Login-badge__img {
        float:left;
        width:100%;
        height:100%;
        border-radius:20px;
        filter: grayscale(1);
        flex-shrink: 0;
    }

    .Login-form {
        paddin-right:20px;

    }

    .Login-form__name {
        @media screen and (max-width:${props => props.theme.mediaQueries.phone_min}) and (min-width:0px){
            font-size:12px;
        }
        @media screen and (max-width:${props => props.theme.mediaQueries.phone_max}) and (min-width:${props => props.theme.mediaQueries.phone_min}){
            font-size:13px;
        }
        @media screen and (max-width:${props => props.theme.mediaQueries.tablet}) and (min-width:${props => props.theme.mediaQueries.phone_max}){
            font-size:14px;
        }
        @media screen and (max-width:${props => props.theme.mediaQueries.desktop}) and (min-width:${props => props.theme.mediaQueries.tablet}){
            font-size:15px;
        }
        
        
    }

    .Login-form__title {
        font-size:${props => props.theme.fontSizeTitle.max};
        font-weight:${props => props.theme.fontWeight.bold};
        @media screen and (max-width:480px) and (min-width:0px){
            font-size:${props => props.theme.fontSizeTitle.min};
        }
        @media screen and (max-width:1024px) and (min-width:480px){
            font-size:${props => props.theme.fontSizeTitle.medium};
        }
    }

    .Login-form__info {
        @media screen and (max-width:${props => props.theme.mediaQueries.phone_min}) and (min-width:0px){
            font-size:11px;
        }
        @media screen and (max-width:${props => props.theme.mediaQueries.phone_max}) and (min-width:${props => props.theme.mediaQueries.phone_min}){
            font-size:12px;
        }
        @media screen and (max-width:${props => props.theme.mediaQueries.tablet}) and (min-width:${props => props.theme.mediaQueries.phone_max}){
            font-size:13px;
        }
        @media screen and (max-width:${props => props.theme.mediaQueries.desktop}) and (min-width:${props => props.theme.mediaQueries.tablet}){
            font-size:14px;
        }
        
    }
    

    .Login-form__email {
        padding:5px 0px;
        font-size:${props => props.theme.fontSizeText.min};
    }

    .Login-form__password {
        padding:5px 0px;
        font-size:${props => props.theme.fontSizeText.min};
    }

    .Login-form__label-checkbox {
        margin-left:20px;
        font-size:${props => props.theme.fontSizeText.min};
        font-weight:${props => props.theme.fontWeight.regular};
    }

    .Login-form__label {
        font-size:${props => props.theme.fontSizeText.min};
        font-weight:${props => props.theme.fontWeight.regular};
    }

    .Login-form__input {
        font-size:${props => props.theme.fontSizeText.min};
        font-weight:${props => props.theme.fontWeight.regular};
    }

    .Login-form__error {
        max-width:600px;
        width:100%;
        @media screen and (max-width:${props => props.theme.mediaQueries.phone_min}) and (min-width:0px){
            font-size:11px;
        }
        @media screen and (max-width:${props => props.theme.mediaQueries.phone_max}) and (min-width:${props => props.theme.mediaQueries.phone_min}){
            font-size:12px;
        }
        @media screen and (max-width:${props => props.theme.mediaQueries.tablet}) and (min-width:${props => props.theme.mediaQueries.phone_max}){
            font-size:13px;
        }
        @media screen and (max-width:${props => props.theme.mediaQueries.desktop}) and (min-width:${props => props.theme.mediaQueries.tablet}){
            font-size:14px;
        }
    }

    .Login-form__text {
        font-size:${props => props.theme.fontSizeText.min};
        font-weight:${props => props.theme.fontWeight.regular};
        width:100%;
        @media screen and (max-width:${props => props.theme.mediaQueries.phone_min}) and (min-width:0px){
            line-height:15px;
        }
        @media screen and (max-width:${props => props.theme.mediaQueries.phone_max}) and (min-width:${props => props.theme.mediaQueries.phone_min}){
            line-height:15px;
        }
        @media screen and (max-width:${props => props.theme.mediaQueries.tablet}) and (min-width:${props => props.theme.mediaQueries.phone_max}){
            line-height:20px;
        }
    }

    .Login-form__request {
        margin:30px 0px;
        @media screen and (max-width:${props => props.theme.mediaQueries.phone_min}) and (min-width:0px){
            font-size:11px;
        }
        @media screen and (max-width:${props => props.theme.mediaQueries.phone_max}) and (min-width:${props => props.theme.mediaQueries.phone_min}){
            font-size:12px;
        }
        @media screen and (max-width:${props => props.theme.mediaQueries.tablet}) and (min-width:${props => props.theme.mediaQueries.phone_max}){
            font-size:13px;
        }
        @media screen and (max-width:${props => props.theme.mediaQueries.desktop}) and (min-width:${props => props.theme.mediaQueries.tablet}){
            font-size:14px;
        }
    }

    .Login-form__button {
        font-size:${props => props.theme.fontSizeText.min};
        font-weight:${props => props.theme.fontWeight.regular}; 
    }

    .Login-form__links {
        @media screen and (max-width:${props => props.theme.mediaQueries.phone_min}) and (min-width:0px){
            font-size:11px;
        }
        @media screen and (max-width:${props => props.theme.mediaQueries.phone_max}) and (min-width:${props => props.theme.mediaQueries.phone_min}){
            font-size:12px;
        }
        @media screen and (max-width:${props => props.theme.mediaQueries.tablet}) and (min-width:${props => props.theme.mediaQueries.phone_max}){
            font-size:13px;
        }
        @media screen and (max-width:${props => props.theme.mediaQueries.desktop}) and (min-width:${props => props.theme.mediaQueries.tablet}){
            font-size:14px;
        }
    }

    .Login-form__register {
        font-size:${props => props.theme.fontSizeText.min};
        font-weight:${props => props.theme.fontWeight.regular};
    }

    .Login-form__login {
        font-size:${props => props.theme.fontSizeText.min};
        font-weight:${props => props.theme.fontWeight.regular};
    }
`

export default LoginStyled