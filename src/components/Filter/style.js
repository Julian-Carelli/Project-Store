import styled from 'styled-components'

const FilterStyled = styled.div`
    
    .Filter {
        display:flex;
        justify-content:center;
        flex-direction:column;
        align-items:flex-start;
        max-width:1250px;
        width:100%;
        padding: 90px 0px;
        @media screen and (max-width:1200px) and (min-width:0px){
            align-items:center;
        }
        @media screen and (max-width:${props => props.theme.mediaQueries.phone_min}) and (min-width:0px){
            padding: 45px 0px;
        }
        @media screen and (max-width:${props => props.theme.mediaQueries.phone_max}) and (min-width:${props => props.theme.mediaQueries.phone_min}){
            padding: 45px 0px;
        }
        @media screen and (max-width:${props => props.theme.mediaQueries.tablet}) and (min-width:${props => props.theme.mediaQueries.phone_max}){
            padding: 45px 0px;
        }
    }

    .Filter__row {
        display:flex;
        justify-content:center;
        align-items:center;
        float:left;
        padding:20px;
    }

    .Filter__name {
        border-bottom: 3px solid black;
        max-width:500px;
        width:100%;
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

    .Filter__title {
        font-size:${props => props.theme.fontSizeTitle.max};
        font-weight:${props => props.theme.fontWeight.bold};
        @media screen and (max-width:${props => props.theme.mediaQueries.phone_min}) and (min-width:0px){
            font-size:${props => props.theme.fontSizeTitle.min};
        }
        @media screen and (max-width:${props => props.theme.mediaQueries.phone_max}) and (min-width:${props => props.theme.mediaQueries.phone_min}){
            font-size:${props => props.theme.fontSizeTitle.min};
        }
        @media screen and (max-width:${props => props.theme.mediaQueries.tablet}) and (min-width:${props => props.theme.mediaQueries.phone_max}){
            font-size:${props => props.theme.fontSizeTitle.medium};
        }
        @media screen and (max-width:${props => props.theme.mediaQueries.desktop}) and (min-width:${props => props.theme.mediaQueries.tablet}){
            font-size:${props => props.theme.fontSizeTitle.medium};
        }
    }

    .Filter-organizeButton {
        text-align:center;
        @media screen and (max-width:${props => props.theme.mediaQueries.phone_min}) and (min-width:0px){
            display:none;
        }
        @media screen and (max-width:${props => props.theme.mediaQueries.phone_max}) and (min-width:${props => props.theme.mediaQueries.phone_min}){
            display:none;
        }
        @media screen and (max-width:${props => props.theme.mediaQueries.tablet}) and (min-width:${props => props.theme.mediaQueries.phone_max}){
            display:none;
        }
    }

    .Filter-organizeButton__contain {
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

    .Filter-organizeButton__button {
        max-width:100px;
        width:100%;
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
    }

    .Filter__search {
        width:100%;
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

    .Filter__input {
        width:100%;
        font-size:${props => props.theme.fontSizeText.min};
        font-weight:${props => props.theme.fontWeight.regular};
    }
`


export default FilterStyled;