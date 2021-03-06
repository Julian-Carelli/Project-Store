import React from 'react'
import {Link} from 'react-router-dom'

import Error from '../Error/index';

import LoginStyled from './style'
import Figure from '../Figure/index'
import Ropa_1 from '../../assets/images/ropa1.jpg'
import Ropa_2 from '../../assets/images/ropa2.jpg'
import Ropa_3 from '../../assets/images/ropa3.jpg'
import Ropa_4 from '../../assets/images/ropa4.jpg'
import Ropa_5 from '../../assets/images/ropa5.jpg'

const FormLogin = ({error, handleOnChange, userLogin}) => (
    <LoginStyled>
        <div className="Login container-fluid">
            <div className="Login__row row">
                <div className="Login-form col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                    <div className="Login-form__name">
                        <h2 className="Login-form__title">Iniciar sesión</h2>
                    </div>
                    <form onSubmit={userLogin} method="post" className="Login-form__info">
                        <div className="Login-form__email form-group">
                            <label className="Login-form__label">Correo electronico</label>
                            <input name="email" onChange={handleOnChange} className="Login-form__input form-control" maxLength="35" required type="email"
                            placeholder="Ingresa un correo electronico"></input>
                        </div>
                        <div className="Login-form__password form-group ">
                            <label className="Login-form__label">Contraseña</label>
                            <input name="password" onChange={handleOnChange} className="Login-form__input form-control"  required type="password"
                            placeholder="Ingresa una contraseña"></input>
                        </div>

                        <div className="Login-form__notification form-group">
                            <input type="checkbox" className="Login-from__checkbox form-group"></input>
                            <label className="Login-form__label-checkbox">Recordar contraseña</label>
                        </div>

                        <div className="Login-form__error">
                            {error === 'error' && (
                                <Error classText="Login-form__text text-danger" text="La cuenta o la contraseña es incorrecta. Porfavor ingrese nuevamente los datos"/>  
                            )}
                        </div>

                        <div className="Login-form__request">
                            <button className="Login-form__button btn btn-primary">
                                Iniciar Sesion
                            </button>
                        </div>
                    </form>
                    <div className="Login-form__links">
                        <div className="Login-form__createAccount">
                            <Link to={process.env.PUBLIC_URL + "/register"}>
                                <p className="Login-form__register">Crear cuenta</p>
                            </Link>
                        </div>
                        <div className="Login-form__forgottenPassword">
                            <Link to="#">
                                <p className="Login-form__password">¿Has olvidado tu contraseña?</p>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="Login-badge col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                    <div className="Login-badge__name">
                        <h2 className="Login-badge__title">Inicia sesion para ver los nuevas novedades de project Store</h2>
                    </div>
                    <Figure
                        classBackground="Login-badge__background"
                        classFigure="Login-badge__figure"
                        classImg="Login-badge__img"
                        img1={Ropa_1}
                        img2={Ropa_2}
                        img3={Ropa_3}
                        img4={Ropa_4}
                        img5={Ropa_5}>        
                    </Figure>
                </div>
            </div>    
        </div>
    </LoginStyled>
)

export default FormLogin