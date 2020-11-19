import React from 'react'

import Error from '../Error/index'

import FormRegisterStyled from './style'

const FormRegister = ({messagePassword, messageUsername, handleOnSubmit, handleOnChange, showPassword, error}) => (
    <FormRegisterStyled>
        <div className="Register container-fluid">
            <div className="Register__row row">
                <div className="Register-form col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                    <div className="Register-form__name">
                        <h2 className="Register-form__title">Registrarse</h2>
                    </div>
                    <form action="post" onSubmit={handleOnSubmit} className="Register-form__info">
                        <div className="Register-form__content form-group">
                            <label className="Register-form__label">Nombre de usuario</label>
                            <input id="user" name="username" onChange={handleOnChange} className="Register-form__input form-control" maxLength="15" required type="text"
                            placeholder="Ingresa un nombre de usuario"></input>
                            {messageUsername && 
                            <p className="Register-form__text mt-3">Recuerda que esta permitido entre 5 a 15 caracteres, desde numeros a letras</p>
                            }
                        </div>
                        <div className="Register-form__content form-group">
                            <label className="Register-form__label">Correo electronico</label>
                            <input id="email" name="email" onChange={handleOnChange} className="Register-form__input form-control" maxLength="35" required type="email"
                            placeholder="Ingresa un correo electronico"></input>
                        </div>
                        <div className="Register-form__content form-group ">
                            <label className="Register-form__label">Contraseña</label>
                            <input id="password" name="password" type="password" onChange={handleOnChange}  className="Register-form__input form-control" maxLength="20" required 
                            placeholder="Ingresa una contraseña"></input>
                            <input type="checkbox" id="checkbox" onClick={() => showPassword()}className="Register-from__checkbox form-group"></input>
                            <label className="Register-form__label-checkbox">Mostrar contraseña</label>
                            {messagePassword && 
                            <p className="Register-form__text">Recuerda que esta permitido 20 caracteres como maximo, desde numeros a letras</p>
                            }
                        </div>
                        <div className="Register-form__content form-group ">
                            <label className="Register-form__label">Repetir Contraseña</label>
                            <input id="passwordConfirm" className="Register-form__input form-control"  required type="password"
                            placeholder="Vuelva a escribir la contraseña"></input>  
                        </div>
                        <div className="Register-form__notify form-group">
                            <input type="checkbox" className="Register-from__checkbox form-group"></input>
                            <label className="Register-form__label-checkbox">Quieres recibir notificaciones de nuestros productos</label>
                        </div>
                        {error === 'error' && (
                        <div className="Register-form__error">
                            <Error classText="Register-form__text text-danger" text="El usuario, las contraseñas y/o el correo electronico no son validos, ingrese nuevamente los datos"/>
                        </div>
                        )}
                        <div className="Register-form__request">
                            <button className="Register-form__button btn btn-primary">Registrarse</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </FormRegisterStyled>
)
            

export default FormRegister