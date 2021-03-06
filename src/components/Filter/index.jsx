import React from 'react'

import OrganizeButton from '../OrganizeButton/index'

import FilterStyled from './style'

const Filter = ({user, handleFilterButton, handleFilterAll, handleFilterSearch}) => (
    (user.email
            ?  <FilterStyled>
                    <div className="Filter container-fluid">
                        <div className="Filter__row row">
                            <div className="Filter__name col-6">
                                <h2 className="Filter__title">Catálogo</h2>
                            </div>
                        </div>
                        <div className="Filter__row row">
                            <OrganizeButton
                                classCol="Filter-organizeButton col-3"
                                classContain="Filter-organizeButton__contain"
                                handleFilterButton={() => handleFilterAll()}
                                classButton="Filter-organizeButton__button btn btn-primary"
                                text="Todos">
                            </OrganizeButton>
                            <OrganizeButton
                                classCol="Filter-organizeButton col-3"
                                classContain="Filter-organizeButton__contain"
                                handleFilterButton={() => handleFilterButton('remeras')}
                                classButton="Filter-organizeButton__button btn btn-primary"
                                text="Remeras">
                            </OrganizeButton>
                            <OrganizeButton
                                classCol="Filter-organizeButton col-3"
                                classContain="Filter-organizeButton__contain"
                                handleFilterButton={() => handleFilterButton('zapatillas')}
                                classButton="Filter-organizeButton__button btn btn-primary"
                                text="Zapatillas">
                            </OrganizeButton>
                            <OrganizeButton
                                classCol="Filter-organizeButton col-3"
                                classContain="Filter-organizeButton__contain"
                                handleFilterButton={() => handleFilterButton('abrigos')}
                                classButton="Filter-organizeButton__button btn btn-primary"
                                text="Abrigos">
                            </OrganizeButton>
                        </div>
                        <div className="Filter__filter row">
                            <div className="Filter__search col-12">
                                <input onChange={handleFilterSearch} className="Filter__input form-group" placeholder="Buscar por 'remeras', 'zapatillas', 'abrigos'"></input>
                            </div>
                        </div>
                    </div>

                </FilterStyled>
            
            : ''
    )

)

export default Filter