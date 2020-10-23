import React from 'react'

import Navbar from '../Navbar/index'

const Layout = ({children}) => (
    <>
    <Navbar/>
    {children}
    </>

)

export default Layout