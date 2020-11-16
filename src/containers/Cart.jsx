import React, {Component} from 'react'
import {connect} from 'react-redux'

import Account from '../components/Account/index'
import {deleteToCart, confirmBuy} from '../store/actions/cartActions'

class Cart extends Component {
    constructor(props){
        super(props)
        this.state = {
            modalIsOpen: false
        }
    }

    handleDeleteToCart = (key) => {
        const id = key;
        this.props.deleteToCart(id)
    }

    handlePriceTotal = () => {
        let total = 0;
        this.props.cartReducer.cart.map((element => (
            total += element.price
        )))
        return total
    }

    handleConfirmBuy = () => {
        this.props.confirmBuy()
        this.props.history.push(process.env.PUBLIC_URL)
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
                isClose={this.handleOnCloseModal}
                handleDeleteToCart={this.handleDeleteToCart}
                handlePriceTotal={this.handlePriceTotal}
                handleConfirmBuy={this.handleConfirmBuy}
                user={this.props.userReducer.user}
                cart={this.props.cartReducer.cart}>
            </Account>
        )
    }
}

const mapStateToProps = ({userReducer, cartReducer}) => ({
    userReducer,
    cartReducer,
})

const mapDispatchToPros = {
    deleteToCart,
    confirmBuy
}

export default connect(mapStateToProps, mapDispatchToPros)(Cart) 