import styled from 'styled-components'

const NotFoundStyled = styled.div `

    .NotFound {
        height:100vh;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .NotFound-Error404__name {
        @media screen and (max-width:${props => props.theme.mediaQueries.phone_min}) and (min-width:0px){
            font-size:${props => props.theme.fontSizePx.min_2};
        }
        @media screen and (max-width:${props => props.theme.mediaQueries.phone_max}) and (min-width:${props => props.theme.mediaQueries.phone_min}){
            font-size:${props => props.theme.fontSizePx.medium};
        }
        @media screen and (max-width:${props => props.theme.mediaQueries.tablet}) and (min-width:${props => props.theme.mediaQueries.phone_max}){
            font-size:${props => props.theme.fontSizePx.medium_1};
        }
        @media screen and (max-width:${props => props.theme.mediaQueries.desktop}) and (min-width:${props => props.theme.mediaQueries.tablet}){
            font-size:${props => props.theme.fontSizePx.medium_2};
        }
    }

    .NotFound-Error404__title {
        font-size: ${props => props.theme.fontSizeTitle.max};
        font-weight: ${props => props.theme.fontWeight.bold};
        @media screen and (max-width: 1024px) and (min-width:0px){
            font-size: ${props => props.theme.fontSizeTitle.medium};
        }
    }

    .NotFound-Error404__info {
        @media screen and (max-width:${props => props.theme.mediaQueries.phone_min}) and (min-width:0px){
            font-size:${props => props.theme.fontSizePx.min_1};
        }
        @media screen and (max-width:${props => props.theme.mediaQueries.phone_max}) and (min-width:${props => props.theme.mediaQueries.phone_min}){
            font-size:${props => props.theme.fontSizePx.min_2};
        }
        @media screen and (max-width:${props => props.theme.mediaQueries.tablet}) and (min-width:${props => props.theme.mediaQueries.phone_max}){
            font-size:${props => props.theme.fontSizePx.medium};
        }
        @media screen and (max-width:${props => props.theme.mediaQueries.desktop}) and (min-width:${props => props.theme.mediaQueries.tablet}){
            font-size:${props => props.theme.fontSizePx.medium_1};
        }
    }

    .NotFound-Error404__text {
        font-size: ${props => props.theme.fontSizeText.medium};
        font-weight: ${props => props.theme.fontWeight.medium};
    }

    

    .NotFound-Error404__redirection {
        font-size: ${props => props.theme.fontSizeText.min};
        font-weight: ${props => props.theme.fontWeight.medium};
    }
`

export default NotFoundStyled