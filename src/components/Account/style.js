import styled from 'styled-components'

const AccountStyled = styled.div `
    .Account {
        height:100vh;
        padding:90px 0px;
        background-color:#eeeeee; 
        @media screen and (max-width:${props => props.theme.mediaQueries.phone_min}) and (min-width:0px){
            height:auto;
        }
        @media screen and (max-width:${props => props.theme.mediaQueries.phone_max}) and (min-width:${props => props.theme.mediaQueries.phone_min}){
            height:auto;
        }
        @media screen and (max-width:${props => props.theme.mediaQueries.tablet}) and (min-width:${props => props.theme.mediaQueries.phone_max}){
            height:auto;
        }

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
        padding:45px 0px;
        @media screen and (max-width:${props => props.theme.mediaQueries.phone_min}) and (min-width:0px){
            padding:0px;
        }
        @media screen and (max-width:${props => props.theme.mediaQueries.phone_max}) and (min-width:${props => props.theme.mediaQueries.phone_min}){
            padding:0px;
        }
    }

    .Account__name {
        border-bottom: 3px solid black;
        max-width:600px;
        width:100%;
        margin:auto;
        @media screen and (max-width:${props => props.theme.mediaQueries.phone_min}) and (min-width:0px){
            text-align:center;
        }
        @media screen and (max-width:${props => props.theme.mediaQueries.phone_max}) and (min-width:${props => props.theme.mediaQueries.phone_min}){
            text-align:center;
        }
        @media screen and (max-width:${props => props.theme.mediaQueries.tablet}) and (min-width:${props => props.theme.mediaQueries.phone_max}){
            text-align:center;
        }
    }

    .Account-product {
        display:flex;
        align-items:center;
        max-width:600px;
        width: 100%;
        padding: 45px 0px;
    }

    .Account-product__card {
        display:flex;
        width:100%;
        @media screen and (max-width:${props => props.theme.mediaQueries.phone_min}) and (min-width:0px){
            align-items:center;
            flex-direction:column;
        }
        @media screen and (max-width:${props => props.theme.mediaQueries.phone_max}) and (min-width:${props => props.theme.mediaQueries.phone_min}){
            align-items:center;
            flex-direction:column;
        }
        @media screen and (max-width:${props => props.theme.mediaQueries.tablet}) and (min-width:${props => props.theme.mediaQueries.phone_max}){
            align-items:center;
            flex-direction:column;
        }
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

    .Account-product__content {
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

    .Account-product__title {
        font-size:${props => props.theme.fontSizeTitle.medium};
        font-weight:${props => props.theme.fontWeight.medium};
        @media screen and (max-width:${props => props.theme.mediaQueries.phone_min}) and (min-width:0px){
            font-size:${props => props.theme.fontSizeText.medium};
        }
        @media screen and (max-width:${props => props.theme.mediaQueries.phone_max}) and (min-width:${props => props.theme.mediaQueries.phone_min}){
            font-size:${props => props.theme.fontSizeText.medium};
        }
        @media screen and (max-width:${props => props.theme.mediaQueries.tablet}) and (min-width:${props => props.theme.mediaQueries.phone_max}){
            font-size:${props => props.theme.fontSizeText.medium};
        }
        @media screen and (max-width:${props => props.theme.mediaQueries.desktop}) and (min-width:${props => props.theme.mediaQueries.tablet}){
            font-size:${props => props.theme.fontSizeTitle.min};
        }
    }




    .Account-product__number {
        font-size:${props => props.theme.fontSizeText.min};
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
        width: 100%;
        border-top: 3px solid black;
    }

    .Account-total__content {
        text-align:center;
        padding:10px 0px;
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

    .Account-total__title {
        font-size:${props => props.theme.fontSizeTitle.medium};
        font-weight:${props => props.theme.fontWeight.bold};
        @media screen and (max-width:${props => props.theme.mediaQueries.phone_min}) and (min-width:0px){
            font-size:${props => props.theme.fontSizeText.medium};
        }
        @media screen and (max-width:${props => props.theme.mediaQueries.phone_max}) and (min-width:${props => props.theme.mediaQueries.phone_min}){
            font-size:${props => props.theme.fontSizeText.medium};
        }
        @media screen and (max-width:${props => props.theme.mediaQueries.tablet}) and (min-width:${props => props.theme.mediaQueries.phone_max}){
            font-size:${props => props.theme.fontSizeText.medium};
        }
        @media screen and (max-width:${props => props.theme.mediaQueries.desktop}) and (min-width:${props => props.theme.mediaQueries.tablet}){
            font-size:${props => props.theme.fontSizeTitle.min};

        }
    } 

    .Account-total__button {
        width:100px;
        font-size:${props => props.theme.fontSizeText.min};
        font-weight:${props => props.theme.fontWeight.regular};
    }

    .Account-total__text {
        font-size:${props => props.theme.fontSizeText.min};
        font-weight:${props => props.theme.fontWeight.regular};
    }

    .Account-noCart {
        display:flex;
        flex-direction:column;
        justify-content:flex-start;
        padding:20px 0px;
        width: 100%;
        height:100vh;        
    }
`

export default AccountStyled