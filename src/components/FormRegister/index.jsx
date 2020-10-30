import React, {Component} from 'react'

import FormRegisterStyled from './style'

class FormRegister extends Component {
    render(){
        return(
            <FormRegisterStyled>
                <div className="Register container-fluid">
                    <div className="Register__row row">
                        <div className="Register-form col-12">
                            <div className="Register-form__name">
                                <h2 className="Register-form__title">Registrarse</h2>
                            </div>
                            <div className="Register-form__info">
                                <div className="Register-form__user form-group">
                                    <label className="Register-form__label">Nombre de usuario</label>
                                    <input className="Register-form__input form-control" maxLength="15" required type="text"
                                    placeholder="Ingresa un nombre de usuario"></input>
                                </div>
                                <div className="Register-form__email form-group">
                                    <label className="Register-form__label">Correo electronico</label>
                                    <input className="Register-form__input form-control" maxLength="35" required type="email"
                                    placeholder="Ingresa un correo electronico"></input>
                                </div>
                                <div className="Register-form__password form-group ">
                                    <label className="Register-form__label">Contraseña</label>
                                    <input className="Register-form__input form-control" required type="text"
                                    placeholder="Ingresa una contraseña"></input>
                                </div>
                                <div className="Register-form__password form-group ">
                                    <label className="Register-form__label">Repetir Contraseña</label>
                                    <input className="Register-form__input form-control"  required type="text"
                                    placeholder="Vuelva a escribir la contraseña"></input>
                                </div>
                                <div className="Register-form__notification form-group">
                                    <input type="checkbox" className="Register-from__checkbox form-group"></input>
                                    <label className="Register-form__label-checkbox">Quieres recibir notificaciones de nuestros productos</label>
                                </div>
                                <div className="Register-form__request">
                                    <button type=""className="Register-form__button btn btn-primary">Registrarse</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </FormRegisterStyled>
            
        )
    }
}


export default FormRegister