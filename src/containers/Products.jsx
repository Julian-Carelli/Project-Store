import React, {Component} from 'react'

import Filter from '../components/Filter/index'
import ProductsView from '../components/ProductsView/index'

class Products extends Component {
    render(){
        return(
            <>
            <Filter></Filter>
            <ProductsView></ProductsView>
            </>
        )
    }
}

export default Products 