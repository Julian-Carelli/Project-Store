import styled from 'styled-components'

const FilterStyled = styled.div`
    background-color:#eeeeee;

    .Filter {
        display:flex;
        justify-content:center;
        flex-direction:column;
        align-items:flex-start;
        max-width:1250px;
        width:100%;
        padding:90px 15px;
        margin:0px;
        background-color:#eeeeee;
        
        @media screen and (max-width:768px) and (min-width:0px){
            padding: 45px 0px;
        }
        @media screen and (max-width:1200px){
            align-items:center;
        }
    }

    .Filter__row {
        display:flex;
        justify-content:center;
        align-items:center;
        float:left;
        padding:20px;
        margin:0px;
    }

    .Filter__name {
        border-bottom: 3px solid black;
        max-width:500px;
        width:100%;
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

    .Filter__title {
        font-size:${props => props.theme.fontSizeTitle.max};
        font-weight:${props => props.theme.fontWeight.bold};
        @media screen and (max-width:480px) and (min-width: 0px){
            font-size:${props => props.theme.fontSizeTitle.min};
        }
        @media screen and (max-width:1024px) and (min-width:480px){
            font-size:${props => props.theme.fontSizeTitle.medium};
        }
    }

    .Filter-organizeButton {
        text-align:center;
        @media screen and (max-width:768px) and (min-width:0){
            display:none;
        }
    }

    .Filter-organizeButton__contain {
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

    .Filter-organizeButton__button {
        max-width:100px;
        width:auto;
        padding:6px 20px;
        font-size:${props => props.theme.fontSizeText.min};
    }

    .Filter__filter {
        display:flex;
        justify-content:center;
        align-items:center;
        float:left;
        padding:20px;
        max-width:500px;
        width:100%;
        margin:0px;
    }

    .Filter__search {
        width:100%;
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

    .Filter__input {
        width:100%;
        font-size:${props => props.theme.fontSizeText.min};
        font-weight:${props => props.theme.fontWeight.regular};
    }
`


export default FilterStyled;