    import styled from 'styled-components';

    import slider from '../Figure/slider'

    const PresentationStyled = styled.div ` 
        background-color:#eeeeee;
        .Presentation {
            display:flex;
            justify-content:center;
            flex-direction:column;
            text-align:center;
            height:100vh;
            @media screen and (max-width:${props => props.theme.mediaQueries.phone_min}) and (min-width:0px){
                padding:45px 20px;
            }
            @media screen and (max-width:${props => props.theme.mediaQueries.phone_max}) and (min-width:${props => props.theme.mediaQueries.phone_min}){
                height:100vh;
                padding:45px 20px;
            }
            @media screen and (max-width:${props => props.theme.mediaQueries.tablet}) and (min-width:${props => props.theme.mediaQueries.phone_max}){
                height:auto;
                padding:90px 20px;
            }

        }

        .Presentation-row {
            align-items:center;
            
        }
        .Presentation-row__col {
            padding:0px 20px;
            @media screen and (max-width:${props => props.theme.mediaQueries.phone_min}) and (min-width:0px){
                padding:20px;
            }
            @media screen and (max-width:${props => props.theme.mediaQueries.phone_max}) and (min-width:${props => props.theme.mediaQueries.phone_min}){
                padding:20px;

            }
            @media screen and (max-width:${props => props.theme.mediaQueries.tablet}) and (min-width:${props => props.theme.mediaQueries.phone_max}){
                padding:20px;

            }
        }

        .Presentation-row__background {
            overflow:hidden;
            max-width:600px;
            max-height:400px;
            width:100%;
            height:100%;
            border-radius:20px;
            @media screen and (max-width:${props => props.theme.mediaQueries.phone_min}) and (min-width:0px){
                width:80%;
            }
            @media screen and (max-width:${props => props.theme.mediaQueries.phone_max}) and (min-width:${props => props.theme.mediaQueries.phone_min}){
                width:80%;

            }
            @media screen and (max-width:${props => props.theme.mediaQueries.tablet}) and (min-width:${props => props.theme.mediaQueries.phone_max}){
                width:80%;
            }
            @media screen and (max-width:${props => props.theme.mediaQueries.desktop}) and (min-width:${props => props.theme.mediaQueries.tablet}){
                width:100%;
            }
            
        }

        .Presentation-row__figure {
            display:flex;
            position:relative;
            width:100%;
            animation:20s ${slider} infinite;
        }

        .Presentation-row__img {
            float:left;
            width:100%;
            height:100%;
            border-radius:20px;
            filter: grayscale(1);
            flex-shrink: 0;
        }

        .Presentation-row__name {
            text-align:start;
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
        .Presentation-row__title {
            color:#373a40;
            font-size:${props => props.theme.fontSizeTitle.max};
            font-weight:${props => props.theme.fontWeight.black};
            @media screen and (max-width:${props => props.theme.mediaQueries.phone_min}) and (min-width:0px){
                font-size:${props => props.theme.fontSizeText.medium};
            }
            @media screen and (max-width:${props => props.theme.mediaQueries.phone_max}) and (min-width:${props => props.theme.mediaQueries.phone_min}){
                font-size:${props => props.theme.fontSizeText.medium};
            }
            @media screen and (max-width:${props => props.theme.mediaQueries.tablet}) and (min-width:${props => props.theme.mediaQueries.phone_max}){
                font-size:${props => props.theme.fontSizeTitle.min};
            }
            @media screen and (max-width:${props => props.theme.mediaQueries.desktop}) and (min-width:${props => props.theme.mediaQueries.tablet}){
                font-size:${props => props.theme.fontSizeTitle.medium};
            }

        }
        .Presentation-row__info {
            text-align:start;
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
        .Presentation-row__text {
            color:#373a40;
            font-size:${props => props.theme.fontSizeText.medium};
            font-weight:${props => props.theme.fontWeight.regular};
            @media screen and (max-width:${props => props.theme.mediaQueries.phone_min}) and (min-width:0px){
                font-size:${props => props.theme.fontSizeText.min};
            }
            @media screen and (max-width:${props => props.theme.mediaQueries.phone_max}) and (min-width:${props => props.theme.mediaQueries.phone_min}){
                font-size:${props => props.theme.fontSizeText.min};
            }
            @media screen and (max-width:${props => props.theme.mediaQueries.tablet}) and (min-width:${props => props.theme.mediaQueries.phone_max}){
                font-size:${props => props.theme.fontSizeText.medium};
            }
            @media screen and (max-width:${props => props.theme.mediaQueries.desktop}) and (min-width:${props => props.theme.mediaQueries.tablet}){
                font-size:${props => props.theme.fontSizeText.medium};
            }
        }
        .Presentation-row__link {
            text-align:start;
            @media screen and (max-width:${props => props.theme.mediaQueries.phone_min}) and (min-width:0px){
                font-size:11px;
            }
            @media screen and (max-width:${props => props.theme.mediaQueries.phone_max}) and (min-width:${props => props.theme.mediaQueries.phone_min}){
                font-size:13px;
            }
            @media screen and (max-width:${props => props.theme.mediaQueries.tablet}) and (min-width:${props => props.theme.mediaQueries.phone_max}){
                font-size:13px;
            }

            @media screen and (max-width:${props => props.theme.mediaQueries.desktop}) and (min-width:${props => props.theme.mediaQueries.tablet}){
                font-size:14px;
            }

        }
        .Presentation-row__button {
            color:#ffffff;
            font-size:${props => props.theme.fontSizeText.min};
            font-weight:${props => props.theme.fontWeight.regular};
        }
    `

    export default PresentationStyled