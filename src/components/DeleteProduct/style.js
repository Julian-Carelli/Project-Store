import styled from 'styled-components'

const DeleteProductStyled = styled.div `


    .DeleteProduct__message {
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

    .DeleteProduct__title {
        font-size:${props => props.theme.fontSizeTitle.medium};
        font-weight:${props => props.theme.fontWeight.medium};
        @media screen and (max-width:768px) and (min-width:0px){
            font-size:${props => props.theme.fontSizeText.medium};
        }
        @media screen and (max-width:${props => props.theme.mediaQueries.desktop}) and (min-width:${props => props.theme.mediaQueries.tablet}){
            font-size:${props => props.theme.fontSizeTitle.min};
        }
    }

    .DeleteProduct__text {
        font-size:${props => props.theme.fontSizeText.min};
        font-weight:${props => props.theme.fontWeight.regular};
    }

    .DeleteProduct__actions {
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

    .DeleteProduct__button-delete {
        margin-right:10px;
        font-size:${props => props.theme.fontSizeText.min};
        font-weight:${props => props.theme.fontWeight.regular};
    }

    .DeleteProduct__button-cancel {
        margin-left:10px;
        font-size:${props => props.theme.fontSizeText.min};
        font-weight:${props => props.theme.fontWeight.regular};
    }

`

export default DeleteProductStyled