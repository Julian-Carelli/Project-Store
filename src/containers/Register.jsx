import React, {Component} from 'react'

import Newsletter from '../components/Newsletter/index'
import FormRegister from '../components/FormRegister/index';



class Register extends Component {
    render(){
        return(
            <>
            <Newsletter/>
            <FormRegister/>
            </>
        )
    }
}

export default Register 