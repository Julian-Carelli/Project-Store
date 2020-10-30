import React from 'react'

import Product from '../Product/index'
import ProductsViewStyled from './style'
import ropa_1 from '../../assets/images/ropa1.jpg'

const ProductsView = () => (
    <ProductsViewStyled>
        <div className="ProductsView container-fluid">
            <div className="ProductsView__row row">
                    <Product
                        classCol="ProductsView-product col-3"
                        classProduct="ProductsView-product__card"
                        classBackground="ProductsView-product__background"
                        classImg="ProductsView-product__img"
                        img={ropa_1}
                        alt="Ropa 1"
                        classInfo="ProductsView-product__info"
                        className="ProductsView-product__name"
                        classTitle="ProductsView-product__title"
                        textTitle="producto 1"
                        classDescription="ProductsView-product__description"
                        classText="ProductsView-product__text"
                        text="Lorem ipsum dolor sit amet, sir le pasiui moshle"
                        classPrice="ProductsView-product__Price"
                        classNumber="ProductsView-product__Number"
                        textNumber="$ 1990"
                        classSubmit="ProductsView-product__submit"
                        classButton="ProductsView-product__button btn btn-primary"
                        textButton="Agregar al carrito"
                    />
                    <Product
                        classCol="ProductsView-product col-3"
                        classProduct="ProductsView-product__card"
                        classBackground="ProductsView-product__background"
                        classImg="ProductsView-product__img"
                        img={ropa_1}
                        alt="Ropa 2"
                        classInfo="ProductsView-product__info"
                        className="ProductsView-product__name"
                        classTitle="ProductsView-product__title"
                        textTitle="producto 2"
                        classDescription="ProductsView-product__description"
                        classText="ProductsView-product__text"
                        text="Lorem ipsum dolor sit amet, sir le pasiui moshle"
                        classPrice="ProductsView-product__Price"
                        classNumber="ProductsView-product__Number"
                        textNumber="$ 1990"
                        classSubmit="ProductsView-product__submit"
                        classButton="ProductsView-product__button btn btn-primary"
                        textButton="Agregar al carrito"
                    />

                    <Product
                        classCol="ProductsView-product col-3"
                        classProduct="ProductsView-product__card"
                        classBackground="ProductsView-product__background"
                        classImg="ProductsView-product__img"
                        img={ropa_1}
                        alt="Ropa 3"
                        classInfo="ProductsView-product__info"
                        className="ProductsView-product__name"
                        classTitle="ProductsView-product__title"
                        textTitle="producto 1"
                        classDescription="ProductsView-product__description"
                        classText="ProductsView-product__text"
                        text="Lorem ipsum dolor sit amet, sir le pasiui moshle"
                        classPrice="ProductsView-product__Price"
                        classNumber="ProductsView-product__Number"
                        textNumber="$ 1990"
                        classSubmit="ProductsView-product__submit"
                        classButton="ProductsView-product__button btn btn-primary"
                        textButton="Agregar al carrito"
                    />
                    <Product
                        classCol="ProductsView-product col-3"
                        classProduct="ProductsView-product__card"
                        classBackground="ProductsView-product__background"
                        classImg="ProductsView-product__img"
                        img={ropa_1}
                        alt="Ropa 4"
                        classInfo="ProductsView-product__info"
                        className="ProductsView-product__name"
                        classTitle="ProductsView-product__title"
                        textTitle="producto 2"
                        classDescription="ProductsView-product__description"
                        classText="ProductsView-product__text"
                        text="Lorem ipsum dolor sit amet, sir le pasiui moshle"
                        classPrice="ProductsView-product__Price"
                        classNumber="ProductsView-product__Number"
                        textNumber="$ 1990"
                        classSubmit="ProductsView-product__submit"
                        classButton="ProductsView-product__button btn btn-primary"
                        textButton="Agregar al carrito"
                    />    
            </div>
        </div>
    </ProductsViewStyled>
)

export default ProductsView