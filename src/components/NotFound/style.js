import styled from 'styled-components'

const NotFoundStyled = styled.div `

    .NotFound {
        height:100vh;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .NotFound-Error404__title {
        font-size: ${props => props.theme.fontSizeTitle.max};
        font-weight: ${props => props.theme.fontWeight.bold};
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