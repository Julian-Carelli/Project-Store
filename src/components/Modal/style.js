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
        width:400px;
    }


`

export default ModalStyled