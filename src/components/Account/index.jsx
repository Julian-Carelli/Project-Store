import React from 'react'

import Product from '../Product/index'
import Redirection from '../Redirection/index'

import AccountStyled from './style'

const Account = ({user,cart, isOpen, isClose, handleDeleteToCart, handlePriceTotal, handleConfirmBuy, stateModal}) => (
    (user.email 

        ? 
        <AccountStyled>
            <div className="Account container-fluid">
                <div className="Account_row row">
                    <div className="Account__name col-12">
                        <h2 className="Account__title">Carrito de {user.username}</h2>
                    </div>
                </div>
                <div className="Account__row row">
                    {cart.map((element => 
                        <Product key={element.id}
                        identify={element.id}
                        classCol="Account-product col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3"
                        classProduct="Account-product__card"
                        classBackground="Account-product__background"
                        classImg="Account-product__img"
                        img={element.img}
                        alt="Ropa 1"
                        classInfo="Account-product__info"
                        className="Account-product__content"
                        classTitle="Account-product__title"
                        textTitle={element.name}
                        classPrice="Account-product__content"
                        classNumber="Account-product__number"
                        textNumber={element.price}
                        classSubmit="Account-product__content"
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
                        handleDeleteToCart={handleDeleteToCart}
                        />
                    ))}
                </div>
                <div className="Account__row row">
                    {cart.length > 0 

                                
                        ?   <div className="Account-total">
                                <div className="Account-total__content">
                                    <h2 className="Account-total__title">Total a pagar: ${handlePriceTotal()}</h2>
                                </div>
                                <div className="Account-total__content">
                                    <button  onClick={() => handleConfirmBuy()} className="Account-total__button btn btn-primary">Pagar</button>
                                </div>
                            </div>
                            
                        :   <div className="Account-noCart">
                                <div className="Account-total__content">
                                    <h2 className="Account-total__title">No tienes ningun producto en el carrito</h2>
                                </div>
                                <div className="Account-total__content">
                                    <p className="Account-total__text">Adquiere uno de inmediato</p>
                                </div>
                            </div>
                    }        
                </div>
            </div>
        </AccountStyled>

        : <Redirection
           text="Para acceder a las funcionalidades del carrito, necesitas tener una sesión
           iniciada"
           />
    )

    
)

export default Account