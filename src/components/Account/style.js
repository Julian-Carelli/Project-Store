import styled from 'styled-components'

const AccountStyled = styled.div `
    .Account {
        height:100vh;
        padding:90px 0px;
        background-color:#eeeeee; 

    }

    .row {
        width:100%;
        margin:0px;
        background-color: #eeeeee;
    }

    .Account__row {
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
    }

    .Account__name {
        border-bottom: 3px solid black;
        max-width:600px;
        width:100%;
        margin:auto;
    }

    .Account-product {
        display:flex;
        align-items:center;
        max-width:600px;
        width: 100%;
        padding: 40px 0px;
    }

    .Account-product__card {
        display:flex;
        width:100%;
    }

    .Account-product__background {
        width: 50%;
    }


    .Account-product__img {
        width:100%;
        object-fit:cover;
        -webkit-box-shadow: -2px 11px 23px -6px rgba(0,0,0,0.75);
        -moz-box-shadow: -2px 11px 23px -6px rgba(0,0,0,0.75);
        box-shadow: -2px 11px 23px -6px rgba(0,0,0,0.75);
    }

    .Account-product__info {
        width: 50%;
        text-align: center;
        margin: auto;
        padding:20px 0px;
        line-height:45px;
    }

    .Account-product__title {
        font-size:${props => props.theme.fontSizeTitle.medium};
        font-weight:${props => props.theme.fontWeight.medium};
    }


    .Account-product__Number {
        font-size:${props => props.theme.fontSizeText.medium};
        font-weight:${props => props.theme.fontWeight.regular};
    }

    .Account-product__button {
        font-size:${props => props.theme.fontSizeText.min};
        font-weight:${props => props.theme.fontWeight.regular};
    }

    .Account-total {
        display:flex;
        flex-direction:column;
        justify-content:flex-start;
        padding:20px 0px;
    }

    .Account-total__name {
        padding:10px 0px;
    }

    .Account__title {
        font-size:${props => props.theme.fontSizeTitle.medium};
        font-weight:${props => props.theme.fontWeight.bold};
    }

    .Account-total__submit {
        text-align:center;
        padding:10px 0px;
    }

    .Account-total__title {
        font-size:${props => props.theme.fontSizeTitle.medium};
        font-weight:${props => props.theme.fontWeight.medium};
    }

    .Account-total__button {
        width:100px;
        font-size:${props => props.theme.fontSizeText.min};
        font-weight:${props => props.theme.fontWeight.regular};
    }
`

export default AccountStyled