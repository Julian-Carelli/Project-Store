import React from 'react'
import {Link} from 'react-router-dom'

import PresentationStyled from './style'

const Presentation = () => (
    <PresentationStyled>
        <div className="Presentation container">
            <div className="Presentation-row row">
                <div className="Presentation-row__name col-6">
                    <h1 className="Presentation-row__title">Nuestro Catalogo</h1>
                </div>
                <div className="Presentation-row__info col-6">
                    <Link to="/products">
                        <button className="Presentation-row__button btn btn-primary">Mas informacion</button>
                    </Link>
                </div>
            </div>
        </div>
    </PresentationStyled>  
)

export default Presentation