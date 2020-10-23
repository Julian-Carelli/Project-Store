import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Layout from '../components/Layout/index'
import Home from '../containers/Home'
import Products from '../containers/Products'
import Cart from '../containers/Cart'
import Register from '../containers/Register'
import Login from '../containers/Login'

const App = () => (
    <BrowserRouter>
        <Layout>
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/products" component={Products}></Route>
                <Route exact path="/cart" component={Cart}></Route>
                <Route exact path="/register" component={Register}></Route>
                <Route exact path="/login" component={Login}></Route>
            </Switch>
        </Layout>
    </BrowserRouter>
)

export default App