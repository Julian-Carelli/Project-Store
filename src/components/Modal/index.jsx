import React from 'react'
import ReactDOM from 'react-dom'

import ModalStyled from './style'


const Modal = ({stateModal, children}) => {


    if(!stateModal){
        return null
    }

    return ReactDOM.createPortal((
        <ModalStyled>
            <div className="Modal">
                <div className="Modal__container">
                    {children}
                </div>
            </div>
        </ModalStyled>
        
    ),document.getElementById('modal'))
             
}


export default Modal

