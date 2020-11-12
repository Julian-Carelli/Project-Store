import React, {Component} from 'react'
import {connect} from 'react-redux'

import FormLogin from '../components/FormLogin/index';


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

        const user = {...this.props.user}


        if(this.state.data.email === user.email && this.state.data.password === user.password){
            return this.props.history.push('/products')
        }

        else {
            this.setState({error:'error'})
        } 

    }

    render(){
        return(
            <FormLogin 
            data={this.state.data}
            error={this.state.error}
            handleOnChange={this.handleOnChange}
            userLogin={this.userLogin} 
            />   
        )  
    }
}

const mapStateToProps = ({userReducer}) => userReducer

export default connect(mapStateToProps)(Login)