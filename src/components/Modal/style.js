import styled from 'styled-components'


const ModalStyled = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.5);
    justify-content:center;
    align-items:center;
    
    .Modal {
        background:white;
        border-radius:10px;
        padding:20px;
        max-width:350px;
        width:100%;
        @media screen and (max-width:${props => props.theme.mediaQueries.phone_min}) and (min-width:0px){
            width:80%;
        }
        @media screen and (max-width:${props => props.theme.mediaQueries.phone_max}) and (min-width:${props => props.theme.mediaQueries.phone_min}){
            width:80%;
        }
        @media screen and (max-width:${props => props.theme.mediaQueries.tablet}) and (min-width:${props => props.theme.mediaQueries.phone_max}){
            width:80%;
        }
    }
`

export default ModalStyled