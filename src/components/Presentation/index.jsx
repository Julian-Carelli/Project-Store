import React from 'react'

import Figure from '../Figure/index'

import PresentationStyled from './style'
import Ropa_1 from '../../assets/images/ropa1.jpg'
import Ropa_2 from '../../assets/images/ropa2.jpg'
import Ropa_3 from '../../assets/images/ropa3.jpg'
import Ropa_4 from '../../assets/images/ropa4.jpg'
import Ropa_5 from '../../assets/images/ropa5.jpg'


const Presentation = ({user, userCreated}) => (
    <PresentationStyled>
        <div className="Presentation container-fluid">
            <div className="Presentation-row row">
                <div className="Presentation-row__col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                    <Figure
                        classBackground="Presentation-row__background"
                        classFigure="Presentation-row__figure"
                        classImg="Presentation-row__img"
                        img1={Ropa_1}
                        img2={Ropa_2}
                        img3={Ropa_3}
                        img4={Ropa_4}
                        img5={Ropa_5}>
                    </Figure>
                </div>
                <div className="Presentation-row__col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                    <div className="Presentation-row__name">
                        <h1 className="Presentation-row__title">Gracias por participar, conoce nuestra marca y nuestro productos</h1>
                    </div>
                    <div className="Presentation-row__info">
                        <p className="Presentation-row__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim sapiente corporis sed praesentium maxime quidem itaque numquam repellat quo atque cupiditate, cum incidunt quasi pariatur accusantium autem unde delectus at!</p>
                    </div>
                    <div className="Presentation-row__link">
                        <button onClick={() => userCreated(user)} className="Presentation-row__button btn btn-primary">Mas informacion</button>
                    </div>
                    
                </div>
            </div>
        </div>
    </PresentationStyled>  
)

export default Presentation