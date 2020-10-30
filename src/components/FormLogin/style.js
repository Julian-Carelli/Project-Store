import styled from 'styled-components'

import slider from '../Figure/slider'

const LoginStyled = styled.div`
    height:100vh;
    background-color:#eeeeee;

    .Login {
        display:flex;
        text-align:start;
        align-items:center;
        height:100vh;
    }

    .Login__row {
        display:flex;
        justify-content:space-beetween;
        align-items:center;
    }

    .Login-form {
        margin-right:20px;
    }

    .Login-form__title {
        font-size:${props => props.theme.fontSizeTitle.max};
        font-weight:${props => props.theme.fontWeight.bold};
    }
    
    .Login-form__label {
        font-size:${props => props.theme.fontSizeText.medium};
        font-weight:${props => props.theme.fontWeight.regular};
    }

    .Login-badge {
        margin-left:20px;
    }

    .Login-badge__name {
        padding:20px 0px;
    }

    .Login-badge__title {
        font-size:${props => props.theme.fontSizeTitle.medium};
        font-weight:${props => props.theme.fontWeight.regular};
    }

    .Login-badge__background {
        overflow:hidden;
        max-width:600px;
        max-height:400px;
        width:100%;
        height:100%;
        border-radius:20px;
        
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

    .Login-form__email {
        padding:5px 0px;
    }

    .Login-form__password {
        padding:5px 0px;
    }

    .Login-form__label-checkbox {
        margin-left:20px;
        font-size:${props => props.theme.fontSizeText.min};
        font-weight:${props => props.theme.fontWeight.regular};
    }

    .Login-form__request {
        margin:30px 0px;
    }

    .Login-form__button {
        font-size:${props => props.theme.fontSizeText.min};
        font-weight:${props => props.theme.fontWeight.regular}; 
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