import React from 'react'
import {Link} from 'react-router-dom'

import NotFoundStyled from './style'

const NotFound = () => (
    <NotFoundStyled>
        <div className="NotFound container-fluid">
            <div className="NotFound__row row">
                <div className="NotFound-Error404 col-12">
                    <div className="NotFound-Error404__name">
                        <h2 className="NotFound-Error404__title">
                            Error 404
                        </h2>
                    </div>
                    <div className="NotFound-Error404__info">
                        <p className="NotFound-Error404__text">
                            Pagina no encontrada
                        </p>
                    </div>
                    <div className="NotFound-Error404__link">
                        <Link to={process.env.PUBLIC_URL}>
                                <p className="NotFound-Error404__redirection">
                                    Volver al Home
                                </p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </NotFoundStyled>
)

export default NotFound