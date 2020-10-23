import React, {Component} from 'react'

import Product from '../components/Product/index'

class Products extends Component {
    render(){
        return(
            <div className="container">
                <div className="row">
                    <Product></Product>
                </div>
            </div>
        )
    }
}

export default Products 