import React, {Component} from 'react'
import {connect} from 'react-redux'

import Presentation from '../components/Presentation/index'
import {getUser} from '../store/actions/userActions'

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            user:undefined
        }
    }

    componentDidMount(){
        const {user} = this.props
        const data = {...user}

        this.setState({user:data}, null)
    }

    userCreated = (user) => {
        if(user.username){
            return this.props.history.push('/Project-Store/products')
        }
        this.props.history.push('/Project-Store/register')
    }
    


    

    render(){

        return(
            <Presentation user={this.state.user} userCreated={this.userCreated}/>
        )
    }
}

const mapStateToProps = ({userReducer}) => userReducer
const mapDispatchToPros = {
    getUser
}

export default connect(mapStateToProps, mapDispatchToPros)(Home) 