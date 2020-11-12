import React, {Component} from 'react'
import {connect} from 'react-redux'

import Filter from '../components/Filter/index'
import ProductsView from '../components/ProductsView/index'
import {addToCart} from '../store/actions/cartActions'
import {filterProducts} from '../store/actions/productActions'


class Products extends Component {

    constructor(props){
        super(props)
        this.state = {
            filter: '',
            products:this.props.productsReducer.products
        }
    }

    handleAddToCart = (key) => {
        const id = key;
        this.props.addToCart(id);
    }

    handleFilterAll = () => {
        const productsInmutable = [...this.props.productsReducer.products]

        this.setState({
            products:productsInmutable
        })

    }

    handleFilterButton = (type) => {
        const productsInmutable = [...this.props.productsReducer.products]

        const filterProducts = productsInmutable.filter(element => element.type === type)

        this.setState({
            products:filterProducts
        })
    }


    handleFilterSearch = async (event) => {
        const productsInmutable = [...this.props.productsReducer.products]

        await this.setState({
            filter:event.target.value
        })

        const filterProducts = productsInmutable.filter(
            (product) => {
                return product.type.indexOf(this.state.filter) !== -1
            }
        )

        if(this.state.filter === ''){
            await this.setState({
                products:productsInmutable
            })
        }
        else {
            await this.setState({
                products:filterProducts
            })
        }
    }

    render(){
        return(
            <>
            <Filter 
            user={this.props.userReducer.user}
            filter={this.state.filter}
            handleFilterAll={this.handleFilterAll}
            handleFilterButton={this.handleFilterButton}
            handleFilterSearch={this.handleFilterSearch}
            ></Filter>
            
            <ProductsView 
            user={this.props.userReducer.user}
            filter={this.state.filter}
            products={this.state.products}
            handleAddToCart={this.handleAddToCart}
            ></ProductsView>
            </>
        )
    }
}

const mapStateToProps = ({userReducer, productsReducer, cartReducer}) => ({
    userReducer,
    productsReducer,
    cartReducer,
})

const mapDispatchToProps = {
    addToCart,
    filterProducts,
}

export default connect(mapStateToProps, mapDispatchToProps)(Products) 