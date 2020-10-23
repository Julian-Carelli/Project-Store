import React from 'react'

import ProductStyled from './style'
import pantalonesDeCuero from '../../assets/images/pantalones-de-cuero.jpg'

const Product = () => (
    <ProductStyled className="col-4">
        <div className="Product">
            <div className="Product__background">
                <img className="Product__img" src={pantalonesDeCuero} alt="Pantalones de cuero"/>
            </div>
            <div className="Product__info">
                <h2 className="Product__title">Pantalon de cuero</h2>
                <p className="Product__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, sequi! Solutaiure eum et, incidunt voluptatum placeat iste autem ratione rem saepe cum illum fugiat facere aliquid ullamquas deleniti.</p>
                <span className="Product__span">El span hermano</span>
            </div>
        </div>
    </ProductStyled>
)


export default Product