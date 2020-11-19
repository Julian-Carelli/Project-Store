/* eslint-disable no-unused-expressions */
import React, {Component} from 'react'
import {connect} from 'react-redux'

import Newsletter from '../components/Newsletter/index';
import FormRegister from '../components/FormRegister/index';
import Notify from '../components/Notify/index';
import {postUser} from '../store/actions/userActions';
import {regExpUser, regExpEmail} from '../utils/regExp';


class Register extends Component {

    constructor(props){
        super(props)
        this.state = {
            data:{
                username: '',
                email:'',
                password:'',
            },

            error: '',
            notify:'',
            messageUsername: '',
            messagePassword:'',
        }
    }

    showPassword = () => {
        let password = document.getElementById('password');
        let checkbox = document.getElementById('checkbox');
        if(checkbox.checked !== true){
            password.type = 'password';
        }
        else {
            password.type = 'text';
        }
    }

    handleOnChange = event => {
        this.setState({
            data: {
                ...this.state.data,
                [event.target.name]: event.target.value
            },
            error:'',
        })

        if(event.target.name === 'username'){
            const timer = setTimeout(() => {
                this.setState({
                    messageUsername:'message',
                    messagePassword:'',
                })
                setTimeout(() => {
                    this.setState({
                        messageUsername:''
                    })
                }, 3500)
            }, 0)

            return () => setTimeout(timer)
        }
        
        if(event.target.name === 'password'){
            const timer = setTimeout(() => {
                this.setState({
                    messagePassword:'message',
                    messageUsername:'',

                })
                setTimeout(() => {
                    this.setState({
                        messagePassword:'',
                    })
                }, 3500)
            }, 0)

            return () => setTimeout(timer)
        }   
    }

    handleOnSubmit = event => {
        event.preventDefault()

        let user= document.getElementById('user');
        let email = document.getElementById('email');
        let passwordConfirm = document.getElementById('passwordConfirm');
        let password = this.state.data.password;


        if(password === passwordConfirm.value && regExpUser(user.value) && regExpEmail(email.value)){
            this.props.postUser(this.state.data)
            this.props.history.push(process.env.PUBLIC_URL)
        }

        else {
            this.setState({error:'error'})
        }
        
    }

    handleSubmitSubscribe = () => {
        let subscribe = document.getElementById('subscribe');
        if(regExpEmail(subscribe.value)){
            subscribe.value = '';
            const timer = setTimeout(() => {
                this.setState({notify:'load'})
                setTimeout(() => {
                    this.setState({notify:''})
                }, 3500)
            }, 0)
            return () => setTimeout(timer)

        }
        else {
            const timer = setTimeout(() => {
                this.setState({notify:'error'})
                setTimeout(() => {
                    this.setState({notify:''})
                }, 3500)
            }, 0)

            return () => setTimeout(timer)
        }
    }

    render(){

        return(
            <>
            <Newsletter
            handleSubmitSubscribe={this.handleSubmitSubscribe}
            notify={this.state.notify}
            />
            {this.state.notify === 'load' &&
                <Notify
                classText="text-success"
                text="Tu solicitud se ha enviado con exito"
                />
            }
            {this.state.notify === 'error' &&
                <Notify
                classText="text-danger"
                text="Correo electronico invalido, porfavor ingrese otro nuevamente"
                />
            }
            <FormRegister 
            data={this.state.data}
            error={this.state.error}
            messagePassword={this.state.messagePassword}
            messageUsername={this.state.messageUsername}
            handleOnChange={this.handleOnChange} 
            handleOnSubmit={this.handleOnSubmit}
            showPassword={this.showPassword}/>
            </>
        )
    }
}

const mapStateToProps = ({userReducer}) => userReducer

const mapDispatchToProps = {
    postUser,
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)