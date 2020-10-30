import React from 'react'

import OrganizeButton from '../OrganizeButton/index'
import FilterStyled from './style'

const Filter = () => (
    <FilterStyled>
        <div className="Filter container-fluid">
            <div className="Filter__row row">
                <div className="Filter__name col-12">
                    <h2 className="Filter__title">Catálogo</h2>
                </div>
            </div>
            <div className="Filter__row row">
                <OrganizeButton
                    classCol="Filter-organizeButton col-3"
                    classContain="Filter-organizeButton__contain"
                    classButton="Filter-organizeButton__button btn btn-primary"
                    text="Todos">
                </OrganizeButton>
                <OrganizeButton
                    classCol="Filter-organizeButton col-3"
                    classContain="Filter-organizeButton__contain"
                    classButton="Filter-organizeButton__button btn btn-primary"
                    text="Remeras">
                </OrganizeButton>
                <OrganizeButton
                    classCol="Filter-organizeButton col-3"
                    classContain="Filter-organizeButton__contain"
                    classButton="Filter-organizeButton__button btn btn-primary"
                    text="Calzado">
                </OrganizeButton>
                <OrganizeButton
                    classCol="Filter-organizeButton col-3"
                    classContain="Filter-organizeButton__contain"
                    classButton="Filter-organizeButton__button btn btn-primary"
                    text="Abrigos">
                </OrganizeButton>
            </div>
        </div>
    </FilterStyled>

)

export default Filter