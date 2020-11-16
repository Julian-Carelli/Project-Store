import React from 'react'

import Product from '../Product/index'
import Redirection from '../Redirection/index'

import ProductsViewStyled from './style'

const ProductsView = ({user, products, handleAddToCart}) => (
    (user.email 

        ?   <ProductsViewStyled>
                <div className="ProductsView container-fluid">
                    <div id="Products" className="ProductsView__row row">
                        {products.length > 0

                            ?   products.map((product => 
                                <Product key={product.id}
                                classCol="ProductsView-product col-12 col-sm-12 col-md-6 col-lg-6 col-xl-3"
                                classProduct="ProductsView-product__card"
                                classBackground="ProductsView-product__background"
                                classImg="ProductsView-product__img"
                                img={product.img}
                                alt="Ropa 1"
                                classInfo="ProductsView-product__info"
                                className="ProductsView-product__content"
                                classTitle="ProductsView-product__title"
                                textTitle={product.name}
                                classDescription="ProductsView-product__content"
                                classText="ProductsView-product__text"
                                text={product.description}
                                classPrice="ProductsView-product__content"
                                classNumber="ProductsView-product__number"
                                textNumber={product.price}
                                classSubmit="ProductsView-product__content"
                                classOnclick={() => handleAddToCart(product.id)}
                                classButton="ProductsView-product__button btn btn-primary"
                                textButton="Agregar al carrito"
                                />
                                ))

                            :  <div className="ProductsView-expected col-12">
                                    <div className="ProductsView-expected__name">
                                        <h2 className="ProductsView-expected__title">No encontramos lo que estas buscando</h2>
                                    </div>
                                    <div className="ProductsView-expected__info">
                                        <p className="ProductsView-expected__text">
                                        Recuerda usar las palabras claves como <strong> remeras</strong>, <strong>zapatillas</strong> y <strong>abrigos</strong> para obtener los resultados que buscas
                                        </p>
                                    </div>
                                </div>
                        }
                        
                    </div>
                </div>
            </ProductsViewStyled>
        
        :   <Redirection
            text="Para acceder a los productos de la tienda, necesitas tener una sesión
            iniciada"
            />
    )
)

export default ProductsView