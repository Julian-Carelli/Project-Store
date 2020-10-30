import styled from 'styled-components'

const DeleteProductStyled = styled.div `

    .DeleteProduct__title {
        font-size:${props => props.theme.fontSizeText.bold};
        font-weight:${props => props.theme.fontWeight.medium};  
    }

    .DeleteProduct__text {
        font-size:${props => props.theme.fontSizeText.medium};
        font-weight:${props => props.theme.fontWeight.medium};
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