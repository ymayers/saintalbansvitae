import React from 'react'

import Header from './Header'

const Layout = (props) => (
    <div className="layout">
      <Header />
    <div>{props.children}</div>
      
      </div>
  )


export default Layout
