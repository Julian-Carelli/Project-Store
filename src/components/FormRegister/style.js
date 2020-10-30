import styled from 'styled-components'

const FormRegisterStyled = styled.div `

    margin:90px 0px;

    .Register {
        display:flex;
        justify-content:center;
        line-height:50px;
        width:600px;
    }


    .Register__row {
        
    }

    .Register-form__name {
        padding: 20px 0px;
    }

    .Register-form__title {
        font-size:${props => props.theme.fontSizeTitle.medium};
        font-weight:${props => props.theme.fontWeight.bold}; 
    }

    .Register-form__label {
        font-size:${props => props.theme.fontSizeText.min};
        font-weight:${props => props.theme.fontWeight.regular}; 
    }

    .Register-form__input {
        width:600px;
        font-size:${props => props.theme.fontSizeText.min};
        font-weight:${props => props.theme.fontWeight.regular};
    }

    .Register-form__label-checkbox {
        margin-left:20px;
        font-size:${props => props.theme.fontSizeText.min};
        font-weight:${props => props.theme.fontWeight.regular};
    }

    .Register-form__button {
        font-size:${props => props.theme.fontSizeText.min};
        font-weight:${props => props.theme.fontWeight.regular};
    }

`

export default FormRegisterStyled
