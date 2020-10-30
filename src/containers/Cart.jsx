import React, {Component} from 'react'

import Account from '../components/Account/index'

class Cart extends Component {
    constructor(props){
        super(props)
        this.state = {
            modalIsOpen: false
        }
    }

    handleOnOpenModal = e => {
        this.setState({modalIsOpen: true})
    }

    handleOnCloseModal = e => {
        this.setState({modalIsOpen:false})
    }
    

    render(){
        return(
            <Account 
                isOpen={this.handleOnOpenModal} 
                stateModal={this.state.modalIsOpen} 
                isClose={this.handleOnCloseModal}>
            </Account>
        )
    }
}

export default Cart 