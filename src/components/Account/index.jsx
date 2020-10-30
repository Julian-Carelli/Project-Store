import React from 'react'

import Product from '../Product/index'
import AccountStyled from './style'

import Ropa_1 from '../../assets/images/ropa1.jpg'

const Account = ({isOpen, isClose, stateModal}) => (
    <AccountStyled>
        <div className="Account container-fluid">
            <div className="Account_row row">
                <div className="Account__name col-12">
                    <h2 className="Account__title">Carrito de Juana</h2>
                </div>
            </div>
            <div className="Account__row row">
                <Product
                    classCol="Account-product col-3"
                    classProduct="Account-product__card"
                    classBackground="Account-product__background"
                    classImg="Account-product__img"
                    img={Ropa_1}
                    alt="Ropa 1"
                    classInfo="Account-product__info"
                    className="Account-product__name"
                    classTitle="Account-product__title"
                    textTitle="producto 1"
                    classPrice="Account-product__Price"
                    classNumber="Account-product__Number"
                    textNumber="$ 1990"
                    classSubmit="Account-product__submit"
                    classButton="Account-product__button btn btn-primary"
                    classOnclick={isOpen}
                    textButton="Eliminar del carrito"
                    productFunction="delete"
                    isClose={isClose}
                    isOpen={isOpen}
                    stateModal={stateModal}
                    classMessage = "DeleteProduct__message"
                    classQuestion = "DeleteProduct__title"
                    textQuestion = "Estas seguro?"
                    classAffirmation = "DeleteProduct__text"
                    textAffirmation= "Estas a punto de eliminar este producto"
                    classActions = "DeleteProduct__actions"
                    classBtnCancel = "DeleteProduct__button-cancel btn btn-primary"
                    textBtnCancel = "Cancelar"
                    classBtnFunction = "DeleteProduct__button-delete btn btn-primary"
                    textBtnFunction = "Eliminar"
                />

                <Product
                    classCol="Account-product col-3"
                    classProduct="Account-product__card"
                    classBackground="Account-product__background"
                    classImg="Account-product__img"
                    img={Ropa_1}
                    alt="Ropa 1"
                    classInfo="Account-product__info"
                    className="Account-product__name"
                    classTitle="Account-product__title"
                    textTitle="producto 1"
                    classPrice="Account-product__Price"
                    classNumber="Account-product__Number"
                    textNumber="$ 1990"
                    classSubmit="Account-product__submit"
                    classButton="Account-product__button btn btn-primary"
                    classOnclick={isOpen}
                    textButton="Eliminar del carrito"
                    productFunction="delete"
                    isClose={isClose}
                    isOpen={isOpen}
                    stateModal={stateModal}
                    classMessage = "DeleteProduct__message"
                    classQuestion = "DeleteProduct__title"
                    textQuestion = "Estas seguro?"
                    classAffirmation = "DeleteProduct__text"
                    textAffirmation= "Estas a punto de eliminar este producto"
                    classActions = "DeleteProduct__actions"
                    classBtnCancel = "DeleteProduct__button-cancel btn btn-primary"
                    textBtnCancel = "Cancelar"
                    classBtnFunction = "DeleteProduct__button-delete btn btn-primary"
                    textBtnFunction = "Eliminar"
                />

            </div>
            <div className="Account__row row">
                <div className="Account-total">
                    <div className="Account-total__name">
                        <h2 className="Account-total__title">Total a pagar: $1900</h2>
                    </div>
                    <div className="Account-total__submit">
                        <button  className="Account-total__button btn btn-primary">Pagar</button>
                    </div>
                </div>
            </div>
        </div>
    </AccountStyled>
)

export default Account