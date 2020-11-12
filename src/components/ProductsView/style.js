import styled from 'styled-components'
/* 
export const ProductsView = styled.div`
    display:flex;
    justify-content:center;
`

export const ProductsView__row = styled.div`
    margin:auto;
`

export const Product = styled.div `
    display:flex;
    justify-content:center;
    padding:25px 0px;

`

export const Product_card = styled.div `
    max-width:300px;
    width:100%;
    max-height:450px;
    height:100%;
    border-radius:10px;
    border:1px solid black;
    padding:40px 0px;
    -webkit-box-shadow: -2px 11px 23px -6px rgba(0,0,0,0.75);
    -moz-box-shadow: -2px 11px 23px -6px rgba(0,0,0,0.75);
    box-shadow: -2px 11px 23px -6px rgba(0,0,0,0.75);
` */

const ProductsViewStyled = styled.div`
    @media screen and (max-width:${props => props.theme.mediaQueries.phone_min}) and (min-width:0px){
        height:auto;
    }
    @media screen and (max-width:${props => props.theme.mediaQueries.phone_max}) and (min-width:${props => props.theme.mediaQueries.phone_min}){
        height:auto;
    }
    @media screen and (max-width:${props => props.theme.mediaQueries.tablet}) and (min-width:${props => props.theme.mediaQueries.phone_max}){
        height:auto;
    }
    .ProductsView {
        display:flex;
        justify-content:center;
    }

    .ProductsView__row {
        margin:auto;
        padding:90px 0px;
        width:100%;
        @media screen and (max-width:${props => props.theme.mediaQueries.phone_min}) and (min-width:0px){
            padding:45px 0px;
        }
        @media screen and (max-width:${props => props.theme.mediaQueries.phone_max}) and (min-width:${props => props.theme.mediaQueries.phone_min}){
            padding:45px 0px;
        }
        @media screen and (max-width:${props => props.theme.mediaQueries.tablet}) and (min-width:${props => props.theme.mediaQueries.phone_max}){
            padding:45px 0px;
        }
    }

    .ProductsView-product {
        display:flex;
        justify-content:center;
        padding:20px 20px;
        width:100%;
        @media screen and (max-width:${props => props.theme.mediaQueries.phone_min}) and (min-width:0px){
            padding: 20px 0px;
        }
        @media screen and (max-width:${props => props.theme.mediaQueries.phone_max}) and (min-width:${props => props.theme.mediaQueries.phone_min}){
            padding:20px 0px;
        }

    }

    .ProductsView-product__card {
        max-width:300px;
        width:100%;
        max-height:450px;
        height:100%;
        border-radius:10px;
        border:1px solid black;
        padding:40px 0px;
        -webkit-box-shadow: -2px 11px 23px -6px rgba(0,0,0,0.75);
        -moz-box-shadow: -2px 11px 23px -6px rgba(0,0,0,0.75);
        box-shadow: -2px 11px 23px -6px rgba(0,0,0,0.75);
        @media screen and (max-width:${props => props.theme.mediaQueries.phone_min}) and (min-width:0px){
            width:70%;
        }
        @media screen and (max-width:${props => props.theme.mediaQueries.phone_max}) and (min-width:${props => props.theme.mediaQueries.phone_min}){
            width:70%;
        }
        @media screen and (max-width:${props => props.theme.mediaQueries.tablet}) and (min-width:${props => props.theme.mediaQueries.phone_max}){
            width:70%;
        }
    }

    .ProductsView-product__background {
        width:100%;
        height:60%;
    }

    .ProductsView-product__img {
        width:100%;
        height:100%;
        object-fit:cover;
    }

    .ProductsView-product__info {
        width:100%;
        height:auto;
        text-align:left;
        padding:10px 15px;
    }

    .ProductsView-product__content {
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

    .ProductsView-product__title {
        font-size:${props => props.theme.fontSizeTitle.min};
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
            font-size:${props => props.theme.fontSizeText.medium};
        }
    }

    

    .ProductsView-product__text {
        font-size:${props => props.theme.fontSizeText.min};
        font-weight:${props => props.theme.fontWeight.regular};     
    }
    
    .ProductsView-product__price {
        font-size:${props => props.theme.fontSizeText.min};
        font-weight:${props => props.theme.fontWeight.regular}; 
    }

    .ProductsView-product__button {
        font-size:${props => props.theme.fontSizeText.min};
        font-weight:${props => props.theme.fontWeight.regular}; 
    }

`

export default ProductsViewStyled