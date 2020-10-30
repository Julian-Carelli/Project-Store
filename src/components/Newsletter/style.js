import styled from 'styled-components'

const NewsletterStyled = styled.div `
    display:flex;
    justify-content:center;
    align-items:center;
    height:100px;
    background-color:#eeeeee;   
    .Newsletter-row {
        display:flex;
        justify-content:center;
        padding:90px 0px;
    }

    .Newsletter-row__name {
        
    }

    .Newsletter-row__title {
        font-size:${props => props.theme.fontSizeTitle.min};
        font-weight:${props => props.theme.fontWeight.regular};
    }

    .Newsletter-row__subscribe {
        display:flex;
        align-items:center;
    }

    .Newsletter-row__input {
        font-size:${props => props.theme.fontSizeText.min};
        font-weight:${props => props.theme.fontWeight.regular};
    }

`

export default NewsletterStyled