import React from 'react'

import Modal from '../Modal/index'
import DeleteProductStyled from './style'


const DeleteProduct = ({
    identify,
    isClose,
    handleDeleteToCart,
    stateModal,
    classMessage,
    classQuestion,
    textQuestion,
    classAffirmation,
    textAffirmation,
    classActions, 
    classBtnCancel,
    textBtnCancel,
    classBtnFunction,
    textBtnFunction,
}) => (
    <Modal stateModal={stateModal}>
        <DeleteProductStyled>
            <div className={classMessage}>
                <h1 className={classQuestion}>{textQuestion}</h1>
                <p className={classAffirmation}>{textAffirmation}</p>
            </div>
            <div className={classActions}>
                <button onClick={() => handleDeleteToCart(identify)} className={classBtnFunction}>{textBtnFunction}</button>
                <button onClick={isClose} className={classBtnCancel}>{textBtnCancel}</button>
            </div>
        </DeleteProductStyled>
    </Modal>
)


export default DeleteProduct