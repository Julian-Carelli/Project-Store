import styled from 'styled-components'

const RedirectionStyled = styled.div `
    .Redirection {
        display:flex;
        justify-content:center;
        align-items:center;
        height:100vh;
    }

    .Redirection__row {
        max-width:600px;
        width:100%;
        line-height:50px;
    }

    .Redirection-main__name {
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

    .Redirection-main__title {
        font-size:${props => props.theme.fontSizeTitle.max};
        font-weight:${props => props.theme.fontWeight.bold};
        @media screen and (max-width:768px) and (min-width:0px){
            font-size:${props => props.theme.fontSizeTitle.min};
        }
        @media screen and (max-width:${props => props.theme.mediaQueries.desktop}) and (min-width:${props => props.theme.mediaQueries.tablet}){
            font-size:${props => props.theme.fontSizeTitle.medium};
        }
    }

    .Redirection-main__info {
        @media screen and (max-width:${props => props.theme.mediaQueries.phone_min}) and (min-width:0px){
            font-size:${props => props.theme.fontSizePx.min_1};
            line-height:20px;
        }
        @media screen and (max-width:${props => props.theme.mediaQueries.phone_max}) and (min-width:${props => props.theme.mediaQueries.phone_min}){
            font-size:${props => props.theme.fontSizePx.min_2};
            line-height:20px;
        }
        @media screen and (max-width:${props => props.theme.mediaQueries.tablet}) and (min-width:${props => props.theme.mediaQueries.phone_max}){
            font-size:${props => props.theme.fontSizePx.medium};
            line-height:20px;
        }
        @media screen and (max-width:${props => props.theme.mediaQueries.desktop}) and (min-width:${props => props.theme.mediaQueries.tablet}){
            font-size:${props => props.theme.fontSizePx.medium_1};
            line-height:20px;   
        }

    }

    .Redirection-main__text {
        font-size:${props => props.theme.fontSizeText.min};
        font-weight:${props => props.theme.fontWeight.regular}; 
    }

    .Redirection-main__links {
        display:flex;
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

    .Redirection-main__register {
        margin-left:20px;
    }

    .Redirection-main__text {
        font-size:${props => props.theme.fontSizeText.min};
        font-weight:${props => props.theme.fontWeight.regular}; 
    }

`

export default RedirectionStyled