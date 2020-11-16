import React, {Component} from 'react'
import {connect} from 'react-redux'

import FormLogin from '../components/FormLogin/index';
import {onlineUser} from '../store/actions/userActions';


class Login extends Component {
    constructor(props){
        super(props)
        this.state = {
            data:{
                username: '',
                email:'',
                password:'',
            },
            error:''
        }
    }

    handleOnChange = async event => {
        await this.setState({
            data: {
                ...this.state.data,
                [event.target.name]:event.target.value
            },
            error:''
        })

    }

    userLogin = event => {
        event.preventDefault()

        const offline = {...this.props.userReducer.offline}

        if(this.state.data.email === offline.email && this.state.data.password === offline.password){
            this.props.onlineUser()
            return this.props.history.push('/Project-Store/products')
        }

        else {
            this.setState({error:'error'})
        } 

    }

    render(){
        return(
            <FormLogin 
            error={this.state.error}
            handleOnChange={this.handleOnChange}
            userLogin={this.userLogin} 
            />   
        )  
    }
}

const mapStateToProps = ({userReducer, productsReducer}) => ({
   userReducer,
   productsReducer 
}) 

const mapDispatchToProps = {
    onlineUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)