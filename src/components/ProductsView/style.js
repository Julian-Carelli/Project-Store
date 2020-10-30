import styled from 'styled-components'

const ProductsViewStyled = styled.div`
    height:100vh;
    .ProductsView {
        display:flex;
        justify-content:center;
    }

    .ProductsView__row {
        margin:auto;
    }

    .ProductsView-product {
        
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

    .ProductsView-product__title {
        font-size:${props => props.theme.fontSizeTitle.min};
        font-weight:${props => props.theme.fontWeight.medium};
    }

    .ProductsView-product__text {
        font-size:${props => props.theme.fontSizeText.min};
        font-weight:${props => props.theme.fontWeight.regular};     
    }
    
    .ProductsView-product__Number {
        font-size:${props => props.theme.fontSizeText.min};
        font-weight:${props => props.theme.fontWeight.regular}; 
    }

`

export default ProductsViewStyled