import styled from 'styled-components'

const NewsletterStyled = styled.div `
    display:flex;
    justify-content:center;
    align-items:center;
    max-height:100px;
    height:100%;
    background-color:#eeeeee;
    @media screen and (max-width:1024px) and (min-width:0px){
        padding:90px 0px;
    }
    .Newsletter-row {
        display:flex;
        justify-content:center;
        padding:90px 0px;
        @media screen and (max-width:768px) and (min-width:0px){
            flex-direction:column;
        }
    }

    .Newsletter-row__name {
        
    }

    .Newsletter-row__title {
        font-size:${props => props.theme.fontSizeTitle.min};
        font-weight:${props => props.theme.fontWeight.regular};

        @media screen and (max-width: 480px) and (min-width:0px){
            font-size:${props => props.theme.fontSizeText.min};
        }

        @media screen and (max-width:1024px) and (min-width:480px){
            font-size:${props => props.theme.fontSizeText.medium};
        }        
        
    }

    .Newsletter-row__subscribe {
        display:flex;
        align-items:center;
        @media screen and (max-width:${props => props.theme.mediaQueries.phone_min}) and (min-width:0px){
            display:flex;
            flex-direction:column;
            align-items:flex-start;
            padding-top:10px;
            padding-bottom:10px;
            font-size:${props => props.theme.fontSizePx.min_1};
        }
        @media screen and (max-width:${props => props.theme.mediaQueries.phone_max}) and (min-width:${props => props.theme.mediaQueries.phone_min}){
            display:flex;
            flex-direction:column;
            align-items:flex-start;
            padding-top:10px;
            padding-bottom:10px;
            font-size:${props => props.theme.fontSizePx.min_2};
        }
        @media screen and (max-width:${props => props.theme.mediaQueries.tablet}) and (min-width:${props => props.theme.mediaQueries.phone_max}){
            display:flex;
            flex-direction:column;
            align-items:flex-start;
            padding-top:10px;
            padding-bottom:10px;
            font-size:${props => props.theme.fontSizePx.min_2};
        }
        @media screen and (max-width:${props => props.theme.mediaQueries.desktop}) and (min-width:${props => props.theme.mediaQueries.tablet}){
            font-size:${props => props.theme.fontSizePx.min_2};
        }
        
    }

    .Newsletter-row__input {
        font-size:${props => props.theme.fontSizeText.min};
        font-weight:${props => props.theme.fontWeight.regular};
    }

    .Newsletter-row__button {
        font-size:${props => props.theme.fontSizeText.min};
        font-weight:${props => props.theme.fontWeight.regular};
        @media screen and (max-width:768px) and (min-width:0px){
            margin-top:20px;
            width:60%;
        }
    }

`

export default NewsletterStyled