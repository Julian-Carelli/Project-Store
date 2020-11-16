import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import { ThemeProvider } from 'styled-components';

import variables from '../assets/variables/variables'
import Layout from '../components/Layout/index'
import Home from '../containers/Home'
import Products from '../containers/Products'
import Cart from '../containers/Cart'
import Register from '../containers/Register'
import Login from '../containers/Login'
import NotFound from '../components/NotFound/index'

const theme = variables

const App = () => (
    <BrowserRouter>
        <ThemeProvider theme={theme}>
            <Layout>
                <Switch>
                    <Route exact path="/project-store" component={Home}></Route>
                    <Route exact path="/products" component={Products}></Route>
                    <Route exact path="/cart" component={Cart}></Route>
                    <Route exact path="/register" component={Register}></Route>
                    <Route exact path="/login" component={Login}></Route>
                    <Route exact component={NotFound}></Route>
                </Switch>
            </Layout>
        </ThemeProvider>
        
    </BrowserRouter>
)

export default App