import React from 'react'

import NewsletterStyled from './style'

const Newsletter = ({handleSubmitSubscribe}) => (
    <NewsletterStyled>
        <div className="Newsletter-row">
            <div className="Newsletter-row__name col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                <h2 className="Newsletter-row__title">¿Quieres que te mandemos nuevos novedades sobre nuestros productos?</h2>
            </div>
            <div className="Newsletter-row__subscribe col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                <input id="subscribe" type="email" maxLength="35" className="Newsletter-row__input form-control" placeholder="Escribe tu correo para recibir nuevas novedades"></input>
                <button  onClick={() => handleSubmitSubscribe() } className="Newsletter-row__button btn btn-primary">Solicitar</button>
            </div>
        </div>    
    </NewsletterStyled>
)

export default Newsletter