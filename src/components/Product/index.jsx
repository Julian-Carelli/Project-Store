import React from 'react'

import DeleteProduct from '../DeleteProduct/index'

const Product = ({
    classCol, 
    classProduct, 
    classBackground, 
    classImg, 
    img,
    alt,
    classInfo, 
    className, 
    classTitle,
    textTitle,
    classDescription,
    classText,
    text,
    classPrice, 
    classNumber,
    textNumber,
    classSubmit,
    classButton,
    textButton,
    classOnclick,
    productFunction,
    isOpen,
    isClose,
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
}) => 
    (
    <div className={classCol}>
        <div className={classProduct}>
            <div className={classBackground}>
                <img className={classImg} src={img} alt={alt}></img>
            </div>
            <div className={classInfo}>
                <div className={className}>
                    <h2 className={classTitle}>{textTitle}</h2>
                </div>
                <div className={classDescription}>
                    <p className={classText}>{text}</p>
                </div>
                <div className={classPrice}>
                    <span className={classNumber}>{textNumber}</span>
                </div>
                <div className={classSubmit}>
                    <button onClick={classOnclick} className={classButton}>{textButton}</button>
                    {productFunction === 'delete' && 
                    <DeleteProduct 
                    isOpen={isOpen} 
                    stateModal={stateModal} 
                    isClose={isClose}
                    classMessage={classMessage}
                    classQuestion = {classQuestion}
                    textQuestion = {textQuestion}
                    classAffirmation = {classAffirmation}
                    textAffirmation = {textAffirmation}
                    classActions = {classActions}
                    classBtnCancel = {classBtnCancel}
                    textBtnCancel = {textBtnCancel}
                    classBtnFunction = {classBtnFunction}
                    textBtnFunction = {textBtnFunction}/>
                    }
                </div>
            </div>
        </div>   
    </div>
)


export default Product