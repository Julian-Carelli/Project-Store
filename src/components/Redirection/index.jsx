import React from 'react'
import {Link} from 'react-router-dom'

import RedirectionStyled from './style'

const Redirection = ({text}) => (

    <RedirectionStyled>
        <div className="Redirection container">
            <div className="Redirection__row row">
                <div className="Redirection-main col-12">
                    <div className="Redirection-main__name">
                        <h2 className="Redirection-main__title">
                            No puedes acceder a esta sección
                        </h2>
                    </div>
                    <div className="Redirection-main__info">
                        <p className="Redirection-main__text">
                            {text}
                        </p>
                    </div>
                    <div className="Redirection-main__links">
                        <div className="Redirection-main__login">
                            <Link to="/login">
                                <p className="Redirection-main__text">Iniciar sesión</p>
                            </Link>
                        </div>
                        <div className="Redirection-main__register">
                            <Link to="/register">
                                <p className="Redirection-main__text">Crear cuenta</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </RedirectionStyled>
)

export default Redirection