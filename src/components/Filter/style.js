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
        width:500px;
    }

    .Filter__title {
        font-size:${props => props.theme.fontSizeTitle.max};
        font-weight:${props => props.theme.fontWeight.bold};
    }

    .Filter-organizeButton {
        text-align:center;
    }

    .Filter-organizeButton__button {
        max-width:100%;
        width:100px;
    }
`


export default FilterStyled;